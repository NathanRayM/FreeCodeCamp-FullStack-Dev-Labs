// Weather details DOM variables
const weatherIcon = document.getElementById("weather-icon");
const mainTemp = document.getElementById("main-temperature");
const feelsLike = document.getElementById("feels-like");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("wind");
const windGust = document.getElementById("wind-gust");
const weatherMain = document.getElementById("weather-main");
const currentLocation = document.getElementById("location");

// variable for the compass arrow
const compass = document.getElementById("compass");
const compassArrow = document.getElementById("compass-arrow");

// Button and location selection DOM variables
const getWeatherbtn = document.getElementById("get-weather-btn");
const locationSelector = document.getElementById("location-selector");

// async function to fetch weather API
async function getWeather(city) {
  try {
    const response = await fetch(
      `https://weather-proxy.freecodecamp.rocks/api/city/${city}`
    );

    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

// Show Weather Function input in DOM
async function showWeather(city) {
  try {
    const data = await getWeather(city);

    // variables to get object data
    const location = data?.name;
    const weather = data.weather?.[0].main;
    const icon = data.weather?.[0].icon;
    const temp = data.main?.temp;
    const humid = data.main?.humidity;
    const feelslike = data.main?.feels_like;
    const speed = data.wind?.speed;
    const gust = data.wind?.gust;

    // adding data to the Dom
    currentLocation.innerText = location !== undefined ? location : "N/A";
    weatherMain.innerText = weather !== undefined ? weather : "N/A";
    weatherIcon.src = icon !== undefined ? icon : "N/A";
    mainTemp.innerText = temp !== undefined ? `${temp}° C` : "N/A";
    humidity.innerText = humid !== undefined ? `Humidity: ${humid}%` : "N/A";
    feelsLike.innerText =
      feelslike !== undefined ? `Feels Like: ${feelslike} C` : "N/A";
    windSpeed.innerText = speed !== undefined ? `Wind: ${speed} m/s` : "N/A";
    windGust.innerText =
      gust !== undefined ? `Gusts: ${data.wind.gust} m/s` : "N/A";

    // creating the compass rotation per deg from data
    const deg = data.wind?.deg;
    if (deg !== undefined) {
      compassArrow.style.transform = `rotate(${deg}deg)`;
    } else {
      compassArrow.style.transform = "";
    }
  } catch {
    alert("Something went wrong, please try again later");
  }
}

// click event to select city and show weather data
getWeatherbtn.addEventListener("click", () => {
  const selectedCity = locationSelector.value;
  showWeather(selectedCity);
  if (!selectedCity) {
    compass.classList.add("hidden");
  } else {
    compass.classList.remove("hidden");
  }
});
