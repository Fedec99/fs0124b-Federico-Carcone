/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

function trova(trova1, trova2) {
  let max;
  if (trova1 > trova2) {
      max = trova1;
  } else {
      max = trova2;
  }
  return max;
}

const trova1 = 10;
const trova2 = 20;
const risultato = trova(trova1, trova2);
console.log("Il numero più grande è:", risultato);


/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

function Equal(equ) {
  if (equ !== 5) {
      console.log("not equal");
  } else {
      console.log("equal");
  }
}
let equal1 = 10;
Equal(equal1);


/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

function divisibile(div) {
  if (div % 5 === 0) {
      console.log("divisibile per 5");
  }
}
let dividi = 5;
divisibile(dividi);


/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/


/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

function checkout(totalShoppingCart) {
  let costoSpedizione = 10;
  let totaleDaAddebitare;

  if (totalShoppingCart > 50) {
      totaleDaAddebitare = totalShoppingCart;
  } else {
      totaleDaAddebitare = totalShoppingCart + costoSpedizione;
  }

  return totaleDaAddebitare;
}


let totalShoppingCart = 60;
let totaleDaAddebitare = checkout(totalShoppingCart);
console.log("Totale da addebitare: euro " + totaleDaAddebitare);


/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

function calcola(ShoppingCart, isBlackFriday) {
  let costoSpedizione = 10;
  let scontoBlackFriday = isBlackFriday ? ShoppingCart * 0.2 : 0;
  let daAddebitare;

  if (ShoppingCart > 50) {
      costoSpedizione = 0;
  }

  DaAddebitare = ShoppingCart - scontoBlackFriday + costoSpedizione;

  return daAddebitare;
}

let ShoppingCart = 100;
let isBlackFriday = true; 
let daAddebitare = calcola(ShoppingCart, isBlackFriday);
console.log("Totale da addebitare: euro " + daAddebitare);


/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

let num1 = 15;
let num2 = 7;
let num3 = 2
if (num1 >= num2 && num1 >= num3) {
    if (num2 >= num3) {
        console.log(num1, num2, num3);
    } else {
        console.log(num1, num3, num2);
    }
} else if (num2 >= num1 && num2 >= num3) {
    if (num1 >= num3) {
        console.log(num2, num1, num3);
    } else {
        console.log(num2, num3, num1);
    }
} else {
    if (num1 >= num2) {
        console.log(num3, num1, num2);
    } else {
        console.log(num3, num2, num1);
    }
}


/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

function verifica(valore) {
  if (typeof valore === 'number' && !isNaN(valore)) {
      console.log(valore + " è un numero.");
  } else {
      console.log(valore + " non è un numero.");
  }
}


verifica(42);
verifica('ciao')
verifica(true);


/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

function controlla(numero) {
  if (numero % 2 === 0) {
      console.log(numero + " è un numero pari.");
  } else {
      console.log(numero + " è un numero dispari.");
  }
}

controlla(4);
controlla(7);
controlla(0);

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

let val = 7;

if (val < 5) {
    console.log("Meno di 5");
} else if (val < 10) {
    console.log("Meno di 10");
} else {
    console.log("Uguale a 10 o maggiore");
}


/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}
me.city = 'Toronto';

console.log(me);


/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName;

console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

me.skills.pop();

console.log(me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

let numeri = [];

for (let i = 1; i <= 10; i++) {
    numeri.push(i);
}
console.log(numeri);


/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

let numer = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numer[numer.length - 1] = 100;

console.log(numer);

