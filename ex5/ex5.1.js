const coordinates = [];
let coordinatesStart = [];
const n = Number(prompt());

for (let i = 0; i < n; i++) {
  const obj = {
    x: Math.floor(Math.random() * 101),
    y: Math.floor(Math.random() * 101)
  };
  coordinates.push(obj);
}

function getSortArr(arr, key) {
  coordinatesStart = arr.concat();
  return arr.sort((a, b) => b[key] - a[key]);

}
console.log(getSortArr(coordinates, "x"));
console.log(coordinatesStart);