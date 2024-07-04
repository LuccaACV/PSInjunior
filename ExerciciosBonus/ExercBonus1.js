/*
Faça um programa que leia 6 valores. 
Estes valores são somente negativos ou positivos (desconsidere os valores nulos). 
A seguir, mostre a quantidade de valores positivos digitados.
*/

var cont = 1
var contPos = 0

while(cont<=6){
    var tempNum = prompt("Entre com o "+cont+"°: ")
    var tempNum = parseFloat(tempNum)
    if(tempNum>0){
        cont++;
        contPos++;
    }
    if(tempNum<0){
        cont++;
    }
}

console.log("Essa foi a quantidade de numeros positivos: " + contPos)