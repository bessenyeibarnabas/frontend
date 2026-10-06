const APIkey = "e02c55585835e6a9f7a511f0a247da54";

const getCoords = async (city) => {
    const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${APIkey}`);
    const data = await response.json();

    return {
        "lat": data[0].lat,
        "lon": data[0].lon
    };
}

const getWeather = async () => {
    const coordinates = await getCoords("Budapest");
    const lat = coordinates.lat;
    const lon = coordinates.lon
    console.log(coordinates);

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}&units=metric`);
    const data = await response.json();
    console.log(data);
}

getWeather();
