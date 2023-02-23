/* eslint-disable no-console */
/* eslint linebreak-style: ["error", "windows"] */

const express = require('express');

const app = express();
const port = 3000;
const path = require('path');
// ****** ROUTES ******/
app.use(express.static(path.join((__dirname, './static'))));
app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname, './static/index.html'));
});

app.get('/speakers', (request, response) => {
  response.sendFile(path.join(__dirname, './static/speakers.html'));
});

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
