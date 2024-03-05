// ESERCIZIO 1

const formName = document.querySelector('#formName')
const nameInput = document.querySelector('#nameInput')
const addName = document.querySelector('#addName')
const delName = document.querySelector('#delName')
const savedNames = document.querySelector('#savedNames')


if (!localStorage.getItem('indexUtente')) {
    localStorage.setItem('indexUtente', '0')
}

let indexUtente = parseInt(localStorage.getItem('indexUtente'))


window.addEventListener('load', () => {
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i)
        const value = localStorage.getItem(key)

        if (key.startsWith('utente')) {
            createAndAppendLi(value)
        }
    }
})

formName.addEventListener('submit', (event) => {
    event.preventDefault()
    if (nameInput.value) {
        const key = `utente${indexUtente}`
        localStorage.setItem(key, nameInput.value)
        createAndAppendLi(nameInput.value)
        indexUtente++
        localStorage.setItem('indexUtente', `${indexUtente}`)
    }
    nameInput.value = ''
})

delName.addEventListener('click', (event) => {
    event.preventDefault()
    const inputValue = nameInput.value

    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i)
        const value = localStorage.getItem(key)

        if (value === inputValue) {
            localStorage.removeItem(key)
            if (indexUtente > 0) {
                indexUtente--
                localStorage.setItem('indexUtente', `${indexUtente}`)
            }
        }
    }

    const nameList = document.querySelectorAll('li')

    for (let i = 0; i < nameList.length; i++) {
        if (nameList[i].textContent === nameInput.value) {
            nameList[i].remove()
        }
    }

    nameInput.value = ''
})

function createAndAppendLi(name) {
    let nameLi = document.createElement('li')
    nameLi.textContent = name
    savedNames.appendChild(nameLi)
}


// ESERCIZIO 2

if (!sessionStorage.getItem('secondi')) {
    sessionStorage.setItem('secondi', '0')
}

let secondi = parseInt(sessionStorage.getItem('secondi'));

document.querySelector('#timer').textContent = secondi

setInterval(movingTimerSession, 1000);

function movingTimerSession() {
    secondi += 1
    document.querySelector('#timer').textContent = secondi
    sessionStorage.setItem('secondi', secondi.toString())
}