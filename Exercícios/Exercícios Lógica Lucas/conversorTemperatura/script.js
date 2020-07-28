function converter(){

    var tempC = document.getElementById('celcius').value
    let tempF = tempC * 1.8 + 32

    let text = document.createElement('p');
    let node = document.createTextNode(`${tempF} graus Fahrenheit`)
    text.appendChild(node)

    var resultado = document.getElementById('res');
    resultado.appendChild(text)

    var botaoLimpar = document.createElement('button')
    botaoLimpar.innerHTML = "Limpar"
    botaoLimpar.onclick = function(){
       resultado.innerHTML = ""
    }
    resultado.appendChild(botaoLimpar)

    tempC.reset()
}