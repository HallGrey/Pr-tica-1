// 8. Desenvolva um algoritmo para ler dois valores e imprimir uma das
// três mensagens a seguir:
// a. ‘Números iguais’, caso os números sejam iguais;
// b. ‘Primeiro é maior’, caso o primeiro seja maior que o segundo;
// c. ‘Segundo maior’, caso o segundo seja maior que o primeiro.


let valor1 = Number(prompt("Insira o primeiro número: "))
let valor2 = Number(prompt("Insira o segundo número: "))

if (valor1 == valor2){
    document.write("Números iguais")
}else if (valor1 > valor2){
    document.write("Primeiro é maior")
}else{
    document.write("Segundo é maior")
}
