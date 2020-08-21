let arr = [];
let n = 0;
for (i=0; i<5; i++) {
    n = Number(prompt('Digite um numero:'));
    arr.push(n)
}

alert(`Os numeros digitados foram ${arr}`)

arr.sort(function(a,b){return a-b});

alert(`O maior numero digitado foi ${arr[4]}`)

let maior = arr[4]

let menores = arr.pop()

let mult = arr.map(function(menores) {return menores * maior})

alert(`a multiplicação dos menores pelo maior é ${mult}`);

let soma = mult.reduce(function(soma, i){return soma + i;}, 0);

alert(`a soma das multiplicações é ${soma}`)

