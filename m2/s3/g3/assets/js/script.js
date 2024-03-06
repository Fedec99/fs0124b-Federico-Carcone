const booksApiUrl = 'https://striveschool-api.herokuapp.com/books'
const libreriaRow = document.querySelector('.row')
const cartUl = document.querySelector('#cartContainer')
const cartIcon = document.querySelector('.cartIcon')
const btnClear = document.querySelector('.btnClear')
const cartIconDiv = document.querySelector('#cartIconDiv')

let keysArray = []

for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i)
    keysArray.push(key)
}

fetch(booksApiUrl)
    .then(resp => resp.json())
    .then((data) => {
        let elemCardHtml = ''
        data.forEach(book => {
        elemCardHtml += `
        <div class="col-lg-3 col-md-4 col-sm-6">
            <div class="card mb-2" style="width: 16rem;">
                <img src=${book.img} class="card-img-top" alt="img">
                <div class="card-body">
                    <h5 class="card-title">${book.title}</h5>
                    <div class="row">
                        <div class="col">
                            <p class="card-text">Category: ${book.category}</p>
                            <p class="card-text">Price: ${book.price}€</p>
                        </div>
                    </div>
                    <div class="row mt-2">
                        <div class="col-7">
                            <button class="btn btn-primary btn-cart">Add to cart</button>
                        </div>
                        <div class="col-5">
                            <button class="btn btn-danger btn-delete">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
        })
        libreriaRow.innerHTML = elemCardHtml

        const btnsDelete = document.querySelectorAll('.btn-delete')
        btnsDelete.forEach(bottone => {
            bottone.addEventListener('click', function() {
                this.closest('.col-lg-3').remove()
            })
        })
        
        const btnsCart = document.querySelectorAll('.btn-cart')
        btnsCart.forEach(bottone => {
            bottone.addEventListener('click', function() {
                const bookTitle = this.closest('.card').querySelector('.card-title').textContent
                localStorage.setItem(bookTitle, bookTitle)

                if (!keysArray.includes(bookTitle)) {
                    keysArray.push(bookTitle)
                    createAndAppendLi(bookTitle)
                }
            })
        })

        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i)
            const value = localStorage.getItem(key)

            createAndAppendLi(value)
        }
    })

cartIcon.addEventListener('click', function() {
    cartUl.classList.toggle('show')
    cartIconDiv.classList.toggle('toggle')
})

btnClear.addEventListener('click', function() {
    keysToRemove = []
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i)
        keysToRemove.push(key)
    }

    keysToRemove.forEach(key => {
        localStorage.removeItem(key)
    })

    cartUl.innerHTML = ''
    keysArray = []
})

function createAndAppendLi(name) {
    let bookLi = document.createElement('li')
    bookLi.textContent = name
    cartUl.appendChild(bookLi)
}