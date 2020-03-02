var nome = "Uill";
var idade = 25;
var ocupado = true;
var filhos = ["joazinho", "mariazinha"];
console.log("Meu nome eh " + nome);
console.log("Tenho " + idade + " anos");
function somar(a, b) {
    return a + b;
}
function multiplica(a, b) {
    return a * b;
}
// da erro, mas só na hora de rodar o codigo
console.log(multiplica("3", "joao"));
// criando um enum
var EstadoCivil;
(function (EstadoCivil) {
    EstadoCivil["casado"] = "Casado";
    EstadoCivil["solteiro"] = "Solteiro";
    EstadoCivil["uniaoEstavel"] = "UniaoEstavel";
    EstadoCivil["divorciado"] = "Divorcido";
    EstadoCivil["viuvo"] = "Viuvo";
})(EstadoCivil || (EstadoCivil = {}));
var estCivil = EstadoCivil.solteiro;
//estCivil = EstadoCivil.casado;
//estCivil = EstadoCivil.solteiro;
console.log(estCivil);
//definicao de classe
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, idade) {
        this._nome = nome;
        this._idade = idade;
    }
    Object.defineProperty(Pessoa.prototype, "idade", {
        get: function () {
            return this._idade;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Pessoa.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        enumerable: true,
        configurable: true
    });
    return Pessoa;
}());
var shampoo = {
    nome: "Seda",
    categoria: 3,
    id: 4,
    addEstoque: function (n) { }
};
var ProdutosDeViagem = /** @class */ (function () {
    function ProdutosDeViagem() {
    }
    ProdutosDeViagem.prototype.addEstoque = function (n) {
        console.log("Adicionando " + n + " ao estoque");
    };
    return ProdutosDeViagem;
}());
var pv = new ProdutosDeViagem();
