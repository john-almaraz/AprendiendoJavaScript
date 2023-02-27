//Mensaje de alerta
window.alert('Hola esto es una alerta')

//Mensaje de confirmacion
let confirmacion = window.confirm("Este es un mensaje de confirmacion ok?")
console.log(confirmacion? "Apretaste Aceptar":"Apretaste Cancelar")

//Mensaje de imput
let nombre = window.prompt("Introduce tu nombre")
window.alert(`Hola ${nombre}`)
