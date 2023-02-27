/*
2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados.
 miFuncion("Hola Mundo", 4) devolverá "Hola".
*/

/**
 * Este metodo recorta los caracteres de una cadena de texto.
 * 
 * @param {String*} cadena - cadena de texto
 * @param {Number} posiciones - tamanio de la nueva cadena de texto.Si el numero es negativo devuelve null,
 * si es mayor a la longitud de la cadena de texto retornara la cadena entera
 * @returns {String} nueva cadena de texto recortada
 */
function recorteCaracteres(cadena,posiciones){
    if(posiciones<0){
        return null
    }else if (posiciones> cadena.length) {
        return cadena
    } else {
        let array = [...cadena]
        let nuevaCadena = ""
        for(let i = 0; i<posiciones;i++){
            nuevaCadena += array[i]
        }        
        return nuevaCadena;
    }   
}
console.log(recorteCaracteres("Cadena de prueba",8))
