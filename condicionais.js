/* Exercício aula 29/04/2020 - Aula sobre condicionais em JS
Construam funções para a resolução dos seguintes problemas abaixo:

* Receber 3 parametros de numeros interios e dizer quais sao os numeros maior e menor dentre eles.
* Validar se o parametro que foi recebido e igual a "senha", os possiveis retornos sao: "ACESSO PERMITIDO" e "ACESSO NEGADO".
* Dizer qual poligono se refere pela quantidade de lados que e recebido por parametro. Possiveis retornos sao: "TRIANGULO" com 3 lados, QUADRADO" com 4 lados, "PENTAGONO" 5 lados ou "POLIGONO DESCONHECIDO".
*Retorna se o valor do parametro inserido e par ou impar.
*Retorna o mes de acordo com o numero recebido por parametro.
*Retorna o genero a partir da letra recebida por parametro, Ex.: se receber F entao retornar FEMININO;*/

//Exercício 1: Receber 3 parâmetros de números interios e dizer quais sao os números maior e menor dentre eles.

function maiorMenor (a,b,c) {
    var arr = [a, b, c];
    var min = Math.min(...arr);
    var max = Math.max(...arr);
    
    
    console.log("O menor valor é " + min);
    console.log("O maior valor é " + max);

};

//Exercício 2: Validar se o parâmetro que foi recebido é igual à senha. Os possiveis retornos sao: "ACESSO PERMITIDO" e "ACESSO NEGADO".


var senha = 1234;
function verificarSenha (senha) {
    
    if (senha === 1234){
        alert("acesso permitido");
    } else { 
        alert("acesso negado");
    };
}

//Exercício 3: Dizer qual polígono se refere pela quantidade de lados que é recebido por parâmetro. Possiveis retornos sao: "TRIANGULO" com 3 lados, "QUADRADO" com 4 lados, "PENTAGONO" 5 lados ou "POLIGONO DESCONHECIDO".

function nomePoligono (lados){
    switch(lados){
        case 3:
            console.log("TRIÂNGULO");
            break;
        case 4: 
            console.log("QUADRADO");
            break;
        case 5: 
            console.log("PENTÁGONO");
            break;
        default:
            console.log("POLÍGONO DESCONHECIDO");
    }
}

//Exercício 4: Retorna se o valor do parâmetro inserido é par ou impar.

var n;
function parOuImpar(n){
    if (n % 2 == 1){
        console.log("NÚMERO ÍMPAR");
    } else {
        console.log("NÚMERO PAR");
    }
}

//Exercício 5: Retorna o mês de acordo com o número recebido por parâmetro.

var mes 
function retornaMes (mes){
    switch (mes){
        case 1:
            console.log("JANEIRO");
            break;
        case 2:
            console.log("FEVEREIRO");
            break;
        case 3:
            console.log("MARÇO");
            break;
        case 4:
            console.log("ABRIL");
            break;
        case 5:
            console.log("MAIO");
            break;
        case 6:
            console.log("JUNHO");
            break;
        case 7:
            console.log("JULHO");
            break;
        case 8:
            console.log("AGOSTO");
            break;
        case 9:
            console.log("SETEMBRO");
            break;
        case 10:
            console.log("OUTUBRO");
            break;
        case 11:
            console.log("NOVEMBRO");
            break;
        case 12:
            console.log("DEZEMBRO");
            break;
        default:
            console.log("Este número não representa nenhum mês.");
    }
}

// Exercício 6: *Retorna o genero a partir da letra recebida por parametro, Ex.: se receber F entao retornar FEMININO;*/

var gen;
function genero(gen){
    switch (gen) {
        case ("m"):
            console.log("masculino");
            break;
    
        case ("f"):
            console.log("feminino");
            break;
        default:
            alert("Nenhum gênero representado por esta letra.");
    }
}
