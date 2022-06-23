const bcrypt = require('bcrypt');

async function getUsers() {
  return [{
    role: 'admin',
    firstName: 'Админ',
    lastName: 'Админ',
    nickName: 'admin',
    pass: await bcrypt.hash('aGbj13Yth08n', 10),
    solorank: null,
    duorank: null,
    solowon: 0,
    sololost: 0,
    duowon: 0,
    duolost: 0,
    active: true,
    ban: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  }, {
    role: 'hallManager',
    firstName: 'MZ-1.0',
    lastName: 'MZ-1.0',
    nickName: 'Менеджер зала',
    pass: await bcrypt.hash('elbrus_tennis', 10),
    solorank: null,
    duorank: null,
    solowon: 0,
    sololost: 0,
    duowon: 0,
    duolost: 0,
    active: true,
    ban: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  }, {
  // Тут начинаются обычные юзеры
    role: 'user',
    firstName: 'Илья',
    lastName: 'Пушторский',
    nickName: 'MrIcePea',
    pass: await bcrypt.hash('kGbj13Yth08y', 10),
    solorank: 520,
    duorank: 150,
    solowon: 10,
    sololost: 9,
    duowon: 0,
    duolost: 0,
    active: true,
    ban: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  }, {
    role: 'user',
    firstName: 'Глеб',
    lastName: 'Прилепин',
    nickName: 'playbey',
    pass: await bcrypt.hash('123', 10),
    solorank: 850,
    duorank: 200,
    solowon: 40,
    sololost: 5,
    duowon: 3,
    duolost: 0,
    active: true,
    ban: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  }, {
    role: 'user',
    firstName: 'Александр',
    lastName: 'Коробов',
    nickName: 'sashka228',
    pass: await bcrypt.hash('123', 10),
    solorank: 10,
    duorank: 30,
    solowon: 5,
    sololost: 20,
    duowon: 3,
    duolost: 9,
    active: true,
    ban: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  }, {
    role: 'user',
    firstName: 'Дарсен',
    lastName: 'Унгарлинов',
    nickName: 'darsenKorol',
    pass: await bcrypt.hash('123', 10),
    solorank: 390,
    duorank: 230,
    solowon: 32,
    sololost: 20,
    duowon: 3,
    duolost: 0,
    active: true,
    ban: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  }, {
    role: 'user',
    firstName: 'Антон',
    lastName: 'Панферов',
    nickName: 'flamethrower',
    pass: await bcrypt.hash('123', 10),
    solorank: 2150,
    duorank: 2150,
    solowon: 100,
    sololost: 0,
    duowon: 100,
    duolost: 0,
    active: true,
    ban: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  }, {
    role: 'user',
    firstName: 'Андрей',
    lastName: 'Рунов',
    nickName: 'elefant86',
    pass: await bcrypt.hash('123', 10),
    solorank: 149,
    duorank: 490,
    solowon: 1,
    sololost: 1,
    duowon: 19,
    duolost: 2,
    active: true,
    ban: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  }, {
    role: 'user',
    firstName: 'Обычный',
    lastName: 'Игрок',
    nickName: 'regPl1',
    pass: await bcrypt.hash('123', 10),
    solorank: 210,
    duorank: 410,
    solowon: 4,
    sololost: 1,
    duowon: 15,
    duolost: 2,
    active: true,
    ban: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  }, {
    role: 'user',
    firstName: 'Обычный',
    lastName: 'Игрок',
    nickName: 'regPl2',
    pass: await bcrypt.hash('123', 10),
    solorank: 60,
    duorank: 135,
    solowon: 1,
    sololost: 10,
    duowon: 1,
    duolost: 2,
    active: true,
    ban: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  }, {
    role: 'user',
    firstName: 'Обычный',
    lastName: 'Игрок',
    nickName: 'regPl3',
    pass: await bcrypt.hash('123', 10),
    solorank: 153,
    duorank: 0,
    solowon: 2,
    sololost: 2,
    duowon: 0,
    duolost: 25,
    active: true,
    ban: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  }, {
    role: 'user',
    firstName: 'Обычный',
    lastName: 'Игрок',
    nickName: 'regPl4',
    pass: await bcrypt.hash('123', 10),
    solorank: 250,
    duorank: 310,
    solowon: 7,
    sololost: 2,
    duowon: 10,
    duolost: 2,
    active: true,
    ban: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  }, {
    role: 'user',
    firstName: 'Обычный',
    lastName: 'Игрок',
    nickName: 'regPl5',
    pass: await bcrypt.hash('123', 10),
    solorank: 0,
    duorank: 133,
    solowon: 0,
    sololost: 200,
    duowon: 0,
    duolost: 1,
    active: true,
    ban: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  }, {
    role: 'user',
    firstName: 'Обычный',
    lastName: 'Игрок',
    nickName: 'regPl6',
    pass: await bcrypt.hash('123', 10),
    solorank: 10,
    duorank: 53,
    solowon: 3,
    sololost: 23,
    duowon: 3,
    duolost: 15,
    active: true,
    ban: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  }, {
  // Юзеры, которые сыграли по 0 игр
    role: 'user',
    firstName: 'Василий',
    lastName: 'Григорьев',
    nickName: '89163091443',
    pass: await bcrypt.hash('123', 10),
    solorank: 150,
    duorank: 150,
    solowon: 0,
    sololost: 0,
    duowon: 0,
    duolost: 0,
    active: true,
    ban: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  }, {
    role: 'user',
    firstName: 'Не играл',
    lastName: 'Игры',
    nickName: 'noGames1',
    pass: await bcrypt.hash('123', 10),
    solorank: 150,
    duorank: 150,
    solowon: 0,
    sololost: 0,
    duowon: 0,
    duolost: 0,
    active: true,
    ban: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  }, {
    role: 'user',
    firstName: 'Не играл',
    lastName: 'Игры',
    nickName: 'noGames2',
    pass: await bcrypt.hash('123', 10),
    solorank: 150,
    duorank: 150,
    solowon: 0,
    sololost: 0,
    duowon: 0,
    duolost: 0,
    active: true,
    ban: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  }, {
  // Юзеры, которые еще не прошли подтверждение
    role: 'user',
    firstName: 'Александр',
    lastName: 'Бессонов',
    nickName: 'sasha',
    pass: await bcrypt.hash('123', 10),
    solorank: 150,
    duorank: 150,
    solowon: 0,
    sololost: 0,
    duowon: 0,
    duolost: 0,
    active: false,
    ban: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  }, {
    role: 'user',
    firstName: 'Александр',
    lastName: 'Ерохин',
    nickName: 'sashOk',
    pass: await bcrypt.hash('123', 10),
    solorank: 150,
    duorank: 150,
    solowon: 0,
    sololost: 0,
    duowon: 0,
    duolost: 0,
    active: false,
    ban: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  }, {
    role: 'user',
    firstName: 'Ждун',
    lastName: 'Подтверждения',
    nickName: 'zhdun1',
    pass: await bcrypt.hash('123', 10),
    solorank: 150,
    duorank: 150,
    solowon: 0,
    sololost: 0,
    duowon: 0,
    duolost: 0,
    active: false,
    ban: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  }, {
    role: 'user',
    firstName: 'Ждун',
    lastName: 'Подтверждения',
    nickName: 'zhdun2',
    pass: await bcrypt.hash('123', 10),
    solorank: 150,
    duorank: 150,
    solowon: 0,
    sololost: 0,
    duowon: 0,
    duolost: 0,
    active: false,
    ban: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  }, {
  // Забаненные
    role: 'user',
    firstName: 'Левый',
    lastName: 'Чел',
    nickName: 'badboy1',
    pass: await bcrypt.hash('123', 10),
    solorank: 150,
    duorank: 150,
    solowon: 0,
    sololost: 0,
    duowon: 0,
    duolost: 0,
    active: false,
    ban: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  }, {
    role: 'user',
    firstName: 'Гадкий',
    lastName: 'Чел',
    nickName: 'badboy2',
    pass: await bcrypt.hash('123', 10),
    solorank: 4500,
    duorank: 4500,
    solowon: 150,
    sololost: 0,
    duowon: 150,
    duolost: 0,
    active: false,
    ban: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  }];
}

module.exports = getUsers;
