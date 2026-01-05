const apiKey = "53c750d61b0a4a9fc0dd311a0eb63b34";
const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector("#searchBox");
const searchButton = document.querySelector("#searchButton");
const weatherIcon = document.querySelector("#weatherIcon");

const checkWeather = async (city) => {
  if (!city) {
    document.querySelector("#errorMessage").innerText = "Please enter a city!";
    document.querySelector("#errorMessage").style.display = "block";
    document.querySelector("#searchBox").style.borderColor = "red";
  }

  const response = await fetch(`${apiURL}${city}&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector("#errorMessage").style.display = "block";
    document.querySelector(".weather-info").style.display = "none";
  } else {
    let data = await response.json();
    console.log(data);
    document.querySelector("#cityName").innerHTML = data.name;
    document.querySelector("#temperature").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector("#humidity").innerHTML = data.main.humidity + "%";
    document.querySelector("#wind").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "https://cdn-icons-png.flaticon.com/512/414/414825.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src =
        "https://cdn-icons-png.flaticon.com/512/1163/1163624.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src =
        "https://cdn-icons-png.flaticon.com/512/6974/6974833.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src =
        "https://cdn-icons-png.flaticon.com/512/3076/3076129.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src =
        "https://cdn-icons-png.flaticon.com/512/4005/4005901.png";
    } else if (data.weather[0].main == "Snow") {
      weatherIcon.src = "https://cdn-icons-png.flaticon.com/512/642/642102.png";
    } else if (data.weather[0].main == "Thunderstorm") {
      weatherIcon.src =
        "https://cdn-icons-png.flaticon.com/512/1146/1146869.png";
    } else if (data.weather[0].main == "Haze") {
      weatherIcon.src =
        "https://cdn-icons-png.flaticon.com/512/1779/1779807.png";
    }
    document.querySelector(".weather-info").style.display = "block";
    document.querySelector("#errorMessage").style.display = "none";
  }
};

searchButton.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
