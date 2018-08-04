const express = require('express');
const app = express();
const path = require('path');
const volleyball = require('volleyball');

app.use(express.static(path.join(__dirname, '..', 'public')));

app.use(volleyball)

app.listen(3000, () => console.log('listening on port 3000'));
