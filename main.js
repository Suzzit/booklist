
// book class: Represents a book

class Books {
    constructor(title, author, isbn) {
        this._title = title;
        this._author = author;
        this._isbn = isbn;
    }
}

// UI class: Represents UI tasks

class UI {
    static displayBooks(newBook) {
        const storedBooks = [...newBook];
        storedBooks.forEach((Books) => { UI.addBookToList(Books) });
    }   
    
    static addBookToList(book) {
        const list = document.querySelector("#table-body");
        const table_row = document.createElement("tr");
        table_row.innerHTML = `<td>${book._title}</td> <td>${book._author}</td> <td>${book._isbn}</td> <td><button class="btn btn-danger remover">X</button></td>`;
        list.appendChild(table_row);
    }
    
}

//Event to add book
document.querySelector("#book-form").addEventListener("submit", (e) => {

    e.preventDefault();
    
    //Get Form values
    let title = document.querySelector(".title").value;
    let author = document.querySelector(".author").value;
    let isbn = document.querySelector(".isbn").value;

    //Instantiate Books
    const book = new Books(title, author, isbn);
    const newBook = [];
    newBook.push(book);
    UI.displayBooks(newBook);

    // field clearer
    document.querySelector("#book-form").reset();
});

//event to remove book
const tableBody = document.querySelector("#table-body");
tableBody.addEventListener('click', (e)=>{
    document.querySelectorAll(".remover").forEach((buttons)=> {
        if(e.target == buttons){
            e.target.parentElement.parentElement.remove();
        }
    })
})

  
