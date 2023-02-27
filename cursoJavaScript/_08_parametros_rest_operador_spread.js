//parametro rest --> ...nameVariable
function suma(...args){
    let r = 0
    args.forEach((value)=> r +=value )
    return r
}

console.log(suma(1,2,3,4,5))

//Operador Spread
const array =  [1,2,3]
const array2 = [4,5,6]

//Se crea 2 arrays con 3 posiciones
const array3 = [array,array2]
console.log(array3)

//uso de operador Spread (operador de propagacion) para crear 1 unico array de 6 elementos
const array4 = [...array,...array2]
console.log(array4)
