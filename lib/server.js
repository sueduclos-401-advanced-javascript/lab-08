'use strict';

const express = require('express');
const generateSwagger = require('../docs/swagger.js');

const app = express();

const startServer = (port, mongodb) => {
  app.listen(port, () => {
     console.log('Server up and running on port', port);
  });
};

generateSwagger(app);

/**
 * This route provides a standard Homepage message
 * @route GET /
 * @group Non-API
 * @returns {string} 200 - The string 'Homepage"
 */

app.get('/', (req, res, next) => {
  res.send('Homepage');
}); 

module.exports = {
  server: app,
  start: startServer,
};
