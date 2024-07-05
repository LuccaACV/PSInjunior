
const booksByCategory = [
    {
        category: "Riqueza",
            books: [
                {
                    title: "Os segredos da mente milionária",
                    author: "T. Harv Eker",
                },
                {
                    title: "O homem mais rico da Babilônia",
                    author: "George S. Clason",
                },
                {
                    title: "Pai rico, pai pobre",
                    author: "Robert T. Kiyosaki e Sharon L. Lechter",
                },
            ],
    },
    {
        category: "Inteligência Emocional",
            books: [
                {
                    title: "Você é Insubstituível",
                    author: "Augusto Cury",
                },
                {
                    title: "Ansiedade – Como enfrentar o mal do século",
                    author: "Augusto Cury",
                },
                {
                    title: "Os 7 hábitos das pessoas altamente eficazes",
                    author: "Stephen R. Covey"
                }
            ]
    }
];

//Função da parte 4
function imprimeLivro(nome){
    console.log("Os livros do "+nome+" são: ")
    for(let LivrosCat of booksByCategory){
        for(let Livros of LivrosCat.books){
            if(Livros.author==nome){
                console.log(Livros.title)
            }
        }
     }
}

var dec = prompt("Qual questão quer visualizar? 1,2,3 ou 4 ?") 
dec = parseInt(dec)

switch(dec){

    case 1:
        for(let LivrosCat of booksByCategory){
           console.log("Na Categoria: "+LivrosCat.category+"\nExistem ("+LivrosCat.books.length+") livros!!")
        }
        break;

    case 2:
        var autores = []
        var cont
        for(let LivrosCat of booksByCategory){
            for(let Livros of LivrosCat.books){
                cont = 0
                for(let autorTemp of autores){
                    if(Livros.author==autorTemp){
                        cont++
                    }
                }
                if(cont==0){
                    autores.push(Livros.author)
                }
            }
         }
         console.log("A quantidade de autores unicos nessa coleção de livros são "+autores.length)
        break;

    case 3:
        console.log("Os livros do Augusto Cury são: ")
        for(let LivrosCat of booksByCategory){
            for(let Livros of LivrosCat.books){
                if(Livros.author=="Augusto Cury"){
                    console.log(Livros.title)
                }
            }
         }
        break;

    case 4:
        var nomeA = ["Augusto Cury","Stephen R. Covey","Robert T. Kiyosaki e Sharon L. Lechter","George S. Clason","T. Harv Eker"]
        var num = prompt("Qual nome do autor que deseja buscar?\n"+nomeA[0]+"- 0\n"+nomeA[1]+" - 1\n"+nomeA[2]+" - 2\n"+nomeA[3]+" - 3\n"+nomeA[4]+" - 4")
        while(num>4||num<0){
            alert("Valor invalido!!")
            var num = prompt("Qual nome do autor que deseja buscar?\n"+nomeA[0]+"- 0\n"+nomeA[1]+" - 1\n"+nomeA[2]+" - 2\n"+nomeA[3]+" - 3\n"+nomeA[4]+" - 4")
        }
        imprimeLivro(nomeA[num])
        break;

    default:
        alert("Valor invalido, escolha 1,2,3 ou 4!!")
        break;
}