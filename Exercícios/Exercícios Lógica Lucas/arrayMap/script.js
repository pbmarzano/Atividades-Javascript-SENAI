let a = ['1','2','3']
console.log(a)
console.log(typeof a)

let result = a.map(function(x){
    return parseInt(x, 10);
})

console.log(result)
console.log(typeof result)

let string = result.toString()
console.log(string)
console.log(typeof string)

string.valueOf()