function getSum() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }
    return sum;
  }
  
  //console.log(getSum(3, 5, 7, 9, 1, 10));
  
  const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
  
  //console.log(getRandom(3, 10));
  
  const getDistance = (point1, point2) => ((point2.x - point1.x) ** 2 + (point2.y - point1.y) ** 2) ** (1 / 2);
  
  /*a = {
    x: 5,
    y: 7
  }
  b = {
    x: 11,
    y: 15
  }
  console.log(getDistance(a, b));*/
  
  function getRGB() {
    const RGB = {
      R: Math.floor(Math.random() * 256),
      G: Math.floor(Math.random() * 256),
      B: Math.floor(Math.random() * 256)
    }
    return RGB;
  }
  
  //console.log(getRGB());
  
  function getComplex(num) {
    let str = "число простое";
    if (num < 0 || num % 1 !== 0) {
      return (num + " не является натуральным");
    } else if (num === 0 || num === 1) {
      return (num + " не является ни простым, ни составным");
    } else if (num === 2) {
      return (num + " " + str);
    } else {
      for (let i = 2; i < num; i++) {
        if (num % i === 0) {
          str = "число состовное";
          break;
        }
      }
    }
    return num + " " + str;
  }
  
  //console.log(getComplex(7));
  