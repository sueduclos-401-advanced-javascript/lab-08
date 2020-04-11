'use strict';

const express = require('express');

const app = express();

const startServer = (port) => {
  app.listen(port, () => {
     console.log('Server up and running on port', port);
  });
};

app.get('/', (req, res ) => {
  console.log('Headers:', req.headers);
  console.log('Body:', req.body);
  console.log('Params:', req.params);
  console.log('Query:', req.query);

  let homeHTML = '<div><h1>HomePage</h1>';

  if (req.query.name)
    homeHTML += '<h3>Welcome ' + req.query.name + '!</h3></div>';
  else 
    homeHTML += '</div>';

  res.send(homeHTML);
});

 

module.exports = {
  server: app,
  start: startServer,
};