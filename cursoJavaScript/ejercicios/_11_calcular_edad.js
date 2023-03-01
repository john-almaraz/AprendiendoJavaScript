/*
Programa una funcion que dada una fecha valida determine cuantos años tiene una persona hasta el día de hoy, 
miFuncion('02/03/1999') devolverá 23 años (en 2023).
*/

/**
 * Este metodo calcula la edad de una persona. Se calcula tomando en cuenta la fecha actual
 * 
 * @param {String} date - fecha de nacimiento (dd/MM/aaaa)
 * @returns {Number} edad actual de una persona
 */
const calcularEdad = (date=undefined)=>{
    let firstSlash = date.indexOf('/')
    let secondSlash = date.indexOf('/',firstSlash+1)
    let dayNac = date.substring(0,firstSlash)
    let monthNac = date.substring(firstSlash+1,secondSlash)-1
    let yearNac = date.substring(secondSlash+1)
    let fechaNac = new Date(yearNac,monthNac,dayNac)
    let fechaActual = new Date()
    let edad = fechaActual.getFullYear() - fechaNac.getFullYear()

    if(fechaActual.getMonth() == monthNac){
        if(fechaActual.getDate()< dayNac){
              edad--
        }
    }else if(fechaActual.getMonth()< monthNac){
        edad --
    }
    return edad

}
console.log(calcularEdad('04/03/1999'))

