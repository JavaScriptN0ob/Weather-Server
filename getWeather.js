function getWeather(city) {
  var https = require('follow-redirects').https;
  var fs = require('fs');
  var cityName = city
  var options = {
    'method': 'GET',
    'hostname': 'api.openweathermap.org',
    'path': `/data/2.5/weather?q=${city}%2Cau&appid=864eadc0aaaab505b46c26f231ae8840&units=metric`,
    'headers': {
    },
    'maxRedirects': 20
  };

  var req = https.request(options, function (res) {
    var chunks = [];

    res.on("data", function (chunk) {
      chunks.push(chunk);
    });

    res.on("end", function (chunk) {
      var body = Buffer.concat(chunks);
      let weather = JSON.parse(body);
      // return {
      //   "temp": `${weather.main.temp.toFixed(1)}℃`,
      //   "wind-speed": `${weather.wind.speed}M/S`,
      //   "humidity": `${weather.main.humidity}%`
      // }
      console.log('temp:', `${weather.main.temp.toFixed(1)}℃`);
      console.log('wind-speed', `${weather.wind.speed}M/S`);
      console.log('humidity', `${weather.main.humidity}%`)
      return weather;
    });

    res.on("error", function (error) {
      console.error(error);
    });
  });

  req.end();
}

getWeather('Sydney');
console.log(typeof(getWeather('Sydney')));

module.exports = { getWeather };