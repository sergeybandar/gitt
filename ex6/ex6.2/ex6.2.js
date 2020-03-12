
let colon = 0;
setInterval(() => {
    const time = new Date();
    const h2 = document.getElementById("time");
    if (colon === 0) {
        h2.innerText = `${time.getHours()} ${time.getMinutes()} ${time.getSeconds()}`;
        colon++;
    }
    else {
        h2.innerText = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
        colon = 0;
    }
}, 500);