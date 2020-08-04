
function comecar(){
    for (let i = 10; i >= 0; i--) {
        numero = window.prompt("Próximo número")

        if (numero != i) {
            window.alert("Você errou a sequência")
            break
        } else if (numero == 1) {
            window.alert("Você ACERTOU a sequência!")
            break
        }
    }
}


function contar() {
  var paragrafo = document.getElementById('mensagem')
  paragrafo.innerHTML = "Demorou demais!"
}