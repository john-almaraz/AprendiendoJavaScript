/*
1) Programa una función que cuente el número de caracteres de una cadena de texto. 
miFuncion("Hola Mundo") devolverá 10.
*/

/**
 * Este metodo cuenta la cantidad de caracteres de una cadena de texto
 * @param {String} cadena - Cadena de texto
 * @returns {Number} longitud de la cadena de texto
 */
function contarCaracteres(cadena){
    let count = 0
    let array = Array.from(cadena)
    for(let i = 0 ; i<array.length;i++){
        count++;
    }
    return count;
}
console.log(contarCaracteres("Hola"))
