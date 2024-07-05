
/*
Faça um algoritmo em que você recebe 3 notas de um aluno e caso a
média aritmética dessas notas for maior ou igual que 6 imprima
“Aprovado”, caso contrário “Reprovado”.
*/

var media = 0.0
for(let cont = 1; cont<=3; cont++){
    var temp = prompt("Insira o valor da "+ cont +"° prova: ")
    media = parseFloat(temp) + media
}

media=media/3
console.log(media)

if(media>=6){
    console.log("APROVADO")
}
else{
    console.log("REPROVADO")
}