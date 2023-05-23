// 3. Crie três variáveis, na primeira variável coloque o total de uma
// compra, por exemplo 149.90. Na segunda variável coloque a
// quantidade de parcelas, por exemplo 2. Na terceira variável coloque
// o valor da parcela. Apresente no documento html as seguintes
// informações:
// "O valor total da compra foi R$_,_"
// "Forma de pagamento: _x de R$_,_"

const compra = 149.90
const parcela = 10
const valorParcela = 14.99

document.write(`O valor total da compra foi de R$ ${compra}<br>`)
document.write(`Forma de pagamento: ${parcela} de R$ ${valorParcela}`)