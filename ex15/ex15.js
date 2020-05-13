class App {
    constructor(elem, position) {
        this.elem = elem;
        this.position = position;
        this.map = null;
    }

    async start() {
        const data = await this.getPoints();
        this.points = data;
        ymaps.ready(() => this.initMap());
    }

    initMap() {
        this.map = new ymaps.Map("map", {
            center: this.position.center,
            zoom: this.position.zoom
        });

        this.points.forEach((item) => {
            if (item.downtime === 0) {
                const point = new ymaps.Placemark([Number(item.latitude), Number(item.longitude)], {
                    balloonContent: `Старт/Финиш`,
                });
                this.map.geoObjects.add(point);
            } else {
                const point = new ymaps.Placemark([Number(item.latitude), Number(item.longitude)], {
                    balloonContent: `Время простоя: ${item.downtime}ч`,
                });
                this.map.geoObjects.add(point);
            }
        })
        this.drawPolyline(this.points);
        const but = document.getElementById('but');
        const divTime = document.getElementById('time');
        const fullDistance = this.getFullDistance(this.points);
        const fullDowntime = this.getFullDowntime(this.points);

        but.addEventListener('click', function () {
            const speed = document.getElementById('speed');
            if (isNaN(speed.value) || speed.value == "") {
                divTime.innerHTML = `<h3>Введите число</h3>`;
            } else if (speed.value === "0") {
                divTime.innerHTML = `<h3>Похоже, что это надолго.</h3>`;
            }
            else {
                divTime.innerHTML = `<h3>Время гонки: ${(fullDistance / Number(speed.value) + fullDowntime).toFixed(2)}ч</h3>`;

            }
        });
    }

    displayBrewery(item) {
        modal.style.display = 'block';
        const container = this.elem.querySelector('#details-content');
        container.innerHTML = `
            <h3><a href="${item.website_url}">${item.name}</a></h3>
            <p>${item.country}, ${item.city}, ${item.street}</p>
        `;
    }

    getPoints() {
        return new Promise(function (result, reject) {
            const xhr = new XMLHttpRequest();
            xhr.open('GET', `ex15.json`, true);
            xhr.onload = function () {
                result(JSON.parse(this.responseText));
            }
            xhr.onerror = () => reject('Error!');
            xhr.send(null);
        })
    }

    drawPolyline(points) {
        const coords = [];
        for (let i = 0; i < points.length; i++) {
            coords.push([points[i].latitude, points[i].longitude]);
        }
        coords.push([this.points[0].latitude, this.points[0].longitude]);

        var polyline = new ymaps.Polyline(coords, {
            hintContent: "Ломаная"
        }, {
            draggable: true,
            strokeColor: '#000000',
            strokeWidth: 4,
        });
        this.map.geoObjects.add(polyline);
        this.map.setBounds(polyline.geometry.getBounds());
    }

    getFullDowntime(points) {
        let fullDowntime = 0;
        for (let i = 0; i < points.length; i++) {
            if (i === 0) {

            } else {
                fullDowntime += points[i].downtime;
            }
        }
        return fullDowntime;
    }

    getFullDistance(points) {
        let fullDistance = 0;
        for (let i = 0; i < points.length; i++) {
            if (i === points.length - 1) {
                fullDistance += Number(
                    ymaps.coordSystem.geo.getDistance([points[i].latitude, points[i].longitude], [points[0].latitude, points[0].longitude])) / 1000;
            } else {
                fullDistance += Number(
                    ymaps.coordSystem.geo.getDistance([points[i].latitude, points[i].longitude], [points[i + 1].latitude, points[i + 1].longitude])) / 1000;
            }
        }

        return fullDistance;
    }
}

const app = new App(document.getElementById('app'), {
    center: [53.90, 27.60],
    zoom: 6
});
app.start();