/*
5) Programa una funcion para contar el numero de veces que se repite una palabra en un texto largo,  
miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
*/

/**
 * Este metodo busca palabras repetidas.
 * 
 * @param {String} cadena - cadena que sera evaluada
 * @param {String} busqueda - palabra o frase que sera buscada
 * @returns {Number} numero de veces que se repite una palabra o frase
 */
const buscarRepetidos=(cadena,busqueda)=>{
    let count = 0
    let pos = 0
    do{
        pos = cadena.indexOf(busqueda,pos)
        if(pos >= 0){
            count++
            pos++
        }
    }while(pos != -1);
    return count
}

let cadena = "Esta es una cadena de prueba"
let busqueda = "de"
console.log(buscarRepetidos(cadena,busqueda))