const routes = require('./routes/weather');
const express = require('express');

const router = express.Router();

router.use('/cityWeather', routes);

module.exports = router;
