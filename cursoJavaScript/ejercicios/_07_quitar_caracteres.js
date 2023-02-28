/*
7) Programa una función que elimine cierto patron de caracteres de un texto dado,
miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
 */

/**
 * Este metodo quita los caracteres no deseados de una cadena de texto.
 * 
 * @param {String} cadena - cadena de texto
 * @param {String} patron - caracteres que se quitan
 * @returns {String} cadena de texto modificada
 */
const quitarCaracteres = (cadena="",patron="")=>
    (!cadena)?console.warn("cadena no debe estar vacia"):
    (!patron)?console.warn("patron no deber estar vacio"):
    cadena.replace(new RegExp(patron,"ig"),"");

console.log(quitarCaracteres('xyz1 - xyz2 - xyz3','xyz'))