const but = document.getElementById('but');
const R = 6400;
const table = document.getElementById('table');
let coords, coordsAPI;
getPosition()
    .then(function (coords) {
        this.coords = {
            longitude: coords.longitude,
            latitude: coords.latitude
        }
        return getPositionAPI();
    })
    .then(function (coords) {
        this.coordsAPI = {
            longitude: coords.longitude,
            latitude: coords.latitude
        }
        getTr(this.coords, this.coordsAPI);
        getDistance(this.coords, this.coordsAPI);
    })
    .catch(function (err) {
        console.error(err);
    })
function getDistance(a, b) {
    const h = Math.sin((Math.PI / 180) * (b.latitude - a.latitude) / 2) ** 2 + Math.cos((Math.PI / 180) * a.latitude) * Math.cos((Math.PI / 180) * b.latitude) * (Math.sin((Math.PI / 180) * (b.longitude - a.longitude) / 2) ** 2);
    const distance = 2 * R * Math.asin(Math.sqrt(h)) * 1000;
    const tr = document.createElement('tr');
    tr.innerHTML = `<td colspan="2">Расстояние между координатами</td><td colspan="2">${distance.toFixed(3)}</td>`;
    table.appendChild(tr);
}
function getPosition() {
    return new Promise(function (result, reject) {

        window.navigator.geolocation.getCurrentPosition(function (pos) {
            result(pos.coords);
        }, function (err) {

            reject(err);
        })
    })
}
function getPositionAPI() {
    return new Promise(function (result, reject) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', `https://freegeoip.app/json/`, true);
        xhr.onload = function () {
            result(JSON.parse(this.responseText));
        }
        xhr.onerror = () => reject('Error!');
        xhr.send(null);
    })
}
const tbWeather = document.getElementById('tableWeather');
getPosition().then(function (coords) {
    const url = `https://www.metaweather.com/api/location/search/?lattlong=${coords.latitude},${coords.longitude}`;
    return getFile(url);
})
    .then(async function (cities) {

        for (let i = 0; i < 5; i++) {
            const citiWeather = await getFile(`https://www.metaweather.com/api/location/${cities[i].woeid}/`);
            const tr = document.createElement('tr');
            tr.innerHTML = `
            <td>${citiWeather.title}</td>
            <td>${Math.round(citiWeather.consolidated_weather[0].min_temp)}</td>
            <td>${Math.round(citiWeather.consolidated_weather[0].max_temp)}</td>
            <td>${Math.round(citiWeather.consolidated_weather[0].air_pressure)}</td>
            <td>${Math.round(citiWeather.consolidated_weather[0].humidity)}</td>`;
            tbWeather.appendChild(tr);
        }
    })
    .catch(function (err) {
        console.error(err);
    })
function getTr(coords, coordsAPI) {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${coords.latitude.toFixed(2)}</td><td>${coords.longitude.toFixed(2)}</td><td>${coordsAPI.latitude.toFixed(2)}</td><td>${coordsAPI.longitude.toFixed(2)}</td>`;
    table.appendChild(tr);
}
function getFile(url) {
    return new Promise(function (result, reject) {

        const xhr = new XMLHttpRequest();
        xhr.open('GET', `${url}`, true);
        xhr.onload = function () {
            result(JSON.parse(this.responseText));
        }
        xhr.onerror = () => reject('Error!');
        xhr.send(null);
    })
}