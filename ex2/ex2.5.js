const a = Number(prompt("Введите 1-е число"));
const sign = prompt("Введите арифметический знак");
const b = Number(prompt("Введите 2-е число"));
switch (sign) {
  case "+":
    alert(a + b);
    break;
  case "-":
    alert(a - b);
    break;
  case "*":
    alert(a * b);
    break;
  case "/":
    alert(a / b);
    break;
  case "**":
    alert(a ** b);
    break;
  default:
    alert("это неарифметический знак");
}
