
'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '20.85.236.221';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
