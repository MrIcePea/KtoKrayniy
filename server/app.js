/* eslint-disable max-len */
const express = require('express');
const createError = require('http-errors');
// const hbs = require('hbs');
const logger = require('morgan');
const path = require('path');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const cors = require('cors');
const { checkSession, checkLogin } = require('./middleWare/middleWare');
const indexRouter = require('./routers/indexRouter');
const checkRouter = require('./routers/checkRouter');


const usersRouter = require('./routes/users');
const queueRouter = require('./routes/queue');
const tournamentsRouter = require('./routes/tournaments');

const app = express();
const { PORT } = process.env;

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
// hbs.registerPartials(path.join('views', 'partials'));
app.all('/', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  next();
});
// app.use(cors());
app.use(cors({ credentials: true, origin: true }));
app.use(logger('dev'));
// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session({
  store: new FileStore({}),
  name: 'sID',
  secret: 'user',
  resave: false,
  saveUninitialized: false,
  cookie: {
    expires: 24 * 60 * 60e3,
    httpOnly: true,
  },
}));
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

app.listen(PORT, () => {
  console.log(`server started PORT: ${PORT}`);
});
