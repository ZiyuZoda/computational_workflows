const input = document.querySelector('input')
const button = document.querySelector('button')

function getBookData(){
  //console.log(isbn);

  let BOOKS_URL = `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`

  fetch(BOOKS_URL)
  .then((response) => response.json())
  .then((data) => {

  
    console.log(data.item[0])
  });


}

function getIsbn(event){
  event.preventDefault();
  let isbn = input.value;
  getBookData(isbn)
  
}

button.addEventListener('click',getIsbn)