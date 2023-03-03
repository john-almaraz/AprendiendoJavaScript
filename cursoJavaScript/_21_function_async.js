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
async function functionAsync(){
    try{
        console.log('Inicio Async Function');
        let obj = await cuadradoPromesa(1);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);

        obj = await cuadradoPromesa(2)
        console.log(`Async Function: ${obj.value}, ${obj.result}`);

        obj = await cuadradoPromesa('a')
        console.log(`Async Function: ${obj.value}, ${obj.result}`);

        obj = await cuadradoPromesa(4)
        console.log(`Async Function: ${obj.value}, ${obj.result}`);

        obj = await cuadradoPromesa(5)
        console.log(`Async Function: ${obj.value}, ${obj.result}`);

        console.log('Fin Async Function')
    }catch(error){
        console.error(error)
    }
}
functionAsync();