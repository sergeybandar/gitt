class Library {
    name = '';
    books = [];
    constructor(name) {
        this.name = name;
    }
    getAllBooks() {
        let allBooks = [];
        for (let i = 0; i < this.books.length; i++) {
            allBooks.push(this.books.name);
        }
        return allBooks;
    }
    addBook(book) {

        this.books.push(book);

    }
    deleteBook(n) {
        this.books.remove(n - 1);
        return true;
    }
    robLibrary(library) {
        if (library instanceof Library) {
            this.books = this.books.concat(library.books);
            library.books.slice(0, library.books.length);
        }
    }
}