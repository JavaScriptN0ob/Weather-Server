const express = require('express');
const app = express();
const { getWeather } = require('./getWeather');

app.use(express.json());


app.get('/Frontend/index.html', (req, res) => {
  const { city } = req.query
  res.header({'Access-Control-Allow-Origin': '*'})
  // res.send('succeeded connecting backend');
  // console.log(req.headers);
  // getWeather(city);
  res.send(`data: ${getWeather(city)}`);
})

app.listen('5500', () => {
  console.log('--------- Captain Teemo on duty! ---------');
});