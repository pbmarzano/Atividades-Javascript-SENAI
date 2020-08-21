let arr = []
let n = 0;

for (i = 0; i < 10; i++) {
    let n = Number(prompt('Digite um número:'));
    arr.push(n);
}

alert(arr.sort(function(a,b){return a - b}));