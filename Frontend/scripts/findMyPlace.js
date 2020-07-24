const findMyPlace = {
  citySearch: document.querySelector('.weather__search-city'),
  findButton: document.querySelector('.weather__search-button'),
  newName: null,
  newTemp: null,
  newHumidity: null,
  newWindSpeed: null,
  Name: document.querySelector('.city-name'),
  Temp: document.querySelector('.city-temperature'),
  Humidity: document.querySelector('.city-humidity'),
  wind: document.querySelector('.city-wind-speed'),
}

function findMyCity() {
  // const { citySearch } = findMyPlace;
  let city = `${findMyPlace.citySearch.value},AU`;
  console.log(city);

  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  fetch(`http://localhost:5500/Frontend/index.html?city=${city}`, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
  
}

document.querySelector('.weather__search-button').addEventListener('click', () => {
  findMyCity();
})