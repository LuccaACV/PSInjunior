/*
Escolha 5 valores inteiros e ordene-os em ordem crescente. 
No final, mostre os valores em ordem crescente, 
uma linha em branco e em seguida, os valores na sequência
*/

var vetorSeq = []
var vetorOrd = []

for(var i = 1; i<=5; i++){
    var temp = prompt("Adicione o "+i+"° valor: ")
    vetorSeq.push(temp)
    vetorOrd.push(temp)
}

vetorOrd.sort()

console.log("Valores em Ordem Crescente: " + vetorOrd)
console.log("Valores em Ordem de Entrada: " + vetorSeq)
