const APIkey = "6599055c024cfe15a211a938749c02c6";

const getCoords = async (city) => {
    const response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(city)}&limit=1&appid=${APIkey}`);
    const data = await response.json();

    return {
        lat: data[0].lat,
        lon: data[0].lon
    };
}

const getWeather = async (city) => {
    const coordinates = await getCoords(city);
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${APIkey}&units=metric&lang=hu`);
    const forecast = await response.json();

    return forecast;
}

const renderData = async () => {
    const city = document.getElementById("varos").value.trim();
    const forecast = await getWeather(city);
    const timezone = forecast.city.timezone;
    const dailyForecasts = {};

    forecast.list.forEach((item) => {

        const timestampMilliseconds = (item.dt + timezone) * 1000;
        const forecastDate = new Date(timestampMilliseconds);

        const year = forecastDate.getUTCFullYear();
        const month = String(forecastDate.getUTCMonth() + 1).padStart(2, "0");
        const day = String(forecastDate.getUTCDate()).padStart(2, "0");

        const date = `${year}-${month}-${day}`;

        if (!dailyForecasts[date]) {
            dailyForecasts[date] = [];
        }

        dailyForecasts[date].push(item);
    });

    const today = new Date(Date.now() + timezone * 1000);
    today.setUTCHours(0, 0, 0, 0);

    for (let day = 0; day < 5; day++) {
        const date = new Date(today);
        date.setUTCDate(today.getUTCDate() + day);
        const dateKey = date.toISOString().slice(0, 10);
        const entries = dailyForecasts[dateKey];
        const card = document.getElementById(String(day));

        const averageTemperature = entries.reduce((sum, item) => sum + item.main.temp, 0) / entries.length;
        const middayForecast = entries.reduce((closest, item) => {
            const hour = new Date((item.dt + timezone) * 1000).getUTCHours();
            return Math.abs(hour - 12) < Math.abs(closest.hour - 12)
                ? { item, hour }
                : closest;
        }, {
            item: entries[0],
            hour: new Date((entries[0].dt + timezone) * 1000).getUTCHours()
        }).item;

        card.querySelector(".date").textContent = date.toLocaleDateString("hu-HU"); // Ennél jobb megoldást nem találtam
        card.querySelector(".temperature").textContent = `${Math.round(averageTemperature)} °C`;
        card.querySelector(".weather").textContent = middayForecast.weather[0].description;
        card.querySelector(".wind").textContent = `Szél: ${middayForecast.wind.speed} m/s`;

        const icon = card.querySelector(".icon");
        icon.src = `https://openweathermap.org/payload/api/media/file/${middayForecast.weather[0].icon}.png`;
        icon.alt = middayForecast.weather[0].description;
    }
}

document.getElementById("search-button").addEventListener("click", renderData);
renderData();
 