
try{
    isNaN(x)
}catch(error){
    console.log(error)
}finally{
    console.log('El bloque finally siempre se ejecuta')
}

let num = "xyz"
if(isNaN(num)){
    throw new Error(`El caracter ${num} no es un numero`)
}