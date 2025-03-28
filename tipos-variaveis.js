//Verificando tipos de variaveis

let valor = "Hello";

console.log(typeof valor); //string

valor = 10;
console.log(typeof valor); //number

valor = parseFloat(10.12);
console.log(typeof valor); //float number

valor = valor != 0; //true
//console.log(valor != 0  ? "ok" : "nok"); //ok 
console.log(typeof valor); //boolean

valor = BigInt("97236545645646575856337624602740238462029347");
console.log(typeof valor); //bigint

let varUnderFined
console.log(typeof varUnderFined);

class Objeto {
    constructor(paramOne, paramTwo) {
        this.paramOne = paramOne;
        this.paramTwo = paramTwo;
        console.log(typeof this.paramTwo);
    }
}

const objeto = new Objeto9("Só parametro 1");
console.log(typeof objeto);

valor = document.getElementById("elementoInesxisente");
console.log(typeof valor);

valor = ["vetor1","vetor2"];
console.log(typeof valor);  //array object

const date = new Date("2025-03-25");
console.log(typeof date ); //date object

console.log(date); //mostrar tudo sobre a variavel/objeto