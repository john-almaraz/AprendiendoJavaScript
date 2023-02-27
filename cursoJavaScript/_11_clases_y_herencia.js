class Animal{
    constructor(nombre,color){
        this.nombre = nombre
        this.color = color
    }
    //Aqui no es necesario poner los metodos dentro del prototipo
    //porque JavaScript lo hace automatico
    saludar(){
        console.log(`Hola mi nombre es ${this.nombre}`)
    }
    sonar(){
        console.log('Soy un animal y hago sonidos porque estoy vivo')
    }
}
class Perro extends Animal{
    constructor(nombre,color,genero){
        super(nombre,color)
        this.genero = genero
    }
    sonar(){
        console.log('Soy un perro y ladro')
    }
    ladrar(){
        console.log('Wao wao!!!')
    }
}

const animal = new Animal("Tobi","negro")
animal.sonar()
const perro = new Perro('Betoben',"Amarillo","Macho")
perro.sonar()
perro.__proto__.__proto__.sonar()//Aqui accedemos al metodo de su prototipo (Animal)
perro.ladrar()