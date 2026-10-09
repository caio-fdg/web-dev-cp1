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

// Exercicio 3 --------------------------------------------------------------------------
console.log("\n***************************************************")
console.log("Exercicio 3: \n")

for (let i = 1; i <= 10; i++) {
  console.log("O valor da contagem é: ", i);
}

// Exercicio 4 --------------------------------------------------------------------------
console.log("\n***************************************************")
console.log("Exercicio 4: \n")

const herois = ["Thor", "Hulk", "Capitão América", "Arqueiro", "Viúva Negra"];

for (let i = 0; i < herois.length; i++) {
  console.log("Herói: ", herois[i]);
}

// Exercicio 5 --------------------------------------------------------------------------
console.log("\n***************************************************")
console.log("Exercicio 5: \n")

const temPermissao = prompt("tem permissão? (s / n").toLowerCase();
const mensagem = temPermissao === "s" ? "Você tem permissão." : "Você não tem permissão.";
console.log(mensagem);

// Exercicio 6 --------------------------------------------------------------------------
console.log("\n***************************************************")
console.log("Exercicio 6: \n")

const usuarioCadastrado = "admin";
const senhaCadastrada = "1234";

const usuario = prompt("usuário:")
const senha = prompt("senha: ")

if (usuario === usuarioCadastrado && senha === senhaCadastrada) {
  console.log("Login realizado com sucesso!");
} else {
  console.log("Falha!!! \nUsuário ou senha incorretos.");
}

// Exercicio 7 --------------------------------------------------------------------------
console.log("\n***************************************************")
console.log("Exercicio 7: \n")

const notas = [];
for (let i = 1; i <= 7; i++) {
  const nota = parseFloat(prompt(`Digite a ${i} nota: `));
  notas.push(nota);
}

let soma = 0;
for (let i = 0; i < notas.length; i++) {
  soma += notas[i];
}
const media = soma / notas.length;

console.log("Notas: ", notas);
console.log("Média: ", media.toFixed(2));

if (media >= 6) {
  console.log("Aluno aprovado!");
} else {
  console.log("Aluno reprovado!");
}

// Exercicio 8 --------------------------------------------------------------------------
console.log("\n***************************************************")
console.log("Exercicio 8: \n")

const nome = prompt("Qual seu nome?");
console.log(`Olá, ${nome}!`);

// Exercicio 9 --------------------------------------------------------------------------
console.log("\n***************************************************")
console.log("Exercicio 9: \n")

let senha1 = prompt("Digite a senha atual: ")
let novaSenha = prompt("Digite a nova senha: ")

if (novaSenha !== senha1) {
  console.log("Senha alterada com sucesso!");
  senha = novaSenha;
} else {
  console.log("A nova senha deve ser diferente da senha atual.");
}

// Exercicio 10 --------------------------------------------------------------------------
console.log("\n***************************************************")
console.log("Exercicio 10: \n")

const valorProduto = parseFloat(prompt("Digite o valor do produto: "))
const valorDesconto = parseFloat(prompt("Digite a porcentagem de desconto: (%)"));

const valorFinal = valorProduto - (valorProduto * (valorDesconto / 100));

console.log("Valor do Produto: R$", valorProduto.toFixed(2));
console.log(`Desconto de ${valorDesconto}%: R$ ${(valorProduto * (valorDesconto / 100)).toFixed(2)}`);
console.log("Valor Final: R$", valorFinal.toFixed(2));
