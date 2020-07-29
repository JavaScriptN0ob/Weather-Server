const express = require('express');
const cors = require('cors');
const axios = require('axios');
const { response } = require('express');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/Frontend/index.html', (req, res,) => {
  const { city } = req.query;
  let cityName = city
  let config = {
    method: 'get',
    url: `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=864eadc0aaaab505b46c26f231ae8840&units=metric`,
    headers: { }
  };

  axios(config)
  .then(function(response) {
    let cityWeather = {};
    cityWeather.temp = `${response.data.main.temp}℃`;
    cityWeather.humidity = `${response.data.main.humidity}%`;
    cityWeather.wind = `${response.data.wind.speed}M/S`;
    res.json(cityWeather);
  }
  )
  .catch((error) => {
    console.log(error);
  });
})


app.listen('5000', () => {
  console.log(`------- Captain Teemo on duty 5000`)
})