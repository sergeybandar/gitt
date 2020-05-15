const num1 = Number(prompt("Введите 1-е число"));
const num2 = Number(prompt("Введите 2-е число"));
const num3 = Number(prompt("Введите 3-е число"));
const num4 = Number(prompt("Введите 4-е число"));
const max1 = (num1 > num2) ? num1 : num2;
const max2 = (num3 > num4) ? num3 : num4;
alert(max1 > max2 ? max1 : max2);