var Phone = /** @class */ (function () {
    function Phone(_numero) {
        this.numero = _numero;
    }
    return Phone;
}());
var Utente = /** @class */ (function () {
    function Utente(_nome, _cognome, _numeri) {
        this.nome = _nome;
        this.cognome = _cognome;
        this.numeri = _numeri;
    }
    return Utente;
}());
var newUtente = new Utente('federico', 'carcone', [37649238479, 329846329, 38956932]);
console.log(newUtente);
var Alunno = /** @class */ (function () {
    function Alunno(_studente, _age, _tecnologia) {
        this.studente = _studente;
        this.age = _age;
        this.tecnologia = _tecnologia;
    }
    Alunno.prototype.getStudent = function () {
        return "".concat(this.studente, " di anni ").concat(this.age);
    };
    Alunno.prototype.getCorso = function () {
        return "sta frequentando il cordo di ".concat(this.tecnologia);
    };
    Alunno.prototype.completo = function () {
        return this.getStudent() + this.getCorso();
    };
    return Alunno;
}());
var nuovoAlunno = new Alunno('federico carcone', 25, 'typescript');
console.log(nuovoAlunno.completo());
