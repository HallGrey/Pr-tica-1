// 5.Crie cinco variáveis. Na primeira armazene o nome de um aluno. Na
// segunda, terceira e quarta coloque 3 notas (valores de 0 à 10).
// Calcule a média das notas e armazene na quinta variável criada.
// Apresente no documento html a seguinte informação:
// "O aluno _____ ficou com média _,_"

let nomeAluno = "Murilo"
const notaUm = 9.5
const notaDois = 7.0
const notaTres = 8.5
const media = Number((notaUm + notaDois + notaTres)/3)

document.write(`O aluno ${nomeAluno} ficou com média ${media.toFixed(1)}`)