


function verificar () {
    var nome = document.getElementById("nomeAluno").value
    var nota1 = document.getElementById("nota1").value
    var nota2 = document.getElementById("nota2").value
    var media = (parseFloat(nota1) + parseFloat(nota2))/2
    var status_aluno = media >= 7 ? "Aprovado" : "Reprovado"  

    if (nome == "" && nota1 == "") {
        alert("Faltam dados.")
    } else if (nota1 == "") {
        alert("Faltam notas.")
    } else if (nota2 == "") {
        alert("Faltam outras notas.")
    } else {
        alert(`Aluno: ${nome}. Nota Primeiro Semestre: ${nota1}. Nota Segundo Semestre: ${nota2}. Média: ${media}. ${status_aluno}`)
    };

    
};

function gerar_tabela () {
    var corpo_tabela = document.querySelector("tbody");
    var linha = document.createElement("tr");
    var campo_nomes = document.createElement("td");
    var campo_nota1 = document.createElement("td");
    var campo_nota2 = document.createElement("td");
    var campo_media = document.createElement("td");
    var texto_nome = document.createTextNode(nome);
    var texto_nota1 = document.createTextNode(nota1);
    var texto_nota2 = document.createTextNode(nota1);
    var texto_media = document.createTextNode(media);
    
    campo_nomes.appendChild(texto_nome);
    campo_nota1.appendChild(texto_nota1);
    campo_nota2.appendChild(texto_nota2);
    campo_media.appendChild(texto_media);
    linha.appendChild(campo_nomes);
    linha.appendChild(campo_nota1);
    linha.appendChild(campo_nota2);
    linha.appendChild(campo_media);

    corpo_tabela.appendChild(linha);
}
