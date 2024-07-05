/*
Crie um algoritmo que transforma as notas do sistema numérico para
sistema de notas em caracteres Tipo A, B e C
● de 90 para cima - A
● entre 80 e 90 -B
● entre 70 e 79 - C
● entre 60 e 69 - D
● menor que 60 - F
*/

var valorSN = prompt("Insira a nota no sistema numérico padrão: ")
valorSN = parseFloat(valorSN)

if(valorSN>90){
    console.log("A nota "+valorSN+" é correspondente a nota A")
}else{
    if(valorSN>=80){
        console.log("A nota "+valorSN+" é correspondente a nota B")
    }else{
        if(valorSN>=70){
            console.log("A nota "+valorSN+" é correspondente a nota C")
        }else{
            if(valorSN>=60){
                console.log("A nota "+valorSN+" é correspondente a nota D")
            }else{
                console.log("A nota "+valorSN+" é correspondente a nota F")
            }
        }
    }
}