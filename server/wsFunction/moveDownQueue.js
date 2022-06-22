const { Queue, User } = require('../db/models');
const { MOVE_DOWN_QUEUE } = require('../Types/type_server');

async function moveDownQueue(mapQueue, params) {
  // console.log('13--------------------');
  const userQueueId = params.id;
  await Queue.destroy({ where: { user_id: userQueueId } });
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

  const message = { type: MOVE_DOWN_QUEUE, params: { queue } };
  mapQueue.forEach((el) => {
    console.log('id user которому отправляются данные', el.userId);
    el.send(JSON.stringify(message));
  });
}
module.exports = moveDownQueue;
