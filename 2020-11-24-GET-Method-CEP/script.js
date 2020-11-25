
function fazerRequisicao(){

    var cep = document.getElementById('cep').value;

    var url = `http://viacep.com.br/ws/${cep}/json`

    var request = new XMLHttpRequest();

    request.open("GET", url, false);

    request.send(null); // execução do script pára aqui até a requisição retornar do servidor

    var response = JSON.parse(request.responseText);

    var tablecep = document.getElementById('table')
    var tr = document.createElement('tr')
    var td = document.createElement('td')
    td.innerHTML = `CEP = ${response.cep}`
    tr.appendChild(td)
    tablecep.appendChild(tr)

}
