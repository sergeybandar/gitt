const str = prompt("Введите строку").toLowerCase();
let vowels = 0,
  consonants = 0,
  ponctuation = 0;
for (let i = 0; i < str.length; i++) {
  switch (str[i]) {
    case "a":
    case "u":
    case "e":
    case "o":
    case "y":
    case "i":
      vowels++;
      break;
    case "b":
    case "c":
    case "d":
    case "f":
    case "g":
    case "h":
    case "j":
    case "k":
    case "l":
    case "m":
    case "n":
    case "p":
    case "q":
    case "r":
    case "s":
    case "t":
    case "v":
    case "w":
    case "x":
    case "y":
    case "z":
      consonants++;
      break;
    default:
      ponctuation++;
  }
}
alert("Согласные: " + consonants + ", гласные: " + vowels + ", остольные знаки: " + ponctuation);
