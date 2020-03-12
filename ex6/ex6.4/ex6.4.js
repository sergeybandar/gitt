const product = [
    {
        photo: "https://content2.onliner.by/catalog/device/header/c93a1df6be27222912d27530201d7d7a.jpeg",
        name: "Samsung Galaxy A50",
        description: "Android, экран 6.4 AMOLED (1080x2340), Exynos 9610, ОЗУ 4 ГБ, флэш-память 64 ГБ, карты памяти, камера 25 Мп, аккумулятор 4000 мАч, 2 SIM",
        quantity: Math.floor(Math.random() * 50),
        price: "520"

    }, {
        photo: "https://content2.onliner.by/catalog/device/header/e98cb07ad9bc97fc000a6c41b49474cc.jpeg",
        name: "HONOR 20",
        description: "Android, экран 6.26 IPS (1080x2340), HiSilicon Kirin 980, ОЗУ 6 ГБ, флэш-память 128 ГБ, камера 48 Мп, аккумулятор 3750 мАч, 2 SIM",
        quantity: Math.floor(Math.random() * 50),
        price: "750"

    }, {
        photo: "https://content2.onliner.by/catalog/device/header/e16c6a794798c03985a53861f42a1da9.jpeg",
        name: "Xiaomi Redmi Note 8 Pro",
        description: "Android, экран 6.53 IPS (1080x2340), Mediatek Helio G90T, ОЗУ 6 ГБ, флэш-память 64 ГБ, карты памяти, камера 64 Мп, аккумулятор 4500 мАч, 2 SIM",
        quantity: Math.floor(Math.random() * 50),
        price: "580"

    }, {
        photo: "https://content2.onliner.by/catalog/device/header/cc1b1fef1926523a97df39b4bf11b6b7.jpeg",
        name: "Samsung Galaxy S10",
        description: "Android, экран 6.1 AMOLED (1440x3040), Exynos 9820, ОЗУ 8 ГБ, флэш-память 128 ГБ, карты памяти, камера 12 Мп, аккумулятор 3400 мАч, 2 SIM",
        quantity: Math.floor(Math.random() * 50),
        price: "1420"

    }, {
        photo: "https://content2.onliner.by/catalog/device/header/98b65279323ea2beeba0c347f365f728.jpeg",
        name: "Apple iPhone XR",
        description: "Apple iOS, экран 6.1 IPS (828x1792), Apple A12 Bionic, ОЗУ 3 ГБ, флэш-память 64 ГБ, камера 12 Мп, аккумулятор 2942 мАч, 1 SIM",
        quantity: Math.floor(Math.random() * 50),
        price: "1530"

    },
    {
        photo: "https://content2.onliner.by/catalog/device/header/72fe584b86221112efc8dda98544811c.jpeg",
        name: "OnePlus 7 Pro",
        description: "Android, экран 6.67 AMOLED (1440x3120), Qualcomm Snapdragon 855, ОЗУ 8 ГБ, флэш-память 256 ГБ, камера 48 Мп, аккумулятор 4000 мАч, 2 SIM",
        quantity: Math.floor(Math.random() * 50),
        price: "1550"

    }
];
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
    </div>`;
    divBlock.setAttribute('class', 'block');
    phoneBlock.appendChild(divBlock);
}
