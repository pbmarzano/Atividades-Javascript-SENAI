function calcularFatorial() {
    let input = Number(document.getElementById('numeroFatorial').value)
    let resultado = document.getElementById('resultadoFatorial')
    let n1 = input
    let n2 = input - 1
    let fat = input * n2

    if (input == 0 || input == 1) {
        resultado.innerHTML = `${input}! > 1.`
    } else {
        while (input != 1 && n2 > 1) {
            input--
            n2--
            fat = (fat * n2)
        }
        resultado.innerHTML = `${n1}! = ${fat}.`
    }
}

function resetFatorial() {
    document.getElementById("numeroFatorial").value = ""
    document.getElementById("resultadoFatorial").innerHTML = ""
}