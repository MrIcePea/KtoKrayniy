const bcrypt = require('bcrypt');
const router = require('express').Router();
const { User } = require('../db/models');
// const { checkLogin } = require('../middleWare/middleWare');

router.route('/')
  .get(async (req, res) => {
    res.json({});
  });

router.route('/signout')
  .get((req, res) => {
    req.session.destroy();
    res.clearCookie('sid').sendStatus(200);
  });

router.route('/signin')
  .post(async (req, res) => {
    const { nickName, pass } = req.body;
    console.log('-->>', nickName, pass);
    if (nickName && pass) {
      console.log('--<<', nickName, pass);
      const user = await User.findOne({ where: { nickName } });
      if (user && await bcrypt.compare(pass, user.pass)) {
        req.session.user = { name: user.nickName, id: user.id, role: user.role };
        console.log('----<<<<', req.session);
        return res.json({ name: user.nickName, id: user.id, role: user.role });
      }
      return res.sendStatus(402);
    }
    return res.sendStatus(403);
  });

router.route('/signup')
  .post(async (req, res) => {
    const {
      nickName, pass, firstName, lastName,
    } = req.body;
    if (nickName && pass && firstName && lastName) {
      const user = await User.findOne({ where: { nickName } });
      if (user) {
        return res.sendStatus(401);
      } else {
        const user = await User.create({
          ...req.body,
          role: 'user',
          active: true,
          ban: false,
          rank: 0,
          won: 0,
          lost: 0,
          pass: await bcrypt.hash(pass, 10),
        });
        // console.log('----->>', JSON.stringify(user));
        req.session.user = { name: user.nickName, id: user.id, role: user.role };
        return res.json({ name: user.nickName, id: user.id, role: user.role });
      }
    }
    return res.sendStatus(401);
  });

router.route('/check')
  .post((req, res) => {
    if (req.session.user) {
      return res.json(req.session.user);
    }
    return res.sendStatus(401);
  });

module.exports = router;
