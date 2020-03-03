const url = window.location.host;
const exp = /.\w*$/;
console.log(url.match(exp)[0]);
