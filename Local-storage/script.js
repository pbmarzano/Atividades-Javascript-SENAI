var pdiv = document.getElementById('pdiv')

function salvar()  {
    var nome = document.getElementById('nome').value;
    var idade = document.getElementById('idade').value;
    var aluno = {nome, idade}
    localStorage.setItem("teste", JSON.stringify(aluno))
}

function apresentar() {
    let retorno = localStorage.getItem('teste')
    let converter = JSON.parse(retorno)
    pdiv.innerHTML = `${converter.nome} tem ${converter.idade} anos` 
}