id=0;
function getId(){
    return id++;
}
const books=[
    {
        name:"Психолог",
        poster:"https://rust.litnet.com/uploads/covers/220/1536429607_36.png",
        file:"",
        author:"Alla YaLissa",
        id: getId()
    },
    {
        name:"Жерло",
        poster:"https://rust.litnet.com/uploads/covers/220/1575306565_18.jpg",
        file:"",
        author:"Ганц Ока",
        id: getId()
    },
    {
        name:"Пуля. Рассказ",
        poster:"https://rust.litnet.com/uploads/covers/220/1544030525_19.jpg",
        file:"",
        author:"Полина Мельник",
        id: getId()
    },
    {
        name:"Тег Короля",
        poster:"https://rust.litnet.com/uploads/covers/220/1544028420_94.jpg",
        file:"",
        author:"Полина Мельник",
        id: getId()
    },
    {
        name:"Лесной хозяин",
        poster:"https://rust.litnet.com/uploads/covers/220/1570364416_65.jpg",
        file:"",
        author:"Wicked Petrel",
        id: getId()
    }
]
const left =document.getElementById('left');
for(let i=0; i<books.length; i++){
    const div= document.createElement('div');
    div.innerHTML=`<div><img id='${books[i].id}' src="${books[i].poster}"></div>
    <div>
    <h2 id='${books[i].id}'>${books[i].name}</h2>
    <h4 id='${books[i].id}'>${books[i].author}</h4>
    </div>`;
    div.setAttribute('class', 'book-item');
    div.setAttribute('id', `${books[i].id}`);
    left.appendChild(div);
}

const right= document.getElementById('right');
left.addEventListener('click', function(e){
        if(!isNaN(e.target.getAttribute('id'))&&e.target.getAttribute('id')!==null){   
    right.innerHTML = `Идет загрузка`;
        const xhr = new XMLHttpRequest();
        xhr.open('GET', `${e.target.getAttribute('id')}.txt`, true);
        xhr.onload = function () {
            right.innerHTML = `<div class="text">${this.responseText}</div>`;
           
        }
        xhr.send(null);}
     



},)