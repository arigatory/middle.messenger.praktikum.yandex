const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('./dist'));

app.get('*', function (req, res) {
  const pathToHtmlFile = path.resolve(__dirname, '../dist/index.html');
  const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, 'utf-8');
  res.send(contentFromHtmlFile);
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Chat app listening on port ${PORT}!`);
});
