const CustomError = require('./CustomError');

module.exports = {
  badRequest(msg) {
    const error = new CustomError(msg);
    error.status = 400;
    throw error;
  },

  notFound(msg) {
    const error = new CustomError(msg);
    error.status = 404;
    throw error;
  },
};
