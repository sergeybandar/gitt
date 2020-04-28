class Renderer {
    static renderBook(book, container) {
        const tr = document.createElement('tr');
        tr.setAttribute('class', 'trBody');
        tr.innerHTML = `<td>${book.name}</td><td>${book.author}</td><td>${book.publisher}</td><td>${book.year}</td><td>${Book.getPages(book.word)}</td><td>${book.language}</td>`;
        container.appendChild(tr);
    }
    static renderLibrary(library, container) {

        const headLibraryTr = document.createElement('tr');
        headLibraryTr.setAttribute('class', `headLibraryTr`)
        headLibraryTr.innerHTML =
            `<th colspan="1">Библиотека : ${library.name}</th>
        <th colspan="2">Языки книг : ${App.getLibraryLanguage(library)}</th>
        <th colspan="3">Число книг : ${library.books.length}</th>`;
        container.appendChild(headLibraryTr);
        const headBookTr = document.createElement('tr');
        headBookTr.innerHTML =
            `<th>Название</th>
        <th>Автор</th>
        <th>Редакция</th>
        <th>Первая публикация</th>
        <th>Количество страниц</th>
        <th>Язык</th>`;
        container.appendChild(headBookTr);

        for (let i = 0; i < library.books.length; i++) {
            this.renderBook(library.books[i], container);
        }

    }
    static renderPublisher(publisher, libraries, container) {
        const publisherTr = document.createElement('tr');
        console.log(publisher);
        console.log(container);
        publisherTr.innerHTML = `<td colspan="3">${publisher.name}</td><td colspan="3">${publisher.language}</td>`;
        container.appendChild(publisherTr);
        console.log(container);
        const panelPublisherTr = document.createElement('tr');
        panelPublisherTr.innerHTML = `
        <td class="bookName"><input type="text" placeholder=" Название"></td>
        <td class="bookAuthor"><input type="text" placeholder=" Автор"></td>
        <td class="bookYear"><input type="text" placeholder=" Год"></td>
        <td class="bookWord"><input type="text" placeholder=" Количество слов"></td>
        <td class="bookLibraries"><select></select></td>
        <td class="bookButton"><button>Добавить</button></td>`;
        panelPublisherTr.setAttribute('class', `${publisher.name}`);
        container.appendChild(panelPublisherTr);
        const sel = document.querySelectorAll('.bookLibraries select');
        for (let i = 0; i < libraries.length; i++) {
            sel[sel.length - 1].insertAdjacentHTML('beforeend', `<option value="${libraries[i].name}">${libraries[i].name}</option>`);
        }
    }
}