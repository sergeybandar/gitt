
const but = document.getElementById('but');
const vacanciesBlock=document.getElementById('vacancies');


function getVacancies(vacancies){
    
    for(let i=0; i<vacancies.length; i++){
    const div = document.createElement('div');
    div.innerHTML=`<div>
    <a href="${vacancies[i].company_url}"><h2>${vacancies[i].company}</h2></a>
    <img src="${vacancies[i].company_logo}"></div>
    <div>
    <a href="${vacancies[i].url}"><h3>${vacancies[i].title}</h3></a>
    ${vacancies[i].description.split('\n')[0]}
    ${vacancies[i].description.split('\n')[1]}
    <h3>${vacancies[i].created_at}</h3>
    </div>`;
    div.setAttribute('id', 'vacancy');
        vacanciesBlock.appendChild(div);
}

}

but.addEventListener('click', function () {

    const description = document.getElementById('description').value;
    const location=document.getElementById('location').value;
    loadData(description, location);
});





function loadData(description, location) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `https://jobs.github.com/positions.json?description=${description}&location=${location}`, true);
    xhr.onload = () => {
        const vacancies = JSON.parse(xhr.responseText);
        getVacancies(vacancies);
        console.log(vacancies);
        //render(vacancies);
    }
    xhr.send(null);
}
