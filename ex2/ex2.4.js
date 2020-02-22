const str = prompt("Введите строку");
let left = 0,
  right = 0;
for (let i = 0; i < str.length; i++) {
  if (str[i] === "(") {
    left++;
  } else if (str[i] === ")") {
    right++;
  }
  if (left < right) {
    alert("скобки расставлены не верно");
    break;
  }
}
if (left === right) {
  alert("скобки расставлены верно");
} else if (left > right) {
  alert("скобки расставлены не верно");
}
