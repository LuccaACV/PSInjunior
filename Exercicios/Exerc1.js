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

var matriz1 = [[2,-1],[2,0]]
var col1 = matriz1.length +1
var linha1 = matriz1[0].length +1
var matriz2 = [[2,3],[-2,1]]
var col2 = matriz2.length +1
var linha2 = matriz2[0].length +1
var matrizC = []

/*
    2   -1  ||   2  3        (2*2+-1*-2)(2*3+-1*1)  6  5
    2    0  ||  -2  1        (2*2+0*-2)(2*3+0*1)    4  6
*/
console.log("coluna "+col1+"linha"+linha1)
console.log("coluna "+col2+"linha"+linha2)
/*
if(matrizA[0].length==matrizB.length){
    matrizC[0][0]=(matrizA[0][0]*matrizB[0][0])+(matrizA[0][1]*matrizB[1][0])
    matrizC[0][1]=(matrizA[0][0]*matrizB[0][1])+(matrizA[0][1]*matrizB[1][1])
    matrizC[1][0]=(matrizA[1][0]*matrizB[0][0])+(matrizA[1][1]*matrizB[1][0])
    matrizC[1][1]=(matrizA[1][0]*matrizB[0][1])+(matrizA[1][1]*matrizB[1][1])
}*/