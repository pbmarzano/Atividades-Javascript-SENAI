var alunos = []

function Aluno(nome, turma, idade, nota){
    this.nome = nome;
    this.turma = turma;
    this.idade = idade;
    this.nota = nota;
}

var nomeA = document.getElementById('nomeA');
var turmaA = document.getElementById('turmaA');
var idadeA = document.getElementById('idadeA');
var notaA = document.getElementById('notaA');
var lista = document.getElementById('lista');

document.getElementById("button").addEventListener ('click', cadastrar, false)

function cadastrar() {

    var alunoNovo = new Aluno(nomeA.value, turmaA.value,  idadeA.value, notaA.value)
    
    alunos.push(alunoNovo)
    
    for (let i = 0; i < alunos.length; i++) {

        lista.innerHTML += `<li> ${Object.values(alunos[i])} </li>`

        alunos.shift()
        // lista.innerHTML += 
        // `
        // <li> Nome:${alunos[i].nome}</li>
        // <li> Turma:${alunos[i].turma}</li>
        // <li> Idade:${alunos[i].idade}</li>
        // <li> Nota:${alunos[i].nota}</li>
        // <br>
        // `
    }


}



// alert(JSON.stringify(alunoNovo))

    // lista.innerHTML += `
    // <li> Nome:${JSON.stringify(alunoNovo.nome)}</li>
    // <li> Turma:${JSON.stringify(alunoNovo.turma)}</li>
    // <li> Nome:${JSON.stringify(alunoNovo.idade)}</li>
    // <li> Nome:${JSON.stringify(alunoNovo.nota)}</li>
    // <br>
    // `