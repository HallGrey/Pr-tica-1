// 10. Escreva um algoritmo que tenha como valores de entradas o nome
// e idade do usuário e imprima no terminal o nome, a idade e o ano
// de nascimento do usuário. Ex: “Nome: Pedro, Idade: 22 anos, nasceu
// em 2000”.
// OBS: Pegue o ano atual como base

let nome = (prompt("Qual o seu nome?: "))
let idade = Number(prompt("Qual a sua idade?: "))
let anoAtual = 2023

anoNascimento = anoAtual - idade

document.write(`Nome: ${nome}, Idade: ${idade}, Nasceu em: ${anoNascimento}`)
