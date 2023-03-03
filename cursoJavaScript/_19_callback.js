/**
 * Este metodo eleva un numero al cuadrado
 * 
 * @param {number} value - valor numerico
 * @param {Function} callback - una funcion
 */
function cuadradoCallback(value,callback){
    setTimeout(() => {
       callback(value,value*value) 
    }, 0 | Math.random()*1_500);
}

//Se ejecutan una tras otra sin bloquear el hilo principal
cuadradoCallback(1,(value,result)=>{
    console.log('1ª callback');
    console.log(`Callback:${value}, ${result}`);
    cuadradoCallback(2,(value,result)=>{
        console.log('2ª callback');
        console.log(`Callback:${value}, ${result}`);
        cuadradoCallback(3,(value,result)=>{
            console.log('3ª callback');
            console.log(`Callback:${value}, ${result}`);
            cuadradoCallback(4,(value,result)=>{
                console.log('4ª callback');
                console.log(`Callback:${value}, ${result}`);
                cuadradoCallback(5,(value,result)=>{
                    console.log('5ª callback');
                    console.log(`Callback:${value}, ${result}`);
                });
            });
        });
    });
})