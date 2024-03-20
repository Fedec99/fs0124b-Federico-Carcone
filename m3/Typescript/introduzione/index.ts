// Dichiarazione di variabili con tipi diversi
let variable: string = 'Federico'; // Variabile di tipo stringa
let variable2: number = 24; // Variabile di tipo numerico
let variable3: boolean = true; // Variabile di tipo booleano

// Dichiarazione di variabili senza assegnazione di valore
let x: string; // Dichiarazione di una variabile di tipo stringa senza assegnazione iniziale
let y: string = 'Testing'; // Dichiarazione di una variabile di tipo stringa con assegnazione iniziale
y = 'Epicode'; // Modifica del valore della variabile y

// Definizione di una funzione con due parametri di tipo number e un valore di ritorno di tipo number
const myFunction = function(n1: number, n2: number): number {
    return n1 + n2; // Ritorna la somma dei due parametri
}

// Esecuzione della funzione e stampa del risultato nella console
myFunction(2, 5); // Esegue la funzione con i parametri 2 e 5
console.log(myFunction(12, 3) + 232); // Esegue la funzione con i parametri 12 e 3, e stampa la somma più 232 nella console

// Dichiarazione di un array di stringhe e aggiunta di un elemento
const stringArray: string[] = ['federico', 'epicode']; // Array di stringhe con due valori iniziali
stringArray.push('rule'); // Aggiunge la stringa 'rule' all'array

// Definizione di una funzione che non ritorna nulla (void)
const nonReturn = function(): void {
    console.log('ciao'); // Stampa 'ciao' nella console
}

// Definizione di un tipo personalizzato che può essere o stringa o numero
type CustomType = string | number;
let mix: CustomType = 24; // Variabile mix inizializzata con un numero
mix = 'federico'; // Modifica del valore di mix con una stringa

// Definizione di un oggetto con diverse proprietà
const object = {
    firstName: 'federico',
    lastName: 'carcone',
    job: ['developer', 'student'],
    age: 24,
    personality: true
}

// Definizione di un'interfaccia che specifica la struttura degli oggetti HumanBeing
interface HumanBeing {
    firstName: string;
    lastName: string;
    job: string[];
    age: number;
    personality: boolean;
}
