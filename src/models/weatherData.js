const axiosB = require('../utils/axios');
const CurrentWeather = require('./CurrentWeather');
const ForecastWeather = require('./ForecastWeather');
const { response } = require('express');

class Weather {
  constructor() {
  }

  collectCurrentWeatherData(countryCode, cityName) {
    return Promise.all(
      [getCurrentWeatherData(countryCode, cityName), 
        getForecastWeatherData(countryCode, cityName)
      ])
      .then((responseArray) => {
        const current = responseArray[0].data;
        const cityInfo = responseArray[1].data.city;
        const currentWeatherData = {
          city: {
            "name": cityInfo.name,
            "coord": cityInfo.coord,
            "country": cityInfo.country,
            "population": cityInfo.population
          },
          current: new CurrentWeather(current)
        };
        return currentWeatherData;
      })
  }

  collectForecastWeatherData(countryCode, cityName) {
    return getForecastWeatherData(countryCode, cityName)
      .then((response) => {
        const forecast = response.data.list;
        const cityInfo = response.data.city;
        const forecastWeatherData = {
          city: {
            "name": cityInfo.name,
            "coord": cityInfo.coord,
            "country": cityInfo.country,
            "population": cityInfo.population
          },
          forecast: forecast.map((listArrayItems) => new ForecastWeather(listArrayItems))
        };
        // console.log(forecast);
        // console.log(cityInfo);
        return forecastWeatherData;
      })
  }
}

module.exports = new Weather();

function getCurrentWeatherData(countryCode, cityName) {
  const paramsAddon = `${cityName},${countryCode}`;
  return axiosB.get('/weather', {
    params: {
      q: paramsAddon,
    }
  })
}

function getForecastWeatherData(countryCode, cityName) {
  const paramsAddon = `${cityName},${countryCode}`;
  return axiosB.get('/forecast', {
    params: {
      q: paramsAddon,
    }
  })
}