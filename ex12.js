// 12. Escreva um algoritmo que armazene o ano atual e o ano de
// nascimento de uma pessoa. Escrever uma mensagem no console
// que diga se ela poderá ou não votar este ano (não é necessário
// considerar o mês em que a pessoa nasceu).

let anoAtual = Number(prompt("Digite o ano atual: "))
let anoNascimento = Number(prompt("Digite o ano em que você nasceu: "))

let idade = anoAtual - anoNascimento

if (idade >= 16){
    document.write("Você já é apto para votar neste ano")
}else{
    document.write("Você ainda não é apto para votar neste ano") 
}