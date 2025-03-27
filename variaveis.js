var nomeDaVariavel = "Valor da Variável";

let nomeDaVariavelTemporaria = "Valor Tempoário da Variável"; //assim que encerrar o arquivo ela saira  da memória 

const nomeDaVariavelSomenteLeitura = "Valor Somente Leitura da Variável"; //

console.log("nomeDaVariavel:", nomeDaVariavel);

console.log("nomeDaVariavelTemporaria:",nomeDaVariavelTemporaria)

console.log ("nomeDaVariavelSomenteLeitura:",nomeDaVariavelSomenteLeitura);

var matriz = ["vetor1", "vetor2","vetor3","vetor4","vetor5"];

//console.log("matriz, vetor1:", matriz[0]);

for(let i = 0; i < matriz.length; i++) {
    console.log("matriz[" + i + "]:", matriz[i]);
}

class NomeDoObjeto {
    constructor(parametroUm, parametroDois) {
    this.parametroUm = parametroUm;
    this.parametroDois = parametroDois;
   }

   metodoMostrarParametros(parametroUm, parametroDois) {
   this.parametroUm = parametroUm;
   this.parametroDois = parametroDois;
   return this.parametroUm + " - " + this.parametroDois;
  }
}
const novoObjeto = new NomeDoObjeto();
console.log(novoObjeto.metodoMostrarParametros("um", "dois"));

class Skate { //declaração da class NomeDoObjeto, a qual se transformara em um objeto, quando declarada em uma variavel novoObjeto 
   constructor (tamanho, material, truck, roda, cor, lixa, rolamento, valores, desenho, parafuso, textura) {
   this.tamanho = tamanho;
   this.material = material; 
   this.truck = truck;
   this.roda = roda; 
   this.cor = cor;
   this.lixa = lixa;
   this.rolamento = rolamento;
   this.valores = valores;
   this.desenho = desenho;
   this.parafuso = parafuso;
   this.textura = textura
   }

   metodoSkate (tamanho, material, truck, roda, cor, lixa, rolamento, valores, desenho, parafuso, textura) { //declaração do método que vai mostrar os parametros, NÃO AS PROPRIEDADES 
       this.tamanho = tamanho;
       this.material = material; 
       this.truck = truck;
       this.roda = roda; 
       this.cor = cor;
       this.lixa = lixa;
       this.rolamento = rolamento;
       this.valores = valores;
       this.desenho = desenho;
       this.parafuso = parafuso;
       this.textura = textura
       return this.tamanho + " -  " +  //o return faz o método retornar o valor declarado após o return 
       this.material+
       " -  " + 
       this.truck +
       " -  " +  
       this.roda +
       " -  " + 
       this.cor +
       " -  " + 
       this.lixa +
       " -  " +  
       this.rolamento +
       " -  " + 
       this.valores +
       " -  " + 
       this.desenho +
       " -  " + 
       this.parafuso +
       " -  " + 
       this.textura;
 } 
}

const skate = new Skate();
console.log("Skate: " + skate.metodoSkate("tamanho", "material", "truck","roda", "cor", "lixa", "rolamento", "valores", "desenho", "parafuso", "textura"));

