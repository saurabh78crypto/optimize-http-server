const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 8080;

app.get('/data', (req, res) => {
  console.log('Received GET request on /data');
  
  const { n, m } = req.query;

  if (!n) {
    console.error('Parameter n is required.');
    return res.status(400).send('Parameter n is required.');
  }

  const filePath = path.join(__dirname, 'tmp', 'data', `${n}.txt`);

  if (m) {
    // Read specific line
    const line = readSpecificLine(filePath, m);
    res.send(line);
  } else {
    // Read entire file
    const content = fs.readFileSync(filePath, 'utf8');
    res.send(content);
  }
});

function readSpecificLine(filePath, lineNumber) {
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const lines = fileContent.split('\n');
  return lines[lineNumber - 1] || 'Line not found';
}

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
