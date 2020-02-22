let num1 = Number(prompt("Введите количество секунд"));
let numhour=0, numminute=0, numsecond=0;
let hour, minute, second;
if (num1 >= 3600) {
  numhour = Math.floor(num1 / 3600);
  num1 = num1 % 3600;
 }
 
 switch (numhour) {
    case 1:
      hour = " час: ";
      break;
    case 2:
    case 3:
    case 4:
      hour = " часа: ";
      break;
    default:
      hour = " часов: ";
  }

if (num1 >= 60) {
  numminute = Math.floor(num1 / 60);
  num1 = num1 % 60;
  }

switch (numminute) {
    case 1:
      minute = " минута: ";
      break;
    case 2:
    case 3:
    case 4:
      minute = " минуты: ";
      break;
    default:
      minute = " минут: ";
  }
  
if (num1 < 60) {
  numsecond = num1;
  
}
switch (numsecond) {
    case 1:
      second = " секунда";
      break;
    case 2:
    case 3:
    case 4:
      second = " секунды";
      break;
    default:
      second = " секунд";
  }
alert( numhour+ hour +numminute+ minute +  numsecond + second);
