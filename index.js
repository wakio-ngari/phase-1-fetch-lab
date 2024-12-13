function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
  .then(response => {
    if (!response.ok) {
      throw new Error('response failed');
    }
    return response.json(); // Convert response to JSON
  })
  .then(data => {
    renderBooks(data);
  })
  .catch(error => console.error('Error:', error))

}
  

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
