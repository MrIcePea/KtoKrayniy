const checkSession = (req, res, next) => {
  console.log('----> пройден чек');
  console.log('---->>>>>', req.session);
  if (req.session.user && req.session.user.id) {
    res.locals.user = {
      name: req.session.user.name,
      id: req.session.user.id,
      role: req.session.user.role,
    };
    // return next();
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
