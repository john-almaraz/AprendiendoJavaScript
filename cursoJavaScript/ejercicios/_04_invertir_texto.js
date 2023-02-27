/*
4) Programa una función que invierta las palabras de una cadena de texto, 
miFuncion("Hola Mundo") devolverá "odnuM aloH".
*/

/**
 * Este metodo invierte una cadena de texto.
 * 
 * @param {String} cadena - cadena de texto. No puede ser 
 * @returns {String} cadena de texto invertida
 */
const invertirTexto=(cadena)=>{    
    if(cadena ===undefined){
        return 'value undefined'
    }else if(cadena ===null){
        return 'value null'
    }else{
        let nuevaCadena = cadena.trim()        
        if(nuevaCadena ===''){
            return 'string empty'
        }else if(!isNaN(nuevaCadena)){
            throw new TypeError("El parametro cadena no puede ser un valor numerico")
        }else{
            let textoInvertido = ""
            let array = Array.from(cadena)
            for(let i = array.length-1; i > -1;i--){
                textoInvertido += array[i]
            }
            return textoInvertido
        }
    }
    
}
let texto = "Este texto sera invertido"
console.log(invertirTexto(texto))