let people;
const onDataLoaded = (text) => {
    const lines = text.split('\n');
    const names = lines.shift().trim().split(', ');

    const items = lines.map(line => {
        const splitted = line.split(', ');
        const object = splitted.reduce((result, value, index) => ({
            ...result,
            [names[index]]: value

        }), {});

        return object;
    });

    people = items;

    tbodyPeople = document.querySelector("tbody");
    render(people);

    function render(arr) {
        tbodyPeople.innerHTML = "";
        for (let i = 0; i < arr.length; i++) {
            const tr = document.createElement("tr");
            tr.innerHTML = `<td>${document.getElementsByTagName("tr").length}</td><td>${arr[i].name}</td><td>${arr[i].position}</td><td>${arr[i].wage}</td><td>${arr[i].age}</td><td>${arr[i].bossName}</td>`;

            tr.setAttribute('id', arr[i].id);
            tbodyPeople.appendChild(tr);
        }

    }

    const name = document.querySelector('.name');
    const position = document.querySelector('.position');
    const wage = document.querySelector('.wage');
    const age = document.querySelector('.age');
    const boss = document.querySelector('.boss');

    function areStringSort(key) {

        const peopleArr = [];
        const peopleSort = [];
        for (let i = 0; i < people.length; i++) {
            peopleArr.push(people[i][`${key}`]);
        }
        const peopleArrSet = [...new Set(peopleArr)];

        peopleArrSet.sort();
        for (let i = 0; i < peopleArrSet.length; i++) {
            for (let j = 0; j < people.length; j++) {
                if (peopleArrSet[i] === people[j][`${key}`]) {
                    peopleSort.push(Object.assign({}, people[j]));
                }
            }
        }
        return peopleSort;

    }

    wage.addEventListener('click', function () {

        people.sort((a, b) => a.wage - b.wage);
        render(people);

    });

    age.addEventListener('click', function () {

        people.sort((a, b) => a.age - b.age);
        render(people);

    });

    name.addEventListener('click', function () {

        render(areStringSort('name'));

    });

    position.addEventListener('click', function () {

        render(areStringSort('position'));

    });

    boss.addEventListener('click', function () {

        render(areStringSort('bossName'));

    });





}


const xhr = new XMLHttpRequest();
xhr.open('GET', `ex10.2.csv`, true);
xhr.onload = function () {
    onDataLoaded(this.responseText);

}
xhr.send(null);


