/*
Teste 5 números inteiros aleatórios. Os testes:
● Caso o valor seja divisível por 3, imprima no console “fizz”.
● Caso o valor seja divisível por 5 imprima “buzz”.
● Caso o valor seja divisível por 3 e 5, ao mesmo tempo, imprima “fizzbuzz”.
● Caso contrário imprima nada.
*/

for(var cont=1; cont<=5; cont++){
    var tempNum = prompt("Entre com o "+cont+"°: ")
    var tempNum = parseInt(tempNum)

    if((tempNum%3==0)&&(tempNum%5==0)){
        console.log("fizzbuzz")
    }
    else{
        if(tempNum%3==0){
            console.log("fizz")
        }
        if(tempNum%5==0){
            console.log("buzz")
        }
    }
}