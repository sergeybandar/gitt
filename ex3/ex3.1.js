const str = prompt("Введите строку").trim();
const arr = str.split(" ");
let vowels = 0;
for (let i = 1; i < arr.length; i++) {
  if (arr[0].length < arr[i].length) {
    arr[0] = arr[i];
  }
}
for (let i = 0; i < str.length; i++) {
  switch (str[i].toLowerCase()) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
    case "y":
      vowels++;
      break;
  }
}
alert("Самое длинное слово: " + arr[0]);
alert("Количество гласных в строке: " + vowels);
