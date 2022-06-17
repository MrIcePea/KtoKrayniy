const router = require('express').Router();
const { User } = require('../db/models');

router.get('/getusers', async (req, res) => {
  const users = await User.findAll({
    where: { role: 'user' },
    attributes: { exclude: ['role', 'pass'] },
    order: [
      ['rank', 'DESC'],
    ],
  });
  console.log(JSON.parse(JSON.stringify(users)));
  res.json(users);
});

module.exports = router;
