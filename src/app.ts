const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('./dist'));
// app.set('view engine', 'pug');

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Chat app listening on port ${PORT}!`);
});
