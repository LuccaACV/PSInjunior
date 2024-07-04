/*
Escreva um algoritmo para ler uma temperatura em graus Fahrenheit,
calcular e escrever o valor correspondente em graus Celsius (baseado na
fórmula abaixo)
*/

var tempF = prompt("Entre com o valor em Fahrenheit: ")
var tempF = parseFloat(tempF)

var tempC = (tempF - 32)*5/9

console.log("O valor "+ tempF +"F° equivale a "+ tempC +"C°")
