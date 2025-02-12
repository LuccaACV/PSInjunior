/*
Vocês receberão um arquivo com um array de objetos representando
deuses do jogo Smite. Usando os métodos aprendidos em aula, faça os
seguintes exercícios:

● Q1. Imprima o nome e a quantidade de features de todos os deuses usando
uma única linha de código.
● Q2. Imprima todos os deuses que possuem o papel de "Mid"
● Q3. Organize a lista pelo panteão do deus.
● Q4. Faça um código que retorne um novo array com o nome de cada deus e
entre parênteses, a sua classe.

Por exemplo, o array deverá ficar assim: ["Achilles (Warrior)", "Agni (Mage)", ...
*/

//Importando o objeto gods para o Exercicio 4 
import { exportaDeuses } from './Exercicio4/arquivo_exercicio_4.js';
const deuses = exportaDeuses()

var dec = prompt("Qual questão quer visualizar? 1,2,3 ou 4 ?") 
dec = parseInt(dec)

switch (dec) {

    case 1:
        for(let deus of deuses){
            console.log(deus.name+": "+deus.features.length)
        }
        break;

    case 2:
        let num = 0
        for(let Deus of deuses){
            for(let cont in Deus.roles){
                if(Deus.roles[cont]=="Mid"){
                    let json = JSON.stringify(Deus)
                    console.log(num+" "+json)
                    num++
                }
            }
        }
        break;

    case 3:
            var arrayPanteao = []
            for(let Deus of deuses){
                let cont = 0;
                for(let CompString of arrayPanteao){
                    if(Deus.pantheon==CompString){
                        cont++;
                    }
                }
                if(cont==0){
                    arrayPanteao.push(Deus.pantheon)
                }
            }
            let numTemp = 0
            arrayPanteao.sort()
            for(let compPanteao of arrayPanteao){
                for(let Deus of deuses){
                    if(Deus.pantheon==compPanteao){
                        let json = JSON.stringify(Deus)
                        console.log(numTemp+" "+json)
                        numTemp++
                    }
                }
            }
        break;

    case 4:
        var arrayNomeFunc = []
        for(let Deus of deuses){
            let stringNome = Deus.name+" ("+Deus.class+")"
            arrayNomeFunc.push(stringNome)
        }
        for(let nomeDeus of arrayNomeFunc){
            console.log(nomeDeus)
        }
        break;

    default:
        alert("Valor invalido, escolha 1,2,3 ou 4!!")
        break;
}
