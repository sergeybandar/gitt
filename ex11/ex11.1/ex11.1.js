const chainBlock = document.getElementById('chainBlock');



let chain;


const onDataLoaded = (text) => {
    chain = JSON.parse(text).slice();
    console.log(JSON.parse(text));

    getChain(chain);

    function getChain(arr) {
        const tb = document.getElementById('table');

        for (let i = 0; i < arr.length; i++) {
            const tr = document.createElement("tr");
            tr.innerHTML = `<td id="center">${arr[i].id}</td><td id="name">${arr[i].name}</td><td id="center">${arr[i].year}</td><td colspan="2">${arr[i].description}</td>`;

            tr.setAttribute('id', arr[i].id);
            tr.setAttribute('id', 'trChain');
            tb.appendChild(tr);
        }
        chainBlock.appendChild(tb);
    }

    const name = document.querySelectorAll('#name');
    for (let i = 0; i < name.length; i++) {
        name[i].addEventListener('click', function (e) {
            //console.log(name[i].parentElement.firstChild.innerText);
            getShops(name[i].parentElement.firstChild.innerText);
        })
    }

    function getShops(n) {

        const xhr = new XMLHttpRequest();
        xhr.open('GET', `ex11.1.${n}.json`, true);
        xhr.onload = function () {


            shop = JSON.parse(this.responseText).slice();
            const tb = document.getElementById('table');

            const trShop = document.querySelectorAll('#trShop');
            console.log(trShop);
            for (let i = 0; i < trShop.length; i++) {
                trShop[i].remove();
            }

            {
                const trChain = document.querySelectorAll('#trChain');
                const tr = document.createElement("tr");
                tr.innerHTML = `<th></th><th>Адрес</th>
                    <th>Число покупателей</th>
                    <th>Площадь</th>
                    <th>Год открытия</th>`;
                tr.setAttribute('id', 'trShop');
                tb.insertBefore(tr, trChain[n]);
            }

            for (let j = 0; j < shop.length; j++) {

                const tr = document.createElement("tr");
                tr.innerHTML = `<td></td><td>${shop[j].address}</td><td id="center">${shop[j].buyers}</td><td id="center">${shop[j].area}</td><td id="center">${shop[j].year}</td>`;
                console.log(trChain[j]);
                tr.setAttribute('id', 'trShop');
                tb.insertBefore(tr, trChain[n]);
            }
            {
                const tr = document.createElement("tr");
                tr.setAttribute('id', 'trShop');
                tr.setAttribute('class', 'thShop');
                tr.innerHTML = `<th>Общие</th><th id="center">Количество магазинов</th><th id="center">Кол. посетителей</th><th id="center">Площадь</th><th id="center">Сред. площадь</th>`;
                tb.insertBefore(tr, trChain[n]);
            }
            {
                const tr = document.createElement("tr");
                tr.setAttribute('id', 'trShop');
                tr.setAttribute('class', 'common');
                tr.innerHTML = `<td></td><td id="center">${shop.length}</td><td id="center">${getBuyers(shop)}</td><td id="center">${getArea(shop).sum}</td><td id="center">${getArea(shop).avg}</td>`;
                tb.insertBefore(tr, trChain[n]);
            }
           

        }
        xhr.send(null);
    }

}

function getBuyers(arr) {
    let buyers = 0;
    for (let i = 0; i < arr.length; i++) {
        buyers = buyers + arr[i].buyers;
    }
    return buyers;
}

function getArea(arr) {
    let area = 0;
    for (let i = 0; i < arr.length; i++) {
        area = area + arr[i].area;
    }
    return {
        sum: area,
        avg: Math.floor(area / arr.length),
    };
}

const xhr = new XMLHttpRequest();
xhr.open('GET', `ex11.1.json`, true);
xhr.onload = function () {
    onDataLoaded(this.responseText);

}
xhr.send(null);

console.log(chain);