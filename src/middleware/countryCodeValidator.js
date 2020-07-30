const { getCode, getName } = require('country-list');

module.exports = (req, res, next) => {
  const { countryCode, cityName } = req.query;
  if (!countryCode || !cityName) {
    return res.status(400).json('Country code & city name are required');
  }
  if (countryCode.length === 2) {
    if (getName(countryCode)) {
      return next();
    }
  } else {
    if (getCode(countryCode)) {
      console.log('coutrycode too long')
      req.params.countryCode = getCode(countryCode);
      return next();
    }
  }
  return res.status(400).json('Country code/country name is wrong');
}