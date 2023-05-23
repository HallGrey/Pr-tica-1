// 9. As maçãs desta estação custam R$0,30 se forem compradas
// menos do que uma dúzia, e R$0,25 se forem compradas pelo menos
// doze. Desenvolva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.

let totalCompra = Number(prompt("Quantas maçãs você quer comprar?: "))

if (totalCompra < 12){
    let valorMaca = 0.30
    valorTotal = totalCompra*valorMaca
    document.write(`O valor que você vai pagar é de R$${valorTotal.toFixed(2)}`)
}else{
    let valorMaca = 0.25
    valorTotal = totalCompra*valorMaca
    document.write(`O valor que você vai pagar é de R$${valorTotal.toFixed(2)}`)
}

