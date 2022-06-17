const router = require('express').Router();
const { Queue } = require('../db/models');

router.get('/getqueue', async (req, res) => {
  const queue = await Queue.findAll(
    {
      order: [
        ['id', 'ASC'],
      ],
    },
  );
  console.log(queue);
  res.json(queue);
});

module.exports = router;
