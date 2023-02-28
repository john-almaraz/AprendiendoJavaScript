/*
7) Programa una función que valide si una palabra o frase dada, es un palíndromo 
(que se lee igual en un sentido que en otro). mifuncion("salas") devolverá true.
*/

/**
 * Determina si una cadena de texto es palindromo. respeta mayusculas y minusculas
 * 
 * @param {String} cadena - cadena de texto
 * @returns {boolean} retorna verdadero si la cadena es palindromo y falso en caso contrario
 */
const frasePalindromo = (cadena)=>{
    let array = Array.from(cadena)
    let cadenaNueva = ""
    for(let i = array.length-1; i > -1;i--){
        cadenaNueva += array[i]
    }
    return cadenaNueva === cadena?true:false
}
console.log(frasePalindromo("salas"))