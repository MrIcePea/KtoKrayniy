/* eslint-disable no-param-reassign */
/* eslint-disable max-len */
const express = require('express');
const createError = require('http-errors');
const logger = require('morgan');
const path = require('path');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const cors = require('cors');
// ws
const http = require('http');
const { WebSocketServer } = require('ws');
const { v4: uuidv4 } = require('uuid');
const { checkSession, checkLogin } = require('./middleWare/middleWare');
const indexRouter = require('./routers/indexRouter');
const checkRouter = require('./routers/checkRouter');
const { Queue, User } = require('./db/models');

const usersRouter = require('./routes/users');
const queueRouter = require('./routes/queue');
const tournamentsRouter = require('./routes/tournaments');

const sessionParser = session({
  store: new FileStore({}),
  name: 'sID',
  secret: 'user',
  resave: false,
  saveUninitialized: false,
  cookie: {
    expires: 24 * 60 * 60e3,
    httpOnly: false,
  },
});
const app = express();
const map = new Map();
const { PORT } = process.env;

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
app.use(cors({ credentials: true, origin: true }));
app.use(logger('dev'));
// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(sessionParser);
app.use(checkSession);
app.use('/', indexRouter);
app.use('/check', checkRouter);
app.use('/users', usersRouter);
app.use('/queue', queueRouter);
app.use('/tournaments', tournamentsRouter);

// Если HTTP-запрос дошёл до этой строчки, значит ни один из ранее встречаемых рутов не ответил на запрос. Это значит, что искомого раздела просто нет на сайте. Для таких ситуаций используется код ошибки 404. Создаём небольшое middleware, которое генерирует соответствующую ошибку.
app.use((req, res, next) => {
  const error = createError(404, 'Запрашиваемой страницы не существует на сервере.');
  next(error);
});

// Отлавливаем HTTP-запрос с ошибкой и отправляем на него ответ.
app.use((err, req, res, next) => {
// Получаем текущий ражим работы приложения.
  const appMode = req.app.get('env');
  // Создаём объект, в котором будет храниться ошибка.
  let error;

  // Если мы находимся в режиме разработки, то отправим в ответе настоящую ошибку. В противно случае отправим пустой объект.
  if (appMode === 'development') {
    error = err;
  } else {
    error = {};
  }

  // Записываем информацию об ошибке и сам объект ошибки в специальные переменные, доступные на сервере глобально, но только в рамках одного HTTP-запроса.
  res.locals.message = err.message;
  res.locals.error = error;

  // Задаём в будущем ответе статус ошибки. Берём его из объекта ошибки, если он там есть. В противно случае записываем универсальный стату ошибки на сервере - 500.
  res.sendStatus(err.status || 500);
  // Формируем HTML-текст из шаблона "error.hbs" и отправляем его на клиент в качестве ответа.
  res.render('error');
});
//  все app - проходят через server  http
const server = http.createServer(app);
// clientTracking: false - данные о подключении собираются в Map
// noServer: true  - запускаем на одном порту серв. раб. на http и wss
const wss = new WebSocketServer({ clientTracking: false, noServer: true });
// Part1
const mapQueue = [];

server.on('upgrade', (req, socket, head) => {
  console.log('Зпауск WS...');

  //  провервка наличия сессии, если нужно рассылать всем за закоментить sessionParser
  sessionParser(req, {}, () => {
    // console.log('Проверка на наличие сессии, в случае ее отсутствия убивается сокет');
    // console.log('--->>> значение пришедей сессии', req.session.user);
    if (!req.session.user) {
      // if (req.session.user.id) { mapQueue.splice(mapQueue.indexOf(req.session.user.id), 1); }
      socket.write('HTTP/1.1 401 Unauthorized\r\n\r\n');
      socket.destroy();
      console.log('Сокет убит!');
      return;
    }

    wss.handleUpgrade(req, socket, head, (ws) => {
      // console.log('Апгрейд соединения http+ws в текущей сессии - ws - ОЧЕНЬ БОЛЬШОЙ ОБЪЕКТ');
      wss.emit('connection', ws, req);
    });
  });
});

// Part2
wss.on('connection', (ws, req) => {
  // console.log('onConnection', req.session);
  // console.log('----wss - соединение -----');
  const id = req.session.user?.id || uuidv4();
  // console.log('userId ----->>>>>', id);
  ws.userId = id;

  // console.log('присваиваем ws.userId = req.session.user.id  =  ', ws.userId);
  // console.log(' WS уникальный идентификаторо пользователя  = БОЛЬШОЙ ОБЪЕКТ ws');
  // ws - идентификатор конкретного юзера
  // map.set(ws);
  const findeUserId = mapQueue.map((el) => el.userId);
  console.log(findeUserId);
  if (!findeUserId.includes(ws.userId)) mapQueue.push(ws);
  console.log('Колличество залогиненных пользователей = ', mapQueue.length);
  // console.log(' загоняем WS пользователя в массив mapQueue - текущее значение = ', mapQueue.length);

  // ws.send(JSON.stringify({ type: 'test', payload: 'ololo' }));
  // console.log('Отправили текущему ws пользователю  ws.send(JSON.stringify({ type: test, payload: ololo })');

  async function getQueue() {
    // console.log('13--------------------');
    const queue = await Queue.findAll(
      {
        order: [
          ['id', 'ASC'],
        ],
        include: {
          model: User,
          where: { role: 'user' },
          attributes: { exclude: ['role', 'pass'] },
        },
      },
    );
    // console.log('11--------------------');
    const message = { type: 'START', params: { queue } };

    mapQueue.forEach((el) => el.send(JSON.stringify(message)));
    // console.log('12--------------------');
    // console.log('map ---->', map);
    // ws.send(JSON.stringify(message));
  }

  async function addToQueue(params) {
    // console.log('13--------------------');
    const userQueueId = params.id;
    await Queue.create({ user_id: userQueueId });
    const userInQueue = await Queue.findOne(
      {
        where: { user_id: userQueueId },
        include: {
          model: User,
          where: { role: 'user' },
          attributes: { exclude: ['role', 'pass'] },
        },
      },
    );
    const message = { type: 'ADD_TO_QUEUE', params: { userInQueue } };
    mapQueue.forEach((el) => el.send(JSON.stringify(message)));
  }

  ws.on('message', (message) => {
    console.log('message----------->>>', JSON.parse(message));
    const { type, params } = JSON.parse(message);
    switch (type) {
      case 'START':
        getQueue();
        // console.log('14--------------------', message);
        break;
      case 'ADD_TO_QUEUE':
        addToQueue(params);
        // console.log('14--------------------', message);
        break;
      default:
        console.log('error switch onmessage');
        break;
    }

    // Here we can now use session parameters.
    //
    // console.log('JSON.parse(message)', JSON.parse(message));
    // console.log(`Received message ${message} from user `);
  });

  ws.on('close', () => {
    // if (id) { mapQueue.splice(mapQueue.indexOf(id), 1); }
    // map.delete(id);
    console.log('map.delete(id)-------id= ', id);
    console.log('mapQueue.length-------id= ', mapQueue.length);
  });
});

server.listen(PORT, () => {
  console.log('000--------------------');
  console.log(`server started PORT: ${PORT}`);
});
