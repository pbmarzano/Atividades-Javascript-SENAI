let array = [1,4,4,5,5,6,8,8,8,9]
let verificado = [] 
let verificar = Number(prompt("Digite um numero de 0 a 10."))

for (i=0; i < 10; i++){

    if (array[i] == verificar){
        verificado.push(i)
    }
    
}

if (verificado.length == 0) 
{
    alert(`Não há este numero no array ${array}`)
}
else
{
    alert(`O numero digitado existe no array ${array} nos seguintes índices: ${verificado}`)
}