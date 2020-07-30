class CurrentWeather {
  constructor(data) {
    const { weather, main, wind } = data;
    this.minCelsius = main.temp_min;
    this.maxCelsius = main.temp_max;
    this.minFahrenheit = this.FahDegConvert(main.temp_min);
    this.maxFahrenheit = this.FahDegConvert(main.temp_max);
    this.humidity = main.humidity;
    this.weather = weather[0].main;
    this.weatherDesc = weather[0].description;
    this.windSpeed = wind.speed;
    this.windDirection = this.calculateWindDirection(wind.deg);
  }

  calculateWindDirection(degree) {
    const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
    const value = Math.floor((degree + 22.5) / 45);
    return directions[value % 8];
  }

  FahDegConvert(celsius) {
    const fahrenheit = celsius * 1.8 + 32;
    return Math.round(fahrenheit * 100) / 100;
    //toFixed(2) when fahrenheit is a integer, if using toFixed(2),
    // fahrenheit will become to 14.00
    //As the result, using Math.round(number * 100):
    // case 1: fah = 14;
    //         fah * 100 -> 1400
    //           Math.round(1400) -> 1400
    //             1400 / 100 -> 14
    // case 2: fah = 14.44
    //         fah * 100 -> 1444
    //           Math.round(1444) -> 1444
    //             1444 / 100 -> 14.44
    // case 3: fah = 14.444
    //         fah * 100 -> 1444.4
    //           Math.round(1444.4) -> 1444  | (Math.round 1444.5) -> 1445 but after / 100, 
    //             1444 / 100 -> 14.44       | it won't influence the result accuracy at all.
  }
}

module.exports = CurrentWeather;