const express = require('express');
const { getWeather } = require('../controllers/weather');
const countryCodeValidator = require('../middleware/countryCodeValidator');


const router = express.Router();

router.get('/', countryCodeValidator, getWeather);

module.exports = router;