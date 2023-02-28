/*
8) Programa una función que obtenga un numero aleatorio entre 501 y 600.
*/

/**
 * Este metodo retorna un numero entero aleatorio. Por defecto crea un
 * numero aleatorio entre 1 y 100 (si los parametros estan vacios)
 * 
 * @param {Number} numStart - rango de inicio, inclusive
 * @param {Number} numEnd - rango final, inclusive
 * @returns {Number} numero aleatorio 
 */
const numRandom = (numStart=1,numEnd=100)=>
(typeof(numStart)==='string')?console.warn('\'numStart\' debe ser numericos'):
(typeof(numEnd)==='string')? console.warn('\'numEnd\' debe ser numericos'):
(numStart === null || numEnd ===null)?console.warn('Los parametros no pueden tener el valor nulo'):
(numStart > numEnd)?console.warn("'numStart' no puede ser mayor que 'numEnd'"):
(Math.floor(Math.random()*(numEnd-numStart+1)+numStart));

console.log(numRandom(1,5))


/*
for(let i = 0; i<17;i++){
    console.log(numRandom('gTO',null))
}
*/

