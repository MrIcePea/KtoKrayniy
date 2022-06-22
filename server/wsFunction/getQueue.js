const { Queue, User } = require('../db/models');

async function getQueue(mapQueue) {
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
  const message = { type: 'START', params: { queue } };
  console.log('отправляем данные на ', mapQueue);
  mapQueue.forEach((el) => {
    console.log('---------------------------------------\n', JSON.stringify(message));
    el.send(JSON.stringify(message))
  });
}
module.exports = getQueue;
