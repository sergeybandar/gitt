const floors=Number(prompt("Введите число этажей"));
const house = {
  address: "улица Независимости 77",
  yearConstruction: 1975,
  floors: floors,
  apartament: [],

  getApartament() {
  const arrfloor=[];
    for (let i = 0; i < this.floors * 3; i += 3) {
      for (let j = 0; j < 3; j++) {
        const floor = {};
        floor.rooms = j + 1;
        floor.residents = Math.floor(floor.rooms * Math.random() * 3 + 1);
        floor.area = floor.rooms * 15 + 30;
        floor.number = i + j + 1;
        floor.floorsnumber = Math.ceil(floor.number / 3);
        floor.getPrice = function(month) {
          if (month >= 4 && month <= 10) {
            return 1 * this.area * this.residents / 2;
          } else {
            return 1.8 * this.area * this.residents / 2;
          }
        }
        this.apartament[i + j] = floor;
      }
    }
  },

  getAllArea() {
    let allarea = 0;
    for (let i = 0; i < this.apartament.length; i++) {
      allarea += this.apartament[i].area;
    }
    return allarea;
  },

  getAllResidents() {
    let allresidents = 0;
    for (let i = 0; i < this.apartament.length; i++) {
      allresidents += this.apartament[i].residents;
    }
    return allresidents;
  },

  getYearAllPrice() {
    let yearallprice = 0;
    for (let i = 0; i < this.apartament.length; i++) {
      for (let j = 1; j < 13; j++) {
        yearallprice += this.apartament[i].getPrice(j);
      }
    }
    return yearallprice;
  },

  getAvetageResidents() {
    return house.getAllArea() / house.getAllResidents();
  }
}
house.getApartament();
console.log(house);
console.log(house.getAllArea());
console.log(house.getAllResidents());
console.log(house.getYearAllPrice());
console.log(house.getAvetageResidents());
