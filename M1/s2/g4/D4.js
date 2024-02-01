/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

function area(l1, l2) {
    return l1 * l2;
}

let lunghezza1 = 5;
let lunghezza2 = 3;
console.log("L'area del rettangolo è:", area(lunghezza1, lunghezza2));


/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazySum(num1, num2) {
    if (num1 === num2) {
        return (num1 + num2) * 3;
    } else {
        return num1 + num2;
    }
}

console.log(crazySum(2, 3));
console.log(crazySum(5, 5));


/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

function crazyDiff(numero) {

    let differenza = Math.abs(numero - 19);
    
    if (numero > 19) {
        return differenza * 3;
    } else {
        return differenza;
    }
}

console.log(crazyDiff(10));
console.log(crazyDiff(25)); 


/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary(n) {

    return (n >= 20 && n <= 100) || n === 400;
}

console.log(boundary(50));
console.log(boundary(200)); 
console.log(boundary(400));


/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

function epify(stringa) {

    if (stringa.startsWith("EPICODE")) {
        return stringa;
    } else {
        return "EPICODE " + stringa;
    }
}

console.log(epify("Web"));
console.log(epify("EPICODE Web Developer"));


/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

function check3and7(numero) {

    return numero > 0 && (numero % 3 === 0 || numero % 7 === 0);
}

console.log(check3and7(9));
console.log(check3and7(14));
console.log(check3and7(10));


/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

function reverseString(stringa) {

    return stringa.split('').reverse().join('');
}

console.log(reverseString("EPICODE"));


/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

function upperFirst(stringa) {

    return stringa.replace(/\b\w/g, function(char) {
        return char.toUpperCase();
    });
}

console.log(upperFirst("ciao epicode"));
console.log(upperFirst("questa è una stringa di prova"));


/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

function cutString(stringa) {

    return stringa.slice(1, -1);
}

console.log(cutString("hello"));
console.log(cutString("EPICODE"));
console.log(cutString("abcde"));


/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

function giveMeRandom(n) {

    let randomNumbers = [];
    for (let i = 0; i < n; i++) {
        randomNumbers.push(Math.floor(Math.random() * 11));
    }
    return randomNumbers;
}

console.log(giveMeRandom(5)); 
console.log(giveMeRandom(3));
