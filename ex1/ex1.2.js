const num1 = Number(prompt("Введите 1-е число"));
const num2 = Number(prompt("Введите 2-е число"));
const num3 = Number(prompt("Введите 3-е число"));
alert(num1 < num2 + num3 && num2 < num1 +num3 && num3 < num1 + num2 ? "Да" : "Нет");