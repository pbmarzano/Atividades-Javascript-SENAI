var n = document.getElementById("n");
var array = []

function inserir() {
    array.push(Number(n.value))
}

function mostrar() {
    document.getElementById("arr").innerHTML = "Array input: " + array.join(", ")
}

function limpar() {
    document.getElementById("n").value = ""
    document.getElementById("arr").innerHTML = ""
    document.getElementById("arrIns").innerHTML = ""
    document.getElementById("arrSel").innerHTML = ""
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
    
    document.getElementById("arrIns").innerHTML = `Ordenado por inserção: ${JSON.stringify(array)}`
    var timeEnd = performance.now();

    var tempo = timeEnd - timeStart
    document.getElementById("arrIns").innerHTML += ` Duração ${tempo.toFixed(5)}ms`
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
    
    document.getElementById("arrSel").innerHTML = `Ordenado por seleção: ${JSON.stringify(array)}`

    var timeEnd = performance.now();
    var tempo = timeEnd - timeStart
    document.getElementById("arrSel").innerHTML += ` Duração ${tempo.toFixed(5)}ms`
}