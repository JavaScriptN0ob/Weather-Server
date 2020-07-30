// const express = require('express');
// const cors = require('cors');
// const axios = require('axios');
// const { response } = require('express');
// const app = express();

// app.use(cors());
// app.use(express.json());

// app.get('/v1/current', (req, res,) => {
//   const { city } = req.query;
//   let cityName = city
//   // const axios = require('axios');
//   // let cityName = 'newcastle, au'
//   let config = {
//     method: 'get',
//     url: `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=864eadc0aaaab505b46c26f231ae8840&units=metric`,
//     headers: { }
//   };

//   axios(config)
//   .then(function(response) {
//     // let cityWeather = {};
//     // cityWeather.temp = `${response.data.main.temp}℃`;
//     // cityWeather.humidity = `${response.data.main.humidity}%`;
//     // cityWeather.wind = `${response.data.wind.speed}M/S`;
//     // res.json(cityWeather);
//     let data = {
//       "status": "success",
//       "message": null,
//       "data": {
//         "city": {
//           "name": `${cityName.slice(0, 1).toUpperCase() + cityName.slice(1, cityName.indexOf(','))}`,
//           "coord": {
//             "lat": response.data.coord.lat,
//             "lon": response.data.coord.lon
//           },
//           "country": cityName.slice(cityName.indexOf(','), cityName.length).toUpperCase(),
//           "population": "没想好怎么拿!"
//         },
//         "current": {
//           "minCelsius": response.data.main.temp_min,
//           "maxCelsius": response.data.main.temp_max,
//           "minFahrenheit": ((response.data.main.temp_min) * 1.8 + 32).toFixed(2),
//           "maxFahrenheit": ((response.data.main.temp_max) * 1.8 + 32).toFixed(2),
//           "humidity": response.data.main.humidity,
//           "windSpeed": response.data.wind.speed,
//           "windDirection": "只知道角度，还没搞明白怎么算!"
//         },
//       }
//     }
//     res.json(data);
//   }
//   )
//   .catch((error) => {
//     console.log(error);
//   });

// })


// app.listen('5000', () => {
//   console.log(`------- Captain Teemo on duty 5000`)
// })

// // let string = 'Brisbane, AU'
// // let array = string.split(',');
// // console.log(array[0]);
// // console.log(array[1].trim());
