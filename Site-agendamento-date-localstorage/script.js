

function reservar() {
    // pegar os inputs.
    var nomeCliente = document.getElementById('nome');
    var quantidadeClientes = document.getElementById('quantidade');
    var dataReserva = new Date(document.getElementById('dateInput').value)
    // var dataCerta = dataReserva.toUTCString();

    //validar inputs
    if (nomeCliente.value == "" || quantidadeClientes.value == ""){

        alert("Preencha os dados corretamente.")

    } else if (dataReserva > new Date()){

        // pegar dia, mes e ano do input date e converter para string.
        var mesExt = ['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro']
        var diaExt = ['domingo','segunda','terça','quarta','quinta','sexta','sábado']

        var dia_semana = dataReserva.getDay()+1;
        var dia_mes = dataReserva.getDate()+1;
        var mes = dataReserva.getMonth();
        var ano = dataReserva.getFullYear();

        // salvar dados no localStorage.
        var dados = JSON.parse(localStorage.getItem("dadosReserva"));

        if (dados == null) {
            localStorage.setItem("dadosReserva", "[]");
            dados = [];
        }

        var registro = {
            nome: nomeCliente.value,
            quantidade: quantidadeClientes.value,
            data: dataReserva.value
        }

        dados.push(registro)

        localStorage.setItem("dadosReserva", JSON.stringify(dados));
        
        // Apresentar dados de reserva.
        alert(`Olá ${nomeCliente.value}, seu agendamento foi feito com sucesso para ${diaExt[dia_semana]}, ${dia_mes} de ${mesExt[mes]} de ${ano}. Válido para ${quantidadeClientes.value} pessoas, entre 19h as 22h.`)

        //Limpar campos.
        nomeCliente.value = "";
        quantidadeClientes.value = "";
        
    } else {
        
        alert("Não é possível reservar nessa data.")

    }
}


