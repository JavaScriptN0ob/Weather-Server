const weatherData = require('../models/weatherData');
const { response } = require('express');

// weatherData
//   .collectCurrentWeatherData('AU', 'newcastle')
//   .then((response) => console.log('current', response))
//   .catch((error) => console.log(error));

// weatherData
//   .collectForecastWeatherData('AU', 'newcastle')
//   .then((response) => console.log('forecast', response))
//   .catch((error) => console.log(error));

function getWeather(req, res, next) {
  const { countryCode, cityName, weatherType } = req.query;
  if (!weatherType) {
    return res.status(401).json('Please choose either forecast or current')
  }
  if (weatherType.toLowerCase() === 'forecast') {
    weatherData
    .collectForecastWeatherData(countryCode, cityName)
    .then((response) => {
      res.status(200).json({
        status: 'success',
        response: response
      })
    })
    .catch((error) => next(error))
  } 
  else if (weatherType.toLowerCase() === 'current') {
    weatherData
    .collectCurrentWeatherData(countryCode, cityName)
    .then((response) => {
      res.status(200).json({
        status: 'success',
        response
      })
    })
    .catch((error) => console.log(error));
  }
  
};

module.exports = { getWeather };

