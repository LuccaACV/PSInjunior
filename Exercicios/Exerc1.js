/*
Implemente um algoritmo que pegue duas matrizes (array de arrays) e
realize sua multiplicação. Lembrando que para realizar a multiplicação
dessas matrizes o número de colunas da primeira matriz tem que ser
igual ao número de linhas da segunda matriz. (2x2)

a. Caso teste 1 : [ [ [2],[-1] ], [ [2],[0] ] ] e [ [2,3],[-2,1] ] 
multiplicadas dão [ [6,5], [4,6] ]

b. Caso teste 2 : [ [4,0], [-1,-1] ] e [ [-1,3], [2,7] ] 
multiplicadas dão [ [-4,12], [-1,-10]] 
*/

var matrizA = [ [4,0], [-1,-1] ]
var linhaA = matrizA.length
var colunaA = matrizA[0].length

var matrizB = [ [-1,3], [2,7] ]
var linhaB = matrizB.length
var colunaB = matrizB[0].length 

var matrizC = [] //qtdLinha da primeira com a qtdLinha da segunda

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