/*POO
    - Clases --> modelo a seguir
    - Objetos --> instancia de una clase
        - atributos --> caracteristica del objeto
        - metodos --> acciones que un objeto puede usar (son funciones dentro de un objeto)

*/

//funcion constructora
function Animal(nombre,color){
    this.nombre = nombre
    this.color = color

    this.sonar = function(){
        console.log ("Hago sonidos porque estoy vivo")
    }
}
const perro = new Animal("Tobi","Negro")
const gato = new Animal("Valentina","Blanco")
console.log(perro)
console.log(gato)

//funcion constructora mas efectiva
function Persona(nombre,edad){
    this.nombre = nombre
    this.edad = edad
}
//agregamos el metodo al prototipo(evitamos que el metodo se repita en cada instancia)
Persona.prototype.saludar = function(){
    console.log (`Hola me llamo ${this.nombre} y tengo ${this.edad} años`)
}

const hombre = new Persona("John",23)
const mujer = new Persona("Cecilia",20)
console.log(hombre)
console.log(mujer)