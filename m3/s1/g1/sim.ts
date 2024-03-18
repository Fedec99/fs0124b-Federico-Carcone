interface Smartphone {
credito: number;
numeroChiamate: number;
}

class Client implements Smartphone {
name: string;
lastName: string;
credito: number;
numeroChiamate: number;
constructor(name: string, lastName: string) {
    this.name = name;
    this.lastName = lastName;
    this.credito = 0;
    this.numeroChiamate = 0;
}

ricarica(ammontare: number) {
    this.credito += ammontare;
}

chiamata(minuti: number) {
    const costoChiamata = 0.2 * minuti;
    if (this.credito < costoChiamata) {
    console.log("Credito insufficiente per effettuare la chiamata");
    } else {
    this.credito -= costoChiamata;
    this.numeroChiamate += minuti;
    }
}

chiama404() {
    return this.credito;
}

getNumeroChiamata() {
    return this.numeroChiamate;
}

azzeraChiamata() {
    this.numeroChiamate = 0;
}
}

let client = new Client("Federico", "Carcone");
client.ricarica(10);
client.chiamata(30);
console.log(client.chiama404());
console.log(client.getNumeroChiamata());
