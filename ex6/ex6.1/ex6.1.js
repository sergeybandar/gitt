
const n = Number(prompt());
const table = document.getElementById("tb");
for (let j = 1; j < n + 1; j++) {
    let tr = document.createElement('tr');
    for (let i = 1; i < n + 1; i++) {
        const td = document.createElement('td');
        td.innerHTML = `${i}*${j}=${i * j}`;
        tr.appendChild(td);
    }
    table.appendChild(tr);
}
