const persona = {
    nombre:"John",
    apellido:"Almaraz",
    edad:23,
    pasaTiempos:["Gym","Programar"], //array
    contacto:{
        celular:"+34654545472",
        email:"prueba@ok.es"
    },//object
    saludar:function(){
        console.log(`Hola mi nombre es ${this.nombre} ${this.apellido}`)
    }//metodo
}
console.log(persona)

//accediendo a las propiedades del objeto
console.log(persona.nombre)
console.log(persona.saludar())
console.log(persona.contacto.celular)
console.log(persona.pasaTiempos[0])

//metodos del prototipo Object
console.log(Object.keys(persona))
console.log(Object.values(persona))
console.log(persona.hasOwnProperty('nombre'))//verifica si el objeto tiene o no una propiedad
