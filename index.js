// The Library Array
const myLibrary = [];

// The Book Prototype
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// In order to add books to the array
function addBookToLibrary(book) {
  myLibrary.push(book);
}

//function to display the book in the library-container ID
function displayBooks() {
  const libraryContainer = document.getElementById("library-container");
  libraryContainer.innerHTML = "";

  //   creates divs and use the details of each book in myLibrary array for a bookcard and renders it in the libraryContainer
  myLibrary.forEach((book, index) => {
    const bookCard = document.createElement("div");
    bookCard.innerHTML = `<p id="booktitle">Title: ${book.title}</p>
    <p id="bookauthor">Author: ${book.author}</p>
    <p id="bookpages">Pages: ${book.pages}</p>
        <p id="bookread">Read: ${book.read ? "Yes" : "No"}</p>
        <button onclick="removeBook(${index})">Remove</button>
        <button onclick="toggleReadStatus(${index})">Toggle Read Status</button>`;
    libraryContainer.appendChild(bookCard);
  });

  //   hide the book adding form
  const formContainer = document.getElementById("form-container");
  formContainer.style.display = "none";
}

function setupForm() {
  const bookForm = document.getElementById("book-form");
  bookForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("read").checked;

    const newBook = new Book(title, author, pages, read);
    addBookToLibrary(newBook);
    displayBooks();
  });
}

function showForm() {
  const formContainer = document.getElementById("form-container");
  formContainer.style.display = "flex";

  if (!formContainer.hasAttribute("data-setup")) {
    setupForm();
    formContainer.setAttribute("data-setup", "true");
  }
}

function removeBook(index) {
  myLibrary.splice(index, 1);
  displayBooks();
}

function toggleReadStatus(index) {
  myLibrary[index].read = !myLibrary[index].read;
  displayBooks();
}
