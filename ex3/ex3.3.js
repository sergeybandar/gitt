const n = Number(prompt());
const people = [];
const d1 = new Date("1980-1-1");
const d2 = new Date("1995-12-31");
const name = ["Vasy", "Sany", "Dima", "Vity", "Sergey"];
let age = 0;
let money = 0,
  j = 0;
for (let i = 0; i < n; i++) {
  people[i] = {};
  people[i].name = name[Math.floor(Math.random() * 5)];
  people[i].wage = Math.round(Math.random() * 500);
  people[i].date = new Date(Math.round(Math.random() * (d2 - d1) + Number(d1)));
  age = age + (Date.now() - people[i].date) / (3600 * 24 * 365.25 * 1000);

}

for (let i = 0; i < n; i++) {
  console.log(people[i]);
  if (money < people[i].wage) {
    money = people[i].wage;
    j = i;
  }
}
console.log("Средний возраст людей " + Math.floor(age / n));
console.log("Самая большая зарплата у " + people[j].name);