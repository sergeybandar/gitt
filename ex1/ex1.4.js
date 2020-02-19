const num1 = Number(prompt("Введите число байт"));
if(num1 < 2 ** 10){
alert(num1 + "байт");
} else if(num1 < 2 ** 20){
alert((num1 / 2 ** 10).toFixed(3) + "Кбайт");
} else if(num1 < 2 ** 30){
alert((num1 / 2 ** 20).toFixed(3) + "Мбайт");
} else if(num1 >= 2 ** 30){
alert((num1 / 2 ** 30).toFixed(3) + "Гбайт");
} 