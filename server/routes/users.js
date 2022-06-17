const router = require('express').Router();
const { User } = require('../db/models');

router.get('/getusers', async (req, res) => {
  const users = await User.findAll();
  console.log(users);
  res.json(users);
});

module.exports = router;
