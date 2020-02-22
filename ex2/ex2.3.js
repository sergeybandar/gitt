const x = Number(prompt("Введите x"));
const n = Number(prompt("Введите N"));
let num = 1,
  factorial = 1;
for (let i = 1; i < n; i++) {
  factorial = factorial * i;
  num = num + (x ** i) / factorial;
}
alert(num);
