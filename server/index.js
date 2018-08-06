const express = require('express');
const app = express();
const path = require('path');
const volleyball = require('volleyball');

app.use(express.static(path.join(__dirname, '..', 'public')));

app.use(volleyball);

app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal Server Error');
});

app.listen(3000, () => console.log('listening on port 3000'));
