const CustomError = require('../errors/CustomError');

// eslint-disable-next-line no-unused-vars
module.exports = (err, req, res, next) => {
  if (err instanceof CustomError) {
    res.status(err.status).send(err);
  }
  console.log(err.stack);
  res.status(500).send('Something wrong: 500');
};
