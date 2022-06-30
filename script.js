//Empty array for library
let myLibrary = [];

//Object constructor
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = title;
}

//Display book
function displayBooks() {
  myLibrary.push(newBook);

  let library = document.getElementById("library");

  library.innerHTML +=
    `<div class="card" id="${newBook.title}">
  <p class="text">` +
    newBook.title +
    `</p>
  <p class="text">` +
    newBook.author +
    `</p>
  <p class="text">` +
    newBook.pages +
    `</p>
    <div class='delete_div ${newBook.read ? "green" : "red"}'>
  <p>` +
    (newBook.read ? "read" : "not read yet") +
    `</p>
    <button class='btnDelete' onClick=erase(${newBook.title})>X</button></div>
</div>`;
}

//Delete btn
function erase(value) {
  let element = document.getElementById(value.id);
  element.remove();
  myLibrary = myLibrary.filter((obj) => obj.id !== value.id);
  return myLibrary;
}

//Click form and add new book

const submit = document.getElementById("submitBtn");
const form = document.querySelector("form");

submit.addEventListener("click", (e) => {
  e.preventDefault();

  const title = document.getElementById("input_title").value;
  const author = document.getElementById("input_author").value;
  const pages = document.getElementById("input_pages").value;
  const read = document.getElementById("read").checked;
  if (title !== "" && author !== "" && pages !== "") {
    newBook = new Book(title, author, pages, read);
    displayBooks();
    form.reset();
  } else alert("Complete all the spaces");
});

//Add btn

const btnAdd = document.querySelector(".btnAdd");

btnAdd.addEventListener("click", (e) => {
  e.preventDefault(e);
  form.classList.remove("display");
  btnAdd.classList.add("display");
});

const btnClose = document.getElementById("closeBtn");

closeBtn.addEventListener("click", (e) => {
  e.preventDefault(e);
  form.classList.add("display");
  btnAdd.classList.remove("display");
});
