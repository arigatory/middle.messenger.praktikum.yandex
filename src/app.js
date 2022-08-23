// server.js
const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.static('./dist')); 
app.set('view engine', 'pug');

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
});