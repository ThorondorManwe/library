function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `${title} by ${author}, ${pages} pages, ${read}`;
    }
}

function addBookToLibrary() {
    // Toma los parametros del usuario

    // Llama a la función Book (constuctor) y pasa los datos al array
}

const theHobbit = new Book('The Hobbit', 'J. R. R. Tolkien', 295, 'not read yet');

console.log(theHobbit.info());