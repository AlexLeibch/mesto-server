const jwt = require('jsonwebtoken');
const BadAuthError = require('../errors/bad-auth-error');

const { NODE_ENV, JWT_SECRET } = process.env;

// eslint-disable-next-line consistent-return
const auth = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith('Bearer ')) {
    next(new BadAuthError('Ошибка авторизации'));
  }

  const token = authorization.replace('Bearer ', '');

  let payload;

  try {
    payload = jwt.verify(token, NODE_ENV === 'production' ? JWT_SECRET : 'dev_secret');
  } catch (err) {
    next(new BadAuthError('Ошибка авторизации'));
  }

  req.user = payload;

  next();
};

module.exports = { auth };
