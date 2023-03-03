/**
 * Este metodo eleva un numero al cuadrado
 * 
 * @param {number} value - valor numerico
 * @returns {Promise} retorna un objeto con el resultado de la operacion
 */
function cuadradoPromesa(value){
    if(typeof value !== 'number') {
        return Promise.reject(`Error!!! el valor ingresado '${value}' no es un numero`);
    }    
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve({
                value,
                result:value*value
            });
         }, 0 | Math.random()*1_500);
    });    
}

cuadradoPromesa(0)
    .then((obj)=>{
        console.log('Inicio Promise')
        console.log(`Promise: ${obj.value},${obj.result}`)
        return cuadradoPromesa(1);
    })
    .then((obj)=>{
        console.log(`Promise: ${obj.value},${obj.result}`)
        return cuadradoPromesa(2);
    })
    .then((obj)=>{
        console.log(`Promise: ${obj.value},${obj.result}`)
        return cuadradoPromesa('Hola');
    })
    .then((obj)=>{
        console.log(`Promise: ${obj.value},${obj.result}`)
        return cuadradoPromesa(4);
    })
    .then((obj)=>{
        console.log(`Promise: ${obj.value},${obj.result}`)
        return cuadradoPromesa(5);
    })
    .then((obj)=>{
        console.log(`Promise: ${obj.value},${obj.result}`)      
        console.log('Fin promise')  
    })
    .catch(err => console.error(err))