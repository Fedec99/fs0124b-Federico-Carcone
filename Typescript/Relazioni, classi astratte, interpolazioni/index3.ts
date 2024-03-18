class Phone {
    numero: number; // Attributo per memorizzare il numero di telefono

    constructor(_numero: number){ // Costruttore della classe Phone
        this.numero = _numero; // Inizializzazione del numero di telefono
    }
}

class Utente {
    nome: string; // Attributo per memorizzare il nome dell'utente
    cognome: string; // Attributo per memorizzare il cognome dell'utente
    numeri: Phone[]; // Array di numeri di telefono associati all'utente

    constructor(_nome: string, _cognome: string, _numeri: any){ // Costruttore della classe Utente
        this.nome = _nome; // Inizializzazione del nome dell'utente
        this.cognome = _cognome; // Inizializzazione del cognome dell'utente
        this.numeri = _numeri; // Inizializzazione dell'array dei numeri di telefono
    }
}

let newUtente = new Utente('federico', 'carcone', [37649238479, 329846329, 38956932]); // Creazione di un nuovo utente
console.log(newUtente); // Stampa dell'oggetto utente

interface Student {
    studente: string; // Attributo per memorizzare le informazioni dello studente
    age: number; // Attributo per memorizzare l'età dello studente

    getStudent(): string; // Metodo per ottenere le informazioni dello studente
}

interface Corsi {
    tecnologia: string; // Attributo per memorizzare il nome del corso

    getCorso(): string; // Metodo per ottenere il nome del corso
}

class Alunno implements Student, Corsi { // Classe che implementa le interfacce Student e Corsi
    studente: string; // Attributo per memorizzare le informazioni dello studente
    age: number; // Attributo per memorizzare l'età dello studente
    tecnologia: string; // Attributo per memorizzare il nome del corso

    constructor(_studente: string, _age: number, _tecnologia: string){ // Costruttore della classe Alunno
        this.studente = _studente; // Inizializzazione delle informazioni dello studente
        this.age = _age; // Inizializzazione dell'età dello studente
        this.tecnologia = _tecnologia; // Inizializzazione del nome del corso
    }

    getStudent(): string { // Metodo per ottenere le informazioni dello studente
        return `${this.studente} di anni ${this.age}`; // Restituisce il nome completo dello studente con l'età
    }

    getCorso(): string { // Metodo per ottenere il nome del corso
        return `sta frequentando il corso di ${this.tecnologia}`; // Restituisce il nome del corso
    }

    completo(): string { // Metodo per ottenere tutte le informazioni dello studente e del corso frequentato
        return this.getStudent() + ' ' + this.getCorso(); // Restituisce le informazioni complete
    }
}

let nuovoAlunno = new Alunno('federico carcone', 25, 'typescript'); // Creazione di un nuovo studente
console.log(nuovoAlunno.completo()); // Stampa delle informazioni complete dello studente e del corso frequentato
