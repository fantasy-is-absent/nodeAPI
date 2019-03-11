const config = require('config');
const express = require('express');
const bodyParser = require('body-parser');

const router = require('./routes');
const middlewares = require('./middlewares');
const db = require('./db');

const app = express();

(async () => {
  await db.connect();

  app.use(bodyParser.json());
  app.use(middlewares.logger);

  app.use(router);

  app.use(middlewares.error);

  app.listen(config.port, () => console.log(`Listening on port ${config.port}`));
})()
