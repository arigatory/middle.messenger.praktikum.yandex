const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('./dist'));

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Chat app listening on port ${PORT}!`);
});
