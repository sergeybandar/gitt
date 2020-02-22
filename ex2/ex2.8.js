const str = prompt("Введите строку").trim();
let firstletters = str[0];

for (let i = 1; i < str.length; i++) {
  if (str[i] == " ") {
    firstletters = firstletters + str[i + 1];
  }
}
alert(firstletters);