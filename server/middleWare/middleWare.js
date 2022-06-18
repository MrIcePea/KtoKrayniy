const checkSession = (req, res, next) => {
  if (req.session.user.id) {
    res.locals.user = {
      name: req.session.user.name,
      id: req.session.user.id,
      role: req.session.user.role,
    };
    return next();
  }
  next();
};
const checkLogin = (req, res, next) => {
  if (req.session.user.id) {
    return next();
  }

  return res.redirect('/');
};

module.exports = { checkSession, checkLogin };

// const multer = require('multer');

// const storage = multer.diskStorage({
//   destination(req, file, cb) {
//     cb(null, 'public/img/');
//   },

//   filename(req, file, cb) {
//     cb(null, `${Date.now() + file.originalname}`);
//   },
// });

// const upload = multer({ storage });

// const checkUser = (req, res, next) => {
//   if (req.session.user) {
//     return next();
//   }
//   return res.sendStatus(401);
// };

// module.exports = { upload, checkUser };
