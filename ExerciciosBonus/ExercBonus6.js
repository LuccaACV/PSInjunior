/*
Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    ● receitas: [ ]
    ● despesas: [ ]
Agora, crie uma função que irá calcular o total de receitas e despesas e
irá mostrar uma mensagem se a família está com saldo positivo ou negativo, seguido do valor do saldo.
*/

function retornoFaturamento(){
    var result = 0
    for(let tempValor of Faturamento.receitas){
        result += tempValor
    }
    for(let tempValor of Faturamento.despesas){
        result -= tempValor
    }
    return result
}

var Faturamento = {
    receitas: [],
    despesas: []
}

var numRec = prompt("Quantos valores gostaria de adicionar em receitas?")

numRec = parseInt(numRec)
for(let i = 0; i< numRec; i++){
    let tempRec = prompt("Adicione o "+(i+1)+"° valor na receita: ")
    Faturamento.receitas.push(parseFloat(tempRec))
}
var numDes = prompt("Quantos valores gostaria de adicionar em despesas?")

numDes = parseInt(numDes)
for(let i = 0; i< numDes; i++){
    let tempDes = prompt("Adicione o "+(i+1)+"° valor na despesa: ")
    Faturamento.despesas.push(parseFloat(tempDes))
}

var saldo = retornoFaturamento();

if(saldo>=0){
    console.log("A familia está com saldo positivo de "+saldo)
}else{
    console.log("A familia está com saldo negativo de "+saldo)
}
