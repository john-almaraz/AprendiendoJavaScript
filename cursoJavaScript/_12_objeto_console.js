console.log(console)
console.warn('Esto es un warm')
console.error('Esto es un error')
console.info('Esto es un mensaje de informacion')
console.log('Un registro de lo que ha pasado en nuestra aplicacion')
console.log(document)
console.dir(document)//Esto representa como un objeto
//Creamos un grupo de consolas
console.group()
console.log('Java')
console.log('JavaScript')
console.log('PHP')
console.groupEnd() //Cerramos el grupo
//---------------------
console.log('Swift')

//Creamos una tabla de todas las propiedades del objeto console
console.table(Object.entries(console).sort())

//Creamos una tabla de un array
const array = [1,'Hello',true,1.2]
console.table(array)

//Time
console.time('Cuanto tiempo tarda mi codigo')
const array2 = Array(1_000)
for(let i = 0 ; i<array2.length;i++){
    array2[i] = i
}
console.timeEnd('Cuanto tiempo tarda mi codigo')
console.clear()//Limpiamos la consola
let x = 3 , y = 2, prueba = 'Se espera que \'X\' siempre sea menor que \'Y\''
console.assert(x<y,{x,y,prueba})

