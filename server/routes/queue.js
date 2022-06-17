const router = require('express').Router();
const { Queue, User } = require('../db/models');

router.get('/getqueue', async (req, res) => {
  const queue = await Queue.findAll(
    {
      order: [
        ['id', 'ASC'],
      ],
      include: {
        model: User,
        where: { role: 'user' },
        attributes: { exclude: ['role', 'pass'] },
        order: [
          ['rank', 'DESC'],
        ],
      },
    },
  );
  console.log(queue);
  res.json(queue);
});

module.exports = router;
