const k = Number(prompt("Введите k-е число Фибоначчи"));
let fib1 = 0;
let fib2 = 1;
let fib;
if (k === 1) {
  alert(fib1);
} else if (k === 2) {
  alert(fib2);
} else {
  for (i = 2; i < k; i++) {
    fib = fib1 + fib2;
    fib1 = fib2;
    fib2 = fib;
  }
  alert(fib);
}
