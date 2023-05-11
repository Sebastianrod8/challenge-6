/* cities*/
const city = 'London';

/*const axios = require('axios');*/

const API_KEY = '16c8b2ff37f89d4d079983a1ccfb6f97';
const API_URL = `https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=${API_KEY}`;

const cities = [];

/*async function getCities() {
  const response = await axios.get(API_URL.replace('{city name}', ''));
  const data = response.data;
  
  for (let i = 0; i < data.length; i++) {
    const city = data[i].name;
    cities.push(city);
  }
  
  console.log(cities);
} 

getCities();

/*API key
const fetchWeatherData = async (city) => {
const apiKey = '16c8b2ff37f89d4d079983a1ccfb6f97';
const apiUrl = `https://api.openweathermap.org/data/2.5/group?q=${city.join(',')}&appid=${apiKey}`;
const response = await fetch(url);
const data = await response.json();
return data;
};

const getWeatherDataForCities = async (cities) => {
const weatherData = await Promise.all(
  cities.map(async (city) => {
    const data = await fetchWeatherData(city);
    return data;
  })
);
return weatherData;
};

getWeatherDataForCities(cityNames).then((weatherData) => {
console.log(weatherData);
});

fetch(apiUrl)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error));

const input = document.getElementById('myInput');
input.addEventListener('click', function() {
  this.value = '';
});

const dropdownItem = document.querySelector('.dropdown-item');
dropdownItem.style.float = 'right';*/



