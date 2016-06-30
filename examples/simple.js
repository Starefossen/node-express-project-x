'use strict';

const express = require('express');
const app = module.exports = express();

const xapp = require('../');

// enabled X-App headers
app.use(xapp({}, require('./package')));

// normal route
app.get('/', (req, res) => {
  res.send('Hello World');
});

/* istanbul ignore next */
if (!module.parent) {
  app.listen(3000);
  console.log('Express started on port 3000'); // eslint-disable-line no-console
}
