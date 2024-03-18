class student {
    nome: string; // Attributo per memorizzare il nome dello studente
    cognome: string; // Attributo per memorizzare il cognome dello studente

    constructor(_nome: string, _cognome: string){ // Costruttore della classe studente
        this.nome= _nome; // Inizializzazione del nome
        this.cognome= _cognome; // Inizializzazione del cognome
    }

    getStudent(): string { // Metodo per ottenere il nome completo dello studente
        return `${this.nome} ${this.cognome}`; // Restituisce il nome completo
    }

    private numeroRandom(): number { // Metodo privato per generare un numero casuale tra 0 e 10
        return Math.floor(Math.random() * 11); // Restituisce un numero intero casuale tra 0 e 10
    }

    somma(num1: number): number { // Metodo per calcolare la somma tra un numero passato e un numero casuale generato internamente
        return num1 + this.numeroRandom(); // Restituisce la somma tra il numero passato e un numero casuale
    }
}

class utente extends student { // Classe che estende la classe studente
    age: number; // Attributo per memorizzare l'età dell'utente

    constructor(_nome: string, _cognome: string, _age: number) { // Costruttore della classe utente che chiama il costruttore della classe studente
        super(_nome, _cognome); // Chiama il costruttore della classe studente
        this.age = _age // Inizializzazione dell'età dell'utente
    }

    getStudent(): string { // Metodo per ottenere il nome completo dell'utente con l'età
        return `${this.nome} ${this.cognome} di anni ${this.age}`; // Restituisce il nome completo dell'utente con l'età
    }
}

let newStudent = new student('federico', 'carcone'); // Creazione di un nuovo studente
console.log(newStudent.getStudent()); // Stampa il nome completo dello studente
console.log(newStudent.somma(15)); // Stampa la somma tra 15 e un numero casuale

let nuovoUtente = new utente('mario', 'rossi', 44) // Creazione di un nuovo utente
console.log(nuovoUtente.getStudent()); // Stampa il nome completo dell'utente con l'età
