function pedir () {   
    var flores = ["rosa","dalia","begonia","girassol"]
    var precos = [10, 13.50, 15, 17.90]
    var somatotal = 0
    var quantidade = Number(prompt("Quantas flores você deseja comprar?"))

    for (i=0 ; i < quantidade; i++){

        var escolhida = prompt("Escolha uma flor:")
        var indiceescolha = flores.indexOf(escolhida)

        somatotal += precos[indiceescolha]
    }

    if (somatotal > 50) 
    {
        alert("Não tem grana pra bancar essa brincadeira, jovem juvenil... Saia daqui!")
    }
    else 
    {
        alert(`Ok, pequeno polegar, você me deve ${Math.round(somatotal)} mangos... Agora saia daqui!`)
    }
}    