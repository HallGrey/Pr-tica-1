// 7. Desenvolva um algoritmo para ler o número total de eleitores de um
// município, o número de votos brancos, nulos e válidos. Calcular e
// escrever o percentual que cada um representa em relação ao total
// de eleitores.

let totalVotos = Number(prompt("Qual o total de eleitores?"))
let votosBrancos = Number(prompt("Qual o total de Votos Brancos?"))
let votosNulos = Number(prompt("Qual o total de Votos Nulos?"))
let votosVálidos = Number(prompt("Qual o total de Votos Válidos?"))

porcentagemBrancos = (totalVotos*votosBrancos)/100
porcentagemNulos = (totalVotos*votosNulos)/100
porcentagemValidos = (totalVotos*votosVálidos)/100

document.write(`A porcentagem da votação foi de ${porcentagemBrancos.toFixed(2)}% de votos brancos<br>`)
document.write(`A porcentagem da votação foi de ${porcentagemNulos.toFixed(2)}% de votos nulos<br>`)
document.write(`A porcentagem da votação foi de ${porcentagemValidos.toFixed(2)}% de votos válidos<br>`)
