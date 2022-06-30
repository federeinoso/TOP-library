//Empty array for library
let myLibrary = [];

//Object constructor
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

//Add new book
function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  displayBooks();
}

//Display book
function displayBooks() {
  const library = document.getElementById("library");

  //New books
  for (let i = 0; i < myLibrary.length; i++) {
    const card = document.createElement("div");
    card.classList.add("card");
    library.appendChild(card);

    const title = document.createElement("p");
    title.classList.add("text");
    title.textContent = myLibrary[i].title;
    card.appendChild(title);

    const author = document.createElement("p");
    author.classList.add("text");
    author.textContent = myLibrary[i].author;
    card.appendChild(author);

    const pages = document.createElement("p");
    pages.classList.add("text");
    pages.textContent = myLibrary[i].pages;
    card.appendChild(pages);

    const read = document.createElement("p");
    read.classList.add("text");
    read.textContent = "read";
    card.appendChild(read);
  }
}

// const isRead = (array) => (array.read ? "yes" : "not yet");

//FORM

const submit = document.getElementById("submitBtn");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  const form = document.querySelector("form");
  const title = document.getElementById("input_title").value;
  const author = document.getElementById("input_author").value;
  const pages = document.getElementById("input_pages").value;
  addBookToLibrary(title, author, pages);
  form.reset();
});
