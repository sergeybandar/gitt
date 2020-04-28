class App {
    static init() {
        const librarys = [];
        librarys.push(new Library("library1"));
        librarys.push(new Library("library2"));
        librarys.push(new Library("library3"));
        const publishers = [];
        publishers.push(new Publisher("publisher1", "русский"));
        publishers.push(new Publisher("publisher2", "английский"));
        publishers.push(new Publisher("publisher3", "польский"));
        const divLibrarys = document.getElementById('librarys');
        const divPublisher = document.getElementById('publisher');
        App.getBooks().then(function (books) {
            for (let i = 0; i < books.length; i++) {
                librarys[i % 3].addBook(books[i]);
            }
            console.log(librarys);
        }).then(function () {
            for (let i = 0; i < 9; i++) {
                const book = publishers[i % 3].createBook(`book${i}`,Math.floor(Math.random()*400000+150000), Math.floor(Math.random()*100+1900), `author${i}`);
                librarys[i % 3].addBook(book);
                console.log(librarys);
            }
            for (let i = 0; i < librarys.length; i++) {
                Renderer.renderLibrary(librarys[i], divLibrarys);
            }
            for (let i = 0; i < publishers.length; i++) {
                Renderer.renderPublisher(publishers[i], librarys, divPublisher);
            }
            const inpBookName = document.querySelectorAll('.bookName input');
            const inputs = document.querySelectorAll('input');
            const buttons = document.querySelectorAll('button');
            for (let i = 0; i < buttons.length; i++) {
                buttons[i].addEventListener('click', function (e) {
                    const classBut = buttons[i].parentElement.parentElement.getAttribute('class');

                    const inpName = document.querySelector(`.${classBut} .bookName input`);
                    const inpAuthor = document.querySelector(`.${classBut} .bookAuthor input`);
                    const inpYear = document.querySelector(`.${classBut} .bookYear input`);
                    const inpWord = document.querySelector(`.${classBut} .bookWord input`);
                    const sel = document.querySelector(`.${classBut} .bookLibraries select`);
                    let book;

                    for (let i = 0; i < publishers.length; i++)
                        if (publishers[i].name === classBut) {
                            {
                                book = publishers[i].createBook(`${inpName.value}`, `${Number(inpWord.value)}`, `${Number(inpYear.value)}`, `${inpAuthor.value}`);
                                console.log(book);
                            }
                        }
                    for (let i = 0; i < librarys.length; i++) {
                        if (librarys[i].name === sel.value) {
                            librarys[i].addBook(book);
                        }
                    }
                    divLibrarys.innerHTML = '';
                    for (let i = 0; i < librarys.length; i++) {
                        Renderer.renderLibrary(librarys[i], divLibrarys);
                    }
                    inpName.value = '';
                    inpAuthor.value = '';
                    inpYear.value = '';
                    inpWord.value = '';

                })
            }
        })
    }
    static getLibraryLanguage(library) {
        const language = [];
        for (let i = 0; i < library.books.length; i++) {
            language.push(library.books[i].language);
        }
        return [...new Set(language)].join(', ');
    }
    static getBooks() {
        return new Promise(function (result, reject) {
            const xhr = new XMLHttpRequest();
            xhr.open('GET', `ex14.json`, true);
            xhr.onload = function () {
                //onDataLoaded(this.responseText);
                result(JSON.parse(this.responseText));
            }
            xhr.onerror = () => reject('Error!');
            xhr.send(null);
        })
    }
}
App.init();