const API_KEY = `11ad22516346b4e8d539fa83c8dd81e6`;
//const API : `https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}&units=metric`
//const IMG_URL : `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={API key};`

const form = document.querySelector("form")
const search = document.querySelector("#search")
const weather = document.querySelector("#weather")

const getWeather = async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();
    return showWeather(data);
}

const showWeather = (data) => {
    console.log(data);
    weather.innerHTML = `
    <div>
    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
    </div>
    <div>
        <h2>${data.main.temp}</h2>
        <h4>${data.weather[0].main}</h4>
    </div>
    `
}

form.addEventListener(
    "submit",
    function (event) {
        getWeather(search.value)
        event.preventDefault();
    }
)

