const { Queue, User, QueueType } = require('../db/models');
const { CHANGE_MODE } = require('../Types/type_server');

async function changeMode(mapQueue, params) {
  const { mode } = params;
  console.log(mode);
  const allModes = await QueueType.findAll();
  console.log(JSON.parse(JSON.stringify(allModes)));
  allModes.forEach(async (el) => {
    await el.update({ isActive: false });
  });
  console.log(JSON.parse(JSON.stringify(allModes)));
  const newMode = await QueueType.findOne({ where: { mode } });
  console.log(JSON.parse(JSON.stringify(newMode)));
  await newMode.update({ isActive: true });
  console.log(JSON.parse(JSON.stringify(newMode)));
  const message = { type: CHANGE_MODE, params: { mode } };
  mapQueue.forEach((el) => {
    console.log('id user которому отправляются данные', el.userId);
    el.send(JSON.stringify(message));
  });
}
module.exports = changeMode;
