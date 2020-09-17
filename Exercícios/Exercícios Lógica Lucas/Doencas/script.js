let virus = []
let bacterias = []
let ambas = []
let lista = []

let quantidade = Number(prompt("Quantas doenças deseja cadastrar?"));

for (let i = 0; i < quantidade ; i++) {
    
    let doenca = prompt("Digite o nome da doença: ");
    let tipo = prompt("Digite o tipo(viral, bacteriana ou ambos): ");

    if (tipo == "viral")
    {
        virus.push(doenca);
    } 
    else if (tipo == "bacteriana")
    {
        bacterias.push(doenca);
    }
    else
    {
        ambas.push(doenca);
    }
    lista.push(doenca);
}

alert(`As doenças transmitidas por vírus cadastradas são ${virus}.`)
alert(`As doenças transmitidas por bactérias cadastradas são ${bacterias}.`)
alert(`As doenças transmitidas por vírus e bactérias cadastradas são ${ambas}.`)
alert(`A lista geral das doenças cadastradas são ${lista}.`)