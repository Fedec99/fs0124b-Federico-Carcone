/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1 ---
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* -Stringa: È come se avessi una collana di perle, dove ogni perla è una lettera o una parola. Ad esempio, "ciao" è una stringa perché è una serie di lettere messe insieme.

-Numero: Possono essere grandi o piccoli, positivi o negativi, come 5, -3, 2.718, o anche 1000000!

-Booleano: Questo è come una luce che può essere accesa o spenta. In JavaScript, può essere vero (true) o falso (false). Ad esempio, se ti chiedo se il sole è caldo, la risposta potrebbe essere vero (true) se è una giornata di sole o falso (false) se è una giornata di pioggia.

-Array:Un array in JavaScript è come la valigia magica in harry potter. Puoi mettere al suo interno una serie di cose come numeri, stringhe o addirittura altri array! Ad esempio, potresti avere un array di colori come ["rosso", "verde", "blu"].

-Oggetto: Questo è come una scatola piena di caramelle diverse. In JavaScript, un oggetto è una raccolta di coppie chiave-valore, dove ogni chiave è come l'etichetta su una scatola e ogni valore è il giocattolo dentro la scatola. Ad esempio, potresti avere un oggetto che rappresenta una persona con le chiavi "nome", "età" e "sesso", e i valori corrispondenti.

-Null e Undefined:"Null" indica esplicitamente che non c'è niente, mentre "undefined" è come dire "non so cosa mettere qui".*/





/* ESERCIZIO 2 ---
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let mioNome = 'Federico'
console.log (mioNome)





/* ESERCIZIO 3 ---
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let num1 = 12;
let num2 = 20;
let num3 = num1 + num2;
console.log (num3)





/* ESERCIZIO 4 ---
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let variabile = 'x ';
let num = 11
let insieme = variabile + num;
console.log (insieme)





/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/*{
  const mioNome = 'Federico';
  console.log(mioNome);
  
  mioNome = 'Canale';
}*/




/* ESERCIZIO 6 ---
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

variabile = 12
console.log (variabile - 4)




/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

var name1 = "john";
var name2 = "John";

var diversi = name1 !== name2;
console.log( diversi);

var uguaglianza = name1.toLowerCase() === name2.toLowerCase();
console.log( uguaglianza);
