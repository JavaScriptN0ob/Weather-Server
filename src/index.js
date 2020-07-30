const express = require('express');
const cors = require('cors');
const { Router, response } = require('express');
const routes = require('./routes');

const app = express();

app.use(cors());
const PORT = process.env.PORT || 3000;

app.use(routes)

app.listen(PORT, () => {
  console.log(`------- Captain Teemo on port ${PORT}`)
})
