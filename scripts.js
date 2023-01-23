// Initial Empty Array for Library
let myLibrary = [];

// Create a Book Constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    }

// Add function to the prototype to push to array
Book.prototype.addToLibraryArray = function() {
    myLibrary.push(this);
}


// Function to add a book to the library
function addBookToLibrary() {
    // prompt user for information
    prompt('TEST PLACEHOLDER');

    // make book


    // push to array


    // run a displaybooks function
}

// Add event listener to button for adding a book
const newBookButton = document.getElementById("add-button");
newBookButton.addEventListener('click', addBookToLibrary);

// Some starter books for testing
const toKillAMockingbird = new Book("To Kill a Mockingbird", "Harper Lee", "184", true);
const atonement = new Book("Atonement", "Ian McEwan", 371, false);
toKillAMockingbird.addToLibraryArray();
atonement.addToLibraryArray();


function displayBooks() {
    const bookList = document.getElementById("book-list");

    for (let book of myLibrary) {
        // Create a new book card, style it, and add it to the DOM
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card')
        bookList.appendChild(bookCard);

        // Create info divs, style, add to the DOM
        const bookTitle = document.createElement('div');
        bookTitle.textContent = book.title;
        bookTitle.classList.add('title');
        bookCard.appendChild(bookTitle);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'X'
        deleteButton.classList.add('delete-buttons');
        bookCard.appendChild(deleteButton);

        const bookAuthor = document.createElement('div');
        bookAuthor.textContent = book.author;
        bookAuthor.classList.add('author');
        bookCard.appendChild(bookAuthor);

        const bookPages = document.createElement('div');
        bookPages.textContent = book.pages + " pages"
        bookPages.classList.add('pages');
        bookCard.appendChild(bookPages);

        const bookReadStatus = document.createElement('select')
        bookCard.appendChild(bookReadStatus);
        
        const bookUnread = document.createElement('option')
        bookUnread.value = 'false';
        bookUnread.textContent = 'Unread';
        bookReadStatus.appendChild(bookUnread);

        const bookRead = document.createElement('option')
        bookRead.value = 'true';
        bookRead.textContent = 'Read';
        bookReadStatus.appendChild(bookRead);


    }
}

displayBooks();
