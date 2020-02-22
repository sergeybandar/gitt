const num1 = Number(prompt("Введите число"));
let str = "число простое";
if (num1 < 0 || num1 % 1 !== 0) {
  alert(num1 + " не является натуральным");
} else if (num1 === 0 || num1 === 1) {
  alert(num1 + " не является ни простым, ни составным");
} else if (num1 === 2) {
  alert(num1 + " " + str);
} else {
  for (let i = 2; i < num1; i++) {
    if (num1 % i === 0) {
      str = "число состовное";
      break;
    }
  }
  alert(num1 + " " + str);
}
