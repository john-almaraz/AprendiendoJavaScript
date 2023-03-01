/*
16) Programa una funcion que devuelva el monto final después de aplicar 
un descuento a una cantidad dada, miFuncion(1000, 20) devolverá 800.
*/

/**
 * Este metodo aplica un descuento a una cantidad numerica.
 * 
 * @param {Number} price - precio original 
 * @param {Number} descount - descuento
 * @returns {Number} el precio final despues de aplicar el descuento
 */
const aplicarDescuento = (price=undefined,descount=undefined)=>
    (isNaN(price) || isNaN(descount))?console.warn('Los parametros deben ser de tipo numerico'):
    (price === null || descount === null)?console.warn('Los parametros no deben ser nulos'):
    (price <= 0)?console.warn("El parametro 'price' debe ser un numero mayor que 0"):
    (descount<1 || descount >100)?console.warn("El parametro 'descount' debe estar en un rango de 1 - 100"):
    (price-price*descount/100);

console.log(aplicarDescuento(1000,20))