/*
3) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) 
devolverá Hola Mundo Hola Mundo Hola Mundo.
*/

/**
 * Este metodo repite una cadena de texto 'n' veces.
 * 
 * @param {String} cadena - cadena de texto, no debe ser null || vacia
 * @param {Number} n - veces a repetir, no debe ser un numero negativo
 * @returns {String} nueva cadena de texto repetida 'n' veces.
 */
const repetirCadena = (cadena=null, n=0)=>{   
    let cadenaNueva = cadena.trim()
    if(cadenaNueva === null || cadenaNueva ===''){
        throw new Error("El primer parametro: 'cadena' no puede ser vacia o nula")    
    }else if(n ===0 ){
        return cadenaNueva
    }else if(n < 0){
        throw new Error("El segundo parametro: 'n' no puede ser negativo")
    }else{        
        let count = 0
        while(n > count){
            cadenaNueva += `\n${cadenaNueva}`
            count++
        }    
        return cadenaNueva    
    }    
}

console.log(repetirCadena("Hello",1))