const axios = require('axios');

const axiosBase = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5',
  params: {
    appid: '864eadc0aaaab505b46c26f231ae8840',
    units: 'metric'
  }
});

module.exports = axiosBase;
