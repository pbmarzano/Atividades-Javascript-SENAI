var n = document.getElementById("numeroInput");
var array = []
var resArray = document.getElementById("arr")
var arrIns = document.getElementById("arrIns")
var arrSel = document.getElementById("arrSel")
var arrBub = document.getElementById("arrBub")

function inserir() {
    array.push(Number(n.value))
    n.value = ""
}

function mostrar() {
    resArray.innerHTML = "Array input: " + array.join(", ")
}

function limpar() {
    n.value = ""
    resArray.innerHTML = ""
    arrIns.innerHTML = ""
    arrSel.innerHTML = ""
    arrBub.innerHTML = ""
    array = [] 
}

function ordenarInsercao() {
    var timeStart = performance.now();
    for (i = 1; i < array.length; i++) {
        let valor = array[i];
        j = i - 1;
        while (j > -1 && array[j] > valor) {
        array[j + 1] = array[j];
        j--;
        }
        array[j + 1] = valor;
    }
    
    arrIns.innerHTML = `Ordenado por inserção: ${JSON.stringify(array)}. `
    var timeEnd = performance.now();

    var tempo = timeEnd - timeStart
    arrIns.innerHTML += `Duração: ${tempo.toFixed(5)}ms`
}

function ordenarSelecao() {
    var timeStart = performance.now();
    for (i = 0; i < array.length - 1; i++) {
        index = i;
        
        for (j = i + 1; j < array.length; j++) {
            if (array[j] < array[index]) {
             index = j;
            }
        }
        
        let menorNumero = array[index];
        array[index] = array[i];
        array[i] = menorNumero;
    }
    
    arrSel.innerHTML = `Ordenado por seleção: ${JSON.stringify(array)}. `

    var timeEnd = performance.now();
    var tempo = timeEnd - timeStart
    arrSel.innerHTML += `Duração: ${tempo.toFixed(5)}ms`
}

function ordenarBubble() {
    console.log("iniciando bubble")
    var timeStart = performance.now();

    let trocado = false
    let end = arr.length - 1
    for (let i = 0, j = i; i < end; i++, j++ ) {
        alert(i, j);
        if (array[i] > array[j]) {
            trocado = true
            [array[i], array[j]] = [array[j], array[i]]
        }
    } end--

    arrBub.innerHTML = `Ordenado por bubble: ${JSON.stringify(array)}. `

    var timeEnd = performance.now();
    var tempo = timeEnd - timeStart
    arrBub.innerHTML += `Duração: ${tempo.toFixed(5)}ms`
}