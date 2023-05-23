// 11. Crie um algoritmo que armazene um número inteiro positivo, e gere
// um alerta com as seguintes mensagens:
// a. “Número é par!”, se o valor armazenado for par;
// b. “Número é impar!”, se o valor armazenado for ímpar;

let numero = Number(prompt("Digite um número positivo inteiro: "))

let restoDivisao = numero % 2

if (restoDivisao == 0){
    document.write("O número é par")
}else if(restoDivisao == 1){
    document.write("O número é impar")
}else{
    document.write("O número digitado não é positivo e inteiro")
}