/*
20) Programa una funcion que valide que un texto sea un email valido, 
miFuncion("correo_electronico45@gmail.com") devolvera verdadero.
*/

/**
 * Este metodo valida un correo electronico
 * @param {string} email - correo electronico
 * @returns {boolean} true si el email es correcto y false en caso contrario
 * 
 */
const checkEmail = (email)=>{
    let regex = /\w*@\w*\.\w{2,}/

    return regex.test(email)
}
let email = 'correo_electronico45@.gmailcom'
console.log(checkEmail(email))