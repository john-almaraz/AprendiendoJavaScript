/*
18) Programa una o que dada una cadena de texto cuente el numero de vocales y consonantes, 
miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
*/

/**
 * Este metodo cuenta las vocales y consonantes de una cadena de texto.
 * 
 * @param {string} cadena - cadena de texto 
 * @returns {Array} retorna un array con dos posiciones (vocales,consonantes)
 * 
 */
const contarVyC =(cadena=undefined)=>{
    let vocales = /[aeiouAEIOU]/g 
    let letras  = /[^aeiouAEIOU\W\d]/g
    //Creacion de array con las expreciones regulares
    let arrayV = cadena.match(vocales)
    let arrayL = cadena.match(letras)
     
    return [arrayV.length,arrayL.length]
}

let cadena ='Hola mundo'
console.log(contarVyC(cadena))