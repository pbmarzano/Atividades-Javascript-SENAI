// IMC = peso/(altura**2)
function mostrarImc () {
    var p = parseFloat(document.getElementById('peso').value);
    var a = parseFloat(document.getElementById('altura').value);
    var imc = (p/(a*a))

    if (imc < 18.50) {
        txt = `ATENÇÃO: seu IMC é ${imc.toFixed(2)} e você está com o peso abaixo do normal.`
    } else if (imc < 24.90) {
        txt = `MUITO BEM: seu IMC é ${imc.toFixed(2)} e seu peso é ideal!`
    } else if (imc < 29.90) {
        txt = `ATENÇÃO: seu IMC é ${imc.toFixed(2)} e você está um pouco acima do peso ideal.`
    } else if (imc < 34.90) {
        txt = `ATENÇÃO: seu IMC é ${imc.toFixed(2)} e você está com Obesidade grau 1.`
    } else if (imc < 35.90) {
        txt = `ATENÇÃO: seu IMC é ${imc.toFixed(2)} e você está com Obesidade grau 2`
    } else if (imc < 40.00) {
        txt = `A T E N Ç Ã O: SEU IMC É ${imc.toFixed(2)} E VOCÊ ESTÁ COM OBESIDADE MÓRBIDA.`
    }    

    var node = document.createElement('h3');
    var textNode= document.createTextNode(txt);
    node.appendChild(textNode);
    document.getElementById('res').appendChild(node);
}