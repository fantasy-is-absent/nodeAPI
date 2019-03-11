const express = require('express');

const userRoutes = require('./users');
const schedule = require('./schedule');
const error = require('../errors');
const asyncMiddleWare = require('../utils/asyncMiddleWare')

const router = express.Router();

userRoutes(router);
schedule(router);

router.use(asyncMiddleWare(async (req, res, next) => {
  error.notFound('Page not found');
}));

module.exports = router;