var matrizDeFrutas = ["Banana","Maçã","Mamão"];

matrizDeFrutas.push("Abacate");

console.log(matrizDeFrutas.toString());

var indexadorDoVetor = matrizDeFrutas.indexOf("Maçã");

matrizDeFrutas.splice(indexadorDoVetor, 1);

console.log(matrizDeFrutas.toString());