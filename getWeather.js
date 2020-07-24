const { response } = require('express');

function getWeather(city) {
  var axios = require('axios');
  var cityName = city
  var cityWeather = {
    temp: null,
    humidity: null,
    wind: null,
  }
  var config = {
    method: 'get',
    url: `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=864eadc0aaaab505b46c26f231ae8840&units=metric`,
    headers: { }
  };
  axios(config)
  .then(function (response) {
    cityWeather.temp = `${response.data.main.temp}℃`;
    cityWeather.humidity = `${response.data.main.humidity}%`;
    cityWeather.wind = `${response.data.wind.speed}M/S`;
    console.log(cityWeather)
  })
  .catch(function (error) {
    console.log(error);
  });

  console.log(cityWeather);
}

getWeather('Sydney');
console.log(getWeather('Sydney'))
console.log(123, typeof(getWeather('Sydney')));

module.exports = { getWeather };


