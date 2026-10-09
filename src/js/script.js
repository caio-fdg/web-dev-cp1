// Exercicio 1 --------------------------------------------------------------------------
console.log("***************************************************\n")
console.log("Exercicio 1: \n")

console.log("\nOperador != :");
console.log("5 != 3: ", 5 != 3);
console.log("\nOperador === :");
console.log("5 === '5': ", 5 === '5');
console.log("\nOperador >= :");
console.log("5 >= 3: ", 5 >= 3);

// Exercicio 2 --------------------------------------------------------------------------
console.log("\n***************************************************")
console.log("Exercicio 2: \n")

const peso = prompt("Digite seu peso: ")
const altura = prompt("digite sua altura: ")

console.log("\nPeso: ", peso, "kg");
console.log("Altura: ", altura, "m");
console.log("\nIMC = peso / (altura * altura)");
console.log("IMC = ", peso, "/", altura, "*", altura);

const imc = peso / (altura * altura);

console.log("\nSeu IMC é: ", imc.toFixed(2));

if (imc < 18.5) {
  console.log("Você está abaixo do peso.");

} else if (imc >= 18.5 && imc <= 24.9) {
  console.log("Você está no peso ideal.");

} else {
  console.log("Você está acima do peso.");
}
