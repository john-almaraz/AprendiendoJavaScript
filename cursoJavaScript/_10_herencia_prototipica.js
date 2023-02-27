function Animal(nombre,genero){
    this.nombre = nombre
    this.genero = genero
}
//Creacion del metodo dentro del protipo Animal
Animal.prototype.sonar = function(){
    console.log ("Hago sonidos porque estoy vivo")
}
//Herencia prototipica
function Perro(nombre,genero,color){
    this.super = Animal
    this.super(nombre,genero)
    this.color = color
}
//Perro esta heredando de Animal
Perro.prototype = new Animal() //Heredamos de la clase Animal
Perro.prototype.constructor = Perro

//Creacion de un objeto Perro
const perro1 = new Perro("Tobi","Macho","Negro")
console.log(perro1)

//Sobre-escritura del metodo sonar()
Perro.prototype.sonar=()=>{
    console.log("Wao wao soy un perro")
}
perro1.sonar()
