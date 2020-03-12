const countries = [
    {
        name: "Belarus",
        area: 207595,
        people: "9,5млн",
        language: "Belorussian, Russian",
        phone: "+3",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Flag_of_Belarus.svg/1920px-Flag_of_Belarus.svg.png"

    },
    {
        name: "Russia",
        area: 17125191,
        people: "146,4млн",
        language: "Russian",
        phone: "+7",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Russia.svg/1920px-Flag_of_Russia.svg.png"

    },
    {
        name: "USA",
        area: 9519431,
        people: "328,9млн",
        language: "English",
        phone: "+1",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/1920px-Flag_of_the_United_States.svg.png"

    }
];
const table = document.getElementById("tb");
const th = document.createElement('tr');
th.innerHTML = `<tr>
<th>Страна</th>
<th>Площадь</th>
<th>Население</th>
<th>Язык</th>
<th>Телефонный код</th>
<th>Флаг</th>
</tr>`;
table.appendChild(th);
for (let i = 0; i < countries.length; i++) {
    let tr = document.createElement('tr');
    tr.innerHTML = `<tr>
    <td>${countries[i].name}</td>
    <td>${countries[i].area}</td>
    <td>${countries[i].people}</td>
    <td>${countries[i].language}</td>
    <td>${countries[i].phone}</td>
    <td><img src="${countries[i].flag}" height=100px></td>
    </tr>`;
    table.appendChild(tr);
}