// variáveis globais
var botao_validar = document.querySelector('#validar_dados');
var botao_tabela = document.querySelector('#add_tabela');
var campo_nome = document.querySelector("input[name='nome']");
var campo_nota1 = document.querySelector("input[name='primeira_nota']");
var campo_nota2 = document.querySelector("input[name='segunda_nota']"); 


//funções

function validar_dados (event) {
    event.preventDefault();
    nome = campo_nome.value;
    nota1 = campo_nota1.value;
    nota2 = campo_nota2.value;
    media = (parseFloat(nota1)+parseFloat(nota2))/2;
    status_aluno = media >= 7 ? "APROVADO" : "REPROVADO" ; 

    if (nome == "") {
        alert("Faltam dados.")
    } else if (nota1 == "") {
        alert("Faltam notas.")
    } else if (nota2 == "") {
        alert("Faltam outras notas.")
    } else if (nota1 > 10 || nota1 < 0) {
        alert("Você digitou uma nota inválida.")
    } else if (nota2 > 10 || nota2 < 0) {
        alert("Você digitou uma nota inválida.")
    } else {
        document.querySelector(".alerta").innerHTML = 
        `Aluno: <strong>${nome}</strong>.<br>
        Nota Primeiro Semestre: <strong>${nota1}</strong>.<br>
        Nota Segundo Semestre: <strong>${nota2}</strong>.<br>
        Média: <strong>${media}</strong>.<br>
         <strong>${status_aluno}</strong>`;
    };

    //evento de mudar a cor caso o APROVADO ou REPROVADO
    document.querySelector(".alerta").onmousemove = function pintar() {
        if (status_aluno === "APROVADO") {
        this.style.color = 'green';
        } else {
            this.style.color = 'red';
        }
        document.querySelector(".alerta").onmouseout = function sair() {
            this.style.color = 'black';
        }
    }

};


function gerar_tabela (event) {
    event.preventDefault();
    var corpo_tabela = document.querySelector("tbody");
    var linha = document.createElement("tr");
    var campo_nomes = document.createElement("td");
    var campo_nota1 = document.createElement("td");
    var campo_nota2 = document.createElement("td");
    var campo_media = document.createElement("td");
    var campo_status = document.createElement("td");
    var texto_nome = document.createTextNode(nome);
    var texto_nota1 = document.createTextNode(nota1);
    var texto_nota2 = document.createTextNode(nota2);
    var texto_media = document.createTextNode(media);
    var texto_status = document.createTextNode(status_aluno);
    
    campo_nomes.appendChild(texto_nome);
    campo_nota1.appendChild(texto_nota1);
    campo_nota2.appendChild(texto_nota2);
    campo_media.appendChild(texto_media);
    campo_status.appendChild(texto_status);
    linha.appendChild(campo_nomes);
    linha.appendChild(campo_nota1);
    linha.appendChild(campo_nota2);
    linha.appendChild(campo_media);
    linha.appendChild(campo_status);

    corpo_tabela.appendChild(linha);
}

//eventos de link no footer: redirecionamento para meu github, e sublinhar link.
let link = document.getElementById('footer');
link.onmouseover = function() {
    link.style.color = "blue";
    link.style.textDecoration = "underline";
}
link.onmouseout = function() {
    link.style.color = "white";
    link.style.textDecoration = "none";
}

function visitar() {
    window.open("http://www.github.com/pbmarzano", "_blank")
}

//rotinas principais
botao_validar.addEventListener('click', validar_dados);
botao_tabela.addEventListener('click', gerar_tabela);
