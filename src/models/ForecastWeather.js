const CurrentWeather = require('./CurrentWeather');

class ForecastWeather extends CurrentWeather {
  constructor(data) {
    super(data);
    this.time = data.dt;
  }
}

module.exports = ForecastWeather;