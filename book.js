/* Selecciona el formulario de entrar libro y los campos */
const formulario = document.querySelector('.formulario');
const title = formulario.title;
const author = formulario.author;
const pages = formulario.pages;
const read = formulario.read;
const error = document.querySelector('.error');
let myLibrary = [];                                     // Array para guardar los libros


function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `${title} by ${author}, ${pages} pages, ${read}`;
    }
}

function addBookToLibrary(e) {
    e.preventDefault();
    // Toma los parametros del usuario
    const book = new Book(`${title.value}`, `${author.value}`, `${pages.value}`, `${read.value}`);
    console.log(book.info());

    // Llama a la función Book (constuctor) y pasa los datos al array
    this.reset();                                                        // Limpia el formulario una vez que captura los datos
}

const theHobbit = new Book('The Hobbit', 'J. R. R. Tolkien', 295, 'not read yet');

formulario.addEventListener('submit', addBookToLibrary);

/* console.log(theHobbit.info());
console.log(booksList); */