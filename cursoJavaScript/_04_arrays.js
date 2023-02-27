let array = ["Hello",22,true]

//agrega un elemento al final del array
array.push("hello")
console.log(array)

//elimina el ultimo elemento del array y lo retorna
let elementRemoved1 = array.pop()
console.log(array)

//agrega un elemento al principio del array
array.unshift(-1)
console.log(array)

//elimina un elemento del principio del array y lo retorna
let elementRemoved2 = array.shift()
console.log(array)

//recorre todo el array
array.forEach((x)=>console.log(x))

//recorre todo el array con su indice
array.forEach((element,index)=>console.log(`Indice:${index} - Elemento:${element}`) )