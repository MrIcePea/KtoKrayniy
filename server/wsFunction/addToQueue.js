const { Queue, User } = require('../db/models');

async function addToQueue(mapQueue, params) {
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
module.exports = addToQueue;
