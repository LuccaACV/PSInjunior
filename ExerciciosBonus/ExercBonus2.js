/*
Implemente uma função recursiva que, 
dados dois números inteiros x e n,
calcula o valor de xn.
*/

function multiRecursiva(x, n){

    if(x<0||n<0){
        if(x<0 && n<0){
            return multiRecursiva(-1*x, -1*n)
        } else {
            if(x<0){
                return -1*multiRecursiva(-1*x, n)
            }
            if(n<0){
                return -1*multiRecursiva(x, -1*n)
            }
        }
    }

    if(x<n){
        let temp = n
        n = x
        x = temp
    }

    if(n>0){
        x = x + multiRecursiva(x, --n)
        return x
    }

    if(n==0){
        return 0
    }
}

var num1 = prompt("Entre com o primeiro valor: ")
num1 = parseInt(num1)

var num2 = prompt("Entre com o segundo valor: ")
num2 = parseInt(num2)

var result = multiRecursiva(num1, num2)

console.log("O resultado da multiplicação de "+ num1 +" por "+ num2 +" = "+ result)
