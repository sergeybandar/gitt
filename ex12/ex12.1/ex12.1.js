let product;
let id = 0;
let baskets;
let phoneQuantity;
if (typeof localStorage.baskets === "undefined" || localStorage.baskets === "") {
    baskets = [];

} else { baskets = JSON.parse(localStorage.baskets).slice(); }
if (typeof localStorage.phoneQuantity === "undefined" || localStorage.phoneQuantity === "") {
    phoneQuantity = [];

} else { phoneQuantity = JSON.parse(localStorage.phoneQuantity).slice(); }

//const phoneQuantity = JSON.parse(localStorage.phoneQuantity).slice() || [];
const onDataLoaded = (text) => {
    product = JSON.parse(text).slice();


    const phoneBlock = document.getElementById("phone");

    for (let i = 0; i < product.length; i++) {
        const divBlock = document.createElement('div');
        divBlock.innerHTML = `<div align="center">
    <img src="${product[i].photo}"></div>
    <div align="center">
    <h3>${product[i].name}</h3>
    <p>${product[i].description}</p>
    <span>${product[i].price} руб.</span>
    <p>Осталось: ${product[i].quantity}</p>
    <p id="${getId()}">Добавить в корзину</p>
    </div>`;
        divBlock.setAttribute('class', 'block');
        phoneBlock.appendChild(divBlock);
    }

    phoneBlock.addEventListener('click', function (e) {
        const phoneId = Number(e.target.getAttribute('id'));
        if (!isNaN(phoneId) && phoneId !== null) {
            if (typeof phoneQuantity[phoneId] === "undefined" || phoneQuantity[phoneId] === null) {
                phoneQuantity[phoneId] = 1;
                baskets.push({
                    id: phoneId,
                    n: phoneQuantity[phoneId]
                });

            } else {

                for (let i = 0; i < baskets.length; i++) {
                    if (baskets[i].id === phoneId) {
                        phoneQuantity[phoneId] = phoneQuantity[phoneId] + 1;
                        baskets[i].n = phoneQuantity[phoneId];
                    }
                }
            }
            localStorage.baskets = JSON.stringify(baskets);
            localStorage.phoneQuantity = JSON.stringify(phoneQuantity);

        }

    })

    const modal = document.getElementById('modal');
    const basket = document.getElementById('basket');
    const basketBlock = document.getElementById('basketBlock');
    basket.addEventListener('click', function (e) {
        basketBlock.innerHTML = '';
        modal.style.display = 'block';
        for (let i = 0; i < baskets.length; i++) {
            const div = document.createElement('div');
            div.innerHTML = `
        <div id="imgBasket"><img src="${product[baskets[i].id].photo}"></div>
        <div id="name"><h3>${product[baskets[i].id].name}</h3><h3>${product[baskets[i].id].price}руб.</h3></div>
        <div id="quantity"><h3>${baskets[i].n} x ${product[baskets[i].id].price}=${baskets[i].n * product[baskets[i].id].price}руб.</h3></div>`;
            div.setAttribute('id', 'phoneBasket');
            basketBlock.appendChild(div);
        }
        const div = document.createElement('div');
        div.innerHTML = `<h3>Очистить корзину</h3>`;
        div.setAttribute('id', 'clean');
        basketBlock.appendChild(div);

        const clean = document.getElementById('clean');
        clean.addEventListener('click', function (e) {

            localStorage.baskets = "";
            localStorage.phoneQuantity = "";
            baskets = [];
            phoneQuantity = [];
        })
    })


    modal.addEventListener('click', function (e) {
        if (e.target === modal) {

            modal.style.display = "none";

        }
    })


}


const xhr = new XMLHttpRequest();
xhr.open('GET', `ex12.1.json`, true);
xhr.onload = function () {
    onDataLoaded(this.responseText);

}
xhr.send(null);

function getId() {
    return id++;
}
