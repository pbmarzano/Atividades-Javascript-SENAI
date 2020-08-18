    

function calcular () {
    var pipoca = document.getElementById('pipoca').value;
    var choco = document.getElementById('chocolate').value;
    var refri = document.getElementById('refri').value;
    var valor_refri = (Number(refri)*8.5)
    var valor_choco = (Number(choco)*3)
    var valor_pipoca = (Number(pipoca)*6)

    if (pipoca >= 1 || choco >= 1 || refri >= 1) {
        let soma = valor_pipoca + valor_choco + valor_refri
        res.innerHTML = `
                        ${pipoca} Pipocas: ${valor_pipoca.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} <br>
                        ${choco} Chocolates: ${valor_choco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} <br>
                        ${refri} Refrigerantes: ${valor_refri.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} <br>
                        `
        resTotal.innerHTML = `Total a pagar: ${soma.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`

    } else { alert('você não comprou nada') }
}
