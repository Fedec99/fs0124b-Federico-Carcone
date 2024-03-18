var Client = /** @class */ (function () {
    function Client(name, lastName) {
        this.name = name;
        this.lastName = lastName;
        this.credito = 0;
        this.numeroChiamate = 0;
    }
    Client.prototype.ricarica = function (ammontare) {
        this.credito += ammontare;
    };
    Client.prototype.chiamata = function (minuti) {
        var costoChiamata = 0.2 * minuti;
        if (this.credito < costoChiamata) {
            console.log("Credito insufficiente per effettuare la chiamata");
        }
        else {
            this.credito -= costoChiamata;
            this.numeroChiamate += minuti;
        }
    };
    Client.prototype.chiama404 = function () {
        return this.credito;
    };
    Client.prototype.getNumeroChiamata = function () {
        return this.numeroChiamate;
    };
    Client.prototype.azzeraChiamata = function () {
        this.numeroChiamate = 0;
    };
    return Client;
}());
var client = new Client("Federico", "Carcone");
client.ricarica(10);
client.chiamata(30);
console.log(client.chiama404());
console.log(client.getNumeroChiamata());
