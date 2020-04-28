class Book {
    name = '';
    word = 0;
    year = 0;
    author = '';
    language = '';
    publisher = '';

    constructor(name, word, year, author, language, publisher) {
        this.name = name;
        this.word = word;
        this.year = year;
        this.author = author;
        this.language = language;
        this.publisher = publisher;
    }

    static getPages(word) {
        return Math.ceil(word / 800);
    }
}