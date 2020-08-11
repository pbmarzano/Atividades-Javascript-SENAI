
function check() {
    var n1 = document.getElementById('n1').value;
    var n2 = document.getElementById('n2').value;
    var n3 = document.getElementById('n3').value;
    var n4 = document.getElementById('n4').value;
    var n5 = document.getElementById('n5').value;   
    var res = document.getElementById('res')

    function media() {
        let media = (Number(n1) + Number(n2) + Number(n3) + Number(n4) + Number(n5))/5
        res.innerHTML = `A média entre os 5 números pares digitados é ${media}`
    }

    if (n1 % 2 == 1 || n2 % 2 == 1 || n3 % 2 == 1 || n4 % 2 == 1 || n5 % 2 == 1) {
        alert('Você digitou um numero impar, não será feita a média')
    } else {
        media()
    }

}

