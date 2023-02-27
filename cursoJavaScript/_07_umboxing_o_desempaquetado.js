const numeros = [1,2,3,4,5,6]

//umboxing del array numeros, en variables independientes
const [uno,dos,tres,cuatro,cinco,seis] = numeros
console.log(`Mostrando la variable uno: ${uno}`)

//umboxing de objetos. las variables deben llamarse igual a las propiedades del objeto
const person = {
    nombre: "John",
    edad:23
}
let {nombre,edad} = person
console.log(nombre)
console.log(age)



