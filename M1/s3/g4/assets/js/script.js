const tabellone = document.getElementById('tabellone');
const tabellineContainer = document.getElementById('tabelline');
const estraiButton = document.getElementById('estrai');
const numeroTabellineInput = document.getElementById('numeroTabelline');
const generaTabellineButton = document.getElementById('generaTabelline');
const tabellinaGiocatore = document.getElementById('tabellina-giocatore');
const resetButton = document.getElementById('reset');

let numeriEstratti = [];

function generaNumeroCasuale() {
    return Math.floor(Math.random() * 76) + 1;
}

function numeroEstratto(numero) {
    return numeriEstratti.includes(numero);
  }
  
function generaTabellone() {
    tabellone.innerHTML = '';
    for (let i = 1; i <= 76; i++) {
        const cella = document.createElement('div');
        cella.classList.add('cella');
        cella.textContent = i;
        tabellone.appendChild(cella);
    }
}

function creaTabellina() {
    const tabellina = document.createElement('table');
    for (let i = 0; i < 4; i++) {
      const row = document.createElement('tr');
      for (let j = 0; j < 6; j++) {
        const cell = document.createElement('td');
        const numeroCasuale = generaNumeroCasuale();
        cell.textContent = numeroCasuale;
        row.appendChild(cell);
      }
      tabellina.appendChild(row);
    }
    tabellineContainer.appendChild(tabellina);
  }

function generaTabellinaGiocatore() {
    tabellinaGiocatore.innerHTML = '';
    for (let i = 0; i < 24; i++) {
        const numeroCasuale = generaNumeroCasuale();
        const cella = document.createElement('div');
        cella.classList.add('cella');
        cella.textContent = numeroCasuale;
        tabellinaGiocatore.appendChild(cella);
    }
}

function evidenziaCellaEstratta(numero) {
    const celle = document.querySelectorAll('.cella');
    celle.forEach(cella => {
        if (cella.textContent === numero.toString()) {
            cella.classList.add('estratta');
        }
    });
}

function estraiNumero() {
    if (numeriEstratti.length === 76) {
        alert('Tutti i numeri sono stati estratti!');
        return;
    }
    let numeroCasuale;
    do {
        numeroCasuale = generaNumeroCasuale();
    } while (numeriEstratti.includes(numeroCasuale));
    
    numeriEstratti.push(numeroCasuale);
    evidenziaCellaEstratta(numeroCasuale);
}

function generaTabelline() {
    const numeroTabelline = parseInt(numeroTabellineInput.value);
    tabellineContainer.innerHTML = '';
    for (let i = 0; i < numeroTabelline; i++) {
        const tabellina = document.createElement('div');
        tabellina.classList.add('tabellina');
        for (let j = 0; j < 24; j++) {
            const numeroCasuale = generaNumeroCasuale();
            const cella = document.createElement('div');
            cella.classList.add('cella');
            cella.textContent = numeroCasuale;
            tabellina.appendChild(cella);
        }
        tabellineContainer.appendChild(tabellina);
        if (i !== numeroTabelline - 1) {
            const spazioDivisorio = document.createElement('div');
            spazioDivisorio.style.marginTop = '20px';
            tabellineContainer.appendChild(spazioDivisorio);
        }
    }
}

resetButton.addEventListener('click', function() {
    numeriEstratti = [];
    const celle = document.querySelectorAll('.cella');
    celle.forEach(cella => {
        cella.classList.remove('estratta');
    });
});

estraiButton.addEventListener('click', estraiNumero);
generaTabellineButton.addEventListener('click', generaTabelline);

generaTabellone();
generaTabellinaGiocatore();
