//Verificamos si la exprecion Hola existe dentro de la cadena de texto
let cadena = "Holaesto es una Hola cadena de texto"
let regex = new RegExp("Hola","")
console.log(regex.test(cadena))
//busca la posicion de la exprecion
console.log(regex.exec(cadena))