

function validar(){
    var usuario = document.getElementById("usuario")
    var senha = document.getElementById("senha")

    if (usuario.value == "joao" && senha.value == "1234") {
        alert("Usuário Autenticado com Sucesso!")
    } else if (usuario.value == "joao" && senha.value != "1234") {
        alert("Senha incorreta para 'joao'")
    } else {
        if (usuario.value == "bruno" && senha.value == "senha123") {
            alert("Usuário Autenticado com Sucesso!")
        } else if (usuario.value == "bruno" && senha.value != "senha123") {
            alert("Senha incorreta para 'bruno'")
        } else {
            if (usuario.value == "caio" && senha.value == "senha") {
                alert("Usuário Autenticado com Sucesso!")
            } else if (usuario.value == "caio" && senha.value != "senha") {
                alert("Senha incorreta para 'caio'")
            } else {
                alert("Usuário Inválido!")
            };
        }; 
    };
};
