/*
Implemente um algoritmo que pegue duas matrizes (array de arrays) e
realize sua multiplicação. Lembrando que para realizar a multiplicação
dessas matrizes o número de colunas da primeira matriz tem que ser
igual ao número de linhas da segunda matriz. (2x2)

a. Caso teste 1 : [ [ [2],[-1] ], [ [2],[0] ] ] e [ [2,3],[-2,1] ] 
multiplicadas dão [ [6,5], [4,6] ]
    Seguencia de entrada:
    2 2 2 -1 2 0    2 2 2 3 -2 1
b. Caso teste 2 : [ [4,0], [-1,-1] ] e [ [-1,3], [2,7] ] 
multiplicadas dão [ [-4,12], [-1,-10]] 
    Seguencia de entrada:
    2 2 4 0 -1 -1   2 2 -1 3 2 7
*/

function criandoMatriz(linha,coluna){
    let array = []
    for(let l = 0; l<linha;l++){
        array.push([]);
        for(let c = 0; c<coluna;c++){
            let num = prompt("Adicione um valor na linha "+(l+1)+" da "+(c+1)+" coluna:")
            array[l].push(num)
        }
    }
    return array
}

var linhaA = prompt("Qual a quantidade de linhas da 1° Matriz?")
var colunaA = prompt("Qual a quantidade de colunas da 1° Matriz?")
var linhaA = parseInt(linhaA)
var colunaA = parseInt(colunaA)

var linhaB = prompt("Qual a quantidade de linhas da 2° Matriz?")
var colunaB = prompt("Qual a quantidade de colunas da 2° Matriz?")
var linhaB = parseInt(linhaB)
var colunaB = parseInt(colunaB)

if(colunaA==linhaB){
    var matrizA = criandoMatriz(linhaA,colunaA)
    var matrizB = criandoMatriz(linhaB,colunaB)
    var matrizC = [] 
    for(let i = 0; i<linhaA;i++){
        matrizC.push(Array(colunaB))
    }
    for(let i = 0; i<linhaA;i++){
        for(let j = 0; j<colunaB;j++){
            var temp = 0
            for(let k = 0; k<colunaA;k++){
                temp += (matrizA[i][k])*(matrizB[k][j])
                console.log(temp)
            }
            matrizC[i][j] = temp
        }
    }

    for(let i = 0; i<matrizC.length; i++){
        console.log(matrizC[i])
    }
}else{
    console.log("O numero de colunas da 1° Matriz é diferente do numero de linhas da 2° Matriz!!!")
}