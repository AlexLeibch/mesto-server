/* eslint-disable consistent-return */
const allowedCors = [
  'https://topmestobyalex.nomoredomains.xyz',
  'http://topmestobyalex.nomoredomains.xyz',
  'https://api.topmestobyalex.nomoredomains.xyz',
  'http://api.topmestobyalex.nomoredomains.xyz',
  'https://praktikum.tk',
  'http://praktikum.tk',
  'http://localhost:3000',
];

module.exports = (req, res, next) => {
  const { origin } = req.headers;
  const { method } = req;
  const DEFAULT_ALLOWED_METHODS = 'GET, PATCH, POST, DELETE, PUT';
  const requestHeaders = req.headers['access-control-request-headers'];

  if (allowedCors.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
  }

  if (method === 'OPTIONS') {
    res.header('Access-Control-Allow-Origin', DEFAULT_ALLOWED_METHODS);

    res.header('Access-Control-Allow-Origin', requestHeaders);

    return res.end();
  }
  next();
};
