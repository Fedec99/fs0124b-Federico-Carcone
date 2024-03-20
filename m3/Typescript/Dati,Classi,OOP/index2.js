var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var student = /** @class */ (function () {
    function student(_nome, _cognome) {
        this.nome = _nome;
        this.cognome = _cognome;
    }
    student.prototype.getStudent = function () {
        return "".concat(this.nome, " ").concat(this.cognome);
    };
    student.prototype.numeroRandom = function () {
        return Math.floor(Math.random() * 11);
    };
    student.prototype.somma = function (num1) {
        return num1 + this.numeroRandom();
    };
    return student;
}());
var utente = /** @class */ (function (_super) {
    __extends(utente, _super);
    function utente(_nome, _cognome, _age) {
        var _this = _super.call(this, _nome, _cognome) || this;
        _this.age = _age;
        return _this;
    }
    utente.prototype.getStudent = function () {
        return "".concat(this.nome, " ").concat(this.cognome, " di anni ").concat(this.age);
    };
    return utente;
}(student));
var newStudent = new student('federico', 'carcone');
console.log(newStudent.getStudent());
console.log(newStudent.somma(15));
var nuovoUtente = new utente('mario', 'rossi', 44);
console.log(nuovoUtente.getStudent());
