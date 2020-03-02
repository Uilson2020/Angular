let nome: string = "Uill";
let idade: number = 25;
let ocupado: boolean = true;
let filhos: String[] = ["joazinho", "mariazinha"];
console.log(`Meu nome eh ${nome}`);
console.log(`Tenho ${idade} anos`);

function somar(a: number, b: number): number{
    return a + b;
}

function multiplica(a, b){
    return a * b;
}
// da erro, mas só na hora de rodar o codigo
console.log(multiplica("3", "joao"));

// criando um enum
enum EstadoCivil {
    casado="Casado",
    solteiro="Solteiro",
    uniaoEstavel="UniaoEstavel",
    divorciado = "Divorcido",
    viuvo ="Viuvo"
}

let estCivil: EstadoCivil = EstadoCivil.solteiro;
//estCivil = EstadoCivil.casado;
//estCivil = EstadoCivil.solteiro;
console.log(estCivil)

//definicao de classe
class Pessoa {
    private _nome: string;
    private _idade: number;

    public constructor(nome:string, idade:number){
        this._nome = nome;
        this._idade = idade;
    }
    
    public get idade(): number { 
        return this._idade;
    }

    public get nome(): string {
        return this._nome;
    }

}

interface Produto {
    nome:string;
    categoria:number;
    id: number;
    addEstoque:(n:number) => void;
}
let shampoo: Produto = {
    nome:"Seda",
    categoria: 3,
    id: 4,
    addEstoque:(n:number) => {}
}

class ProdutosDeViagem implements Produto{
    nome:string;
    categoria: number;
    id: 5;
    addEstoque(n: number){
        console.log(`Adicionando ${n} ao estoque`);
    }
}
let pv = new ProdutosDeViagem();