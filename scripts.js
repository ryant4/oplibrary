// Initial Empty Array for Library, establish bookList in DOM
let myLibrary = [];
const bookList = document.getElementById("book-list");

// Create a Book Constructor
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.index = myLibrary.length;
}

// Add function to the prototype to push to array
Book.prototype.addToLibraryArray = function () {
  myLibrary.push(this);
};

// Add event listener to buttons for modal
const newBookButton = document.getElementById("add-button");
const overlay = document.querySelector("#overlay");
const closeNewBookWindow = document.getElementById("close-modal-btn");
newBookButton.addEventListener("click", () => {
  overlay.style.display = "block";
});
closeNewBookWindow.addEventListener("click", () => {
  overlay.style.display = "none";
});

// Grab values from the form, make a new book, push it
function grabValues() {
  const formValues = document.getElementsByName("new-book-info");
  const newBook = new Book(
    formValues[0].value,
    formValues[1].value,
    formValues[2].value,
    formValues[3].value
  );
  newBook.addToLibraryArray();
  addBookToLibrary(newBook);
}

// Cancel Submit button default and run grab value function
const formSubmitButton = document.getElementById("add");
formSubmitButton.addEventListener("click", (event) => {
  event.preventDefault();
  grabValues();
  document.getElementById("new-book-form").reset();
  overlay.style.display = "none";
});

// Some starter books for stock library
const toKillAMockingbird = new Book(
  "To Kill a Mockingbird",
  "Harper Lee",
  "184",
  "on"
);
toKillAMockingbird.addToLibraryArray();
const atonement = new Book("Atonement", "Ian McEwan", 371, "off");
atonement.addToLibraryArray();
function displayStockBooks() {
  for (let book of myLibrary) {
    addBookToLibrary(book);
  }
}
displayStockBooks();

// A function to add a book to the library and manipulate the DOM
function addBookToLibrary(book) {
  // Create a new book card, style it, and add it to the DOM
  const bookCard = document.createElement("div");
  bookCard.classList.add("book-card");
  bookCard.setAttribute("id", book.index);
  bookList.appendChild(bookCard);

  // Create info divs, style, add to the DOM
  const bookTitle = document.createElement("div");
  bookTitle.textContent = book.title;
  bookTitle.classList.add("title");
  bookCard.appendChild(bookTitle);

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "X";
  deleteButton.classList.add("delete-buttons");
  deleteButton.setAttribute("tag", book.index);
  bookCard.appendChild(deleteButton);

  const bookAuthor = document.createElement("div");
  bookAuthor.textContent = book.author;
  bookAuthor.classList.add("author");
  bookCard.appendChild(bookAuthor);

  const bookPages = document.createElement("div");
  bookPages.textContent = book.pages + " pages";
  bookPages.classList.add("pages");
  bookCard.appendChild(bookPages);

  const bookReadStatus = document.createElement("select");
  bookCard.appendChild(bookReadStatus);

  const bookUnread = document.createElement("option");
  bookUnread.value = "off";
  bookUnread.textContent = "Unread";
  bookReadStatus.appendChild(bookUnread);

  const bookRead = document.createElement("option");
  bookRead.value = "on";
  bookRead.textContent = "Read";
  bookReadStatus.appendChild(bookRead);

  // Give delete button functionality
  deleteButton.addEventListener("click", (event) => {
    event.target.parentNode.remove();
  });
}

// NOTE THAT IN THIS VERSION WHEN SOMETHING IS DELETED, IT IS NOT ALSO REMOVED FROM THE ARRAY.
// MAY WANT TO ADD THIS IN THE FUTURE

// THE ONLY THING NOT WORKING IS THE READ FUNCTIONS
