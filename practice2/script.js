document.addEventListener('DOMContentLoaded', () => {
  const list = document.getElementById('book-list');
  const forms = document.forms;

  list.addEventListener('click', (e) => {
    if(e.target.className == 'delete'){
      const li = e.target.parentElement;
      li.parentNode.removeChild(li);
    }
  });

  const addForm = forms['addBook'];
  addForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const value = addForm.querySelector('#book-input').value;
    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const deleteBtn = document.createElement('span');

    bookName.textContent = value;
    deleteBtn.textContent = 'Delete';
    bookName.classList.add('name');
    deleteBtn.classList.add('delete');
    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    list.appendChild(li);
  })

  const hide = document.querySelector('#hide');
  hide.addEventListener('change', (e) => {
    if(hide.checked){
      list.style.display = "none";
    } else {
      list.style.display = "initial";
    }
  })

  const searchbar = document.forms['search-books'].querySelector('input');
  searchbar.addEventListener('keyup', (e) => {
    const term = e.target.value.toLowerCase();
    const books = list.getElementsByTagName('li');
    Array.from(books).forEach((book) => {
      const title = book.firstElementChild.textContent;
      if(title.toLowerCase().indexOf(e.target.value) != -1){
        book.style.display = "block"
      } else {
        book.style.display = 'none';
      }
    })
  })

})