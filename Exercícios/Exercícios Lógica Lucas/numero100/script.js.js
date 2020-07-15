function testar() {
    let n = document.getElementById('numero').value
    if (n == ""){
        alert('Você precisa digitar um número.')
    } else if (n == 100){
        var body = document.body;
        var p = document.createElement('h1');
        var texto  = document.createTextNode("PARABÉNS, VOCÊ ACERTOU! Esperávamos o numero 100!!!");
        p.appendChild(texto);
        body.appendChild(p);
    } else {
        var body = document.body;
        var p = document.createElement('h3');
        var texto  = document.createTextNode("Você errou.. digite outro número.");
        p.appendChild(texto);
        body.appendChild(p);
    }
}

function limpar() {
    document.getElementById('numero').value = ''
}

