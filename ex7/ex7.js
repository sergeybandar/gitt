let id = 0;
const people = [
    {
        name: "Masha Barnes",
        position: "HR",
        date: new Date("2019-05-23"),
        wage: "800",
        id: getId()
    },
    {
        name: "Sany Gibbs",
        position: "Junior",
        date: new Date("2020-01-27"),
        wage: "1000",
        id: getId()
    },
    {
        name: "Vity Faber",
        position: "Middle",
        date: new Date("2019-11-20"),
        wage: "1800",
        id: getId()
    },
    {
        name: "Koly Elmers",
        position: "Senior",
        date: new Date("2015-03-11"),
        wage: "3000",
        id: getId()
    },
    {
        name: "Andrey Croftoon",
        position: "Lead",
        date: new Date("2017-05-20"),
        wage: "5000",
        id: getId()
    },
];

tbodyPeople = document.querySelector("tbody");
render(people);

function render(arr) {
    tbodyPeople.innerHTML = "";
    for (let i = 0; i < arr.length; i++) {
        const tr = document.createElement("tr");
        tr.innerHTML = `<td>${document.getElementsByTagName("tr").length - 1}</td><td class="delete">delete</td><td>${arr[i].name}</td><td>${arr[i].position}</td><td>${arr[i].date.toLocaleDateString()}</td><td>${arr[i].wage}</td>`;

        tr.setAttribute('id', arr[i].id);
        tbodyPeople.appendChild(tr);
    }
    const del = document.getElementsByClassName("delete");
    for (let i = 0; i < del.length; i++) {
        del[i].addEventListener('click', function () {
            for (let j = 0; j < people.length; j++) {
                if (people[j].id === Number(this.parentNode.getAttribute("id"))) {
                    people.splice(j, 1);
                }
            }
            render(people);

        });
    }
}

const inputHuman = document.getElementsByTagName("input");
const add = document.getElementById("add");

add.addEventListener('click', function () {
    const human = {
        name: inputHuman[0].value,
        position: inputHuman[1].value,
        date: new Date(inputHuman[2].value),
        wage: inputHuman[3].value,
        id: getId()
    }
    inputHuman[0].value="";
    inputHuman[1].value="";
    inputHuman[2].value="";
    inputHuman[3].value="";
    people.push(human);
    render(people);
})

const buttonWage = document.getElementById("wage");
const buttonDate = document.getElementById("date");

buttonWage.addEventListener('click', function () {
    const peopleSort = [...people];
    people.sort((a, b) => a.wage - b.wage);

    if (JSON.stringify(people) === JSON.stringify(peopleSort)) {
        people.reverse();
    }
   
    render(people);
});

buttonDate.addEventListener('click', function () {
    const peopleSort = [...people];
    people.sort((a, b) => a.date - b.date);

    if (JSON.stringify(people) === JSON.stringify(peopleSort)) {
        people.reverse();
    }
    
    render(people);
});

function getId() {
    return ++id;
}