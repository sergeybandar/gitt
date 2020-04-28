class Publisher {
    name = '';
    language = '';
    constructor(name, language) {
        this.name = name;
        this.language = language;
    }
    createBook(name, word, year, author) {
        return new Book(name, word, year, author, this.language, this.name);
    }
}