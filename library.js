console.log("Welcome! to My Library");

class Book {
    constructor(bookname, author, gener) {
        this.name = bookname;
        this.author = author;
        this.gener = gener;
    }
}

class Display {

    validiate(book) {
        if (book.name.length < 3 || book.author.length < 3 || book.gener.length == 0) {
            return false;
        } else
            return true;
    }


    addbook(book) {
        // let html;
        let tablebody = document.getElementById('tablebody');
        let html = `
                    <tr>
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.gener}</td>
                    </tr>
        `;

        tablebody.innerHTML += html;
        console.log(tablebody);
    }

    clear() {
        let libform = document.getElementById('libform');
        libform.reset();
    }

    message(messageTxt) {
        let alert = document.getElementById('alert');
                
        if (messageTxt === 'success') {
            alert.innerHTML = `<div class="alert alert-${messageTxt}" role="alert">
            Success : Your Book is added Successfully!
          </div>`
        } else {
            alert.innerHTML = `<div class="alert alert-${messageTxt}" role="alert">
            Warning! : Invalid Inputs.
          </div>`
        }
        setTimeout(function () {
            alert.innerHTML = '';

        }, 5000);

    }
}

let addbook = document.getElementById('addbook');
addbook.addEventListener('click', addfunction);

function addfunction(e) {
    e.preventDefault();
    let bookname = document.getElementById('bookname').value;
    let author = document.getElementById('author').value;
    let friction = document.getElementById('friction');
    let thrill = document.getElementById('thrill');
    let advanture = document.getElementById('advanture');
    let gener = '';
    if (friction.checked) {
        gener = 'Friction';
    }
    else if (thrill.checked) {
        gener = 'Thrill';
    }
    else if (advanture.checked) {
        gener = 'Advanture';
    }

    // Making an Object 'book' of class 'Book' - consists book details
    let book = new Book(bookname, author, gener);
    // console.log(book);
    // Making an Object 'display' of class 'Display' - consists function to be Performed on book
    let display = new Display();


    // Validiating the input data 
    if (display.validiate(book)) {
        // Adding Methods for our Library System 
        display.addbook(book);
        display.clear();
        display.message('success');

    } else {
        display.message('danger')
    }


    // console.log(bookname, author, gener);

}