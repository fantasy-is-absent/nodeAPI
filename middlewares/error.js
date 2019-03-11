const CustomError = require('../errors/CustomError');

module.exports = (err, req, res, next) => {
  if (err instanceof CustomError) {
    res.status(err.status).send(err);
  }
  console.log(err.stack);
  res.status(500).send('Something wrong: 500');
}