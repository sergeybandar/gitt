const a = Number(prompt("Введите 1-е число"));
const b = Number(prompt("Введите 1-е число"));
const c = Number(prompt("Введите 1-е число"));
const p = (a + b + c) / 2;
alert((a < b + c && b < a +c && c < a + b) ? "S= "+((p * (p - a) * (p - b) * (p - c)) ** (1/2)) : "Нет такого треугольника");
