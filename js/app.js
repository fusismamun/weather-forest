const API_KEY = `46ad7457603b9b0104e633e78cd60e16`;

const searchResult =() => {
    const city = document.getElementById('input-field').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayWeather(data));
}

const innerTextId = (id, text) => {
    document.getElementById(id).innerText = text;
}
const displayWeather = weather => {
    innerTextId('city-name', weather.name);
    innerTextId('temp', weather.main.temp);
    innerTextId('contant', weather.weather[0].main);

    // set icon 
    const url = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
    const weatherIcon = document.getElementById('weather-icon');
    weatherIcon.setAttribute('src', url);
}