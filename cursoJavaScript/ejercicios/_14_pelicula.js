/*
27) Programa una clase llamada Pelicula.

La clase recibira un objeto al momento de instanciarse con los siguentes datos: 
id de la pelicula, titulo, director, fecha de estreno, pais de origen, 
generos y calificacion.
  - Todos los datos del objeto son obligatorios.
  - Valida que el id tenga 9 caracteres, los primeros caracteres seran 2 letras mayusculas 
    y los 7 restantes valores numericos.
  - Valida que el titulo tenga de 1 - 100 caracteres alfabeticos.
  - Valida que el director tenga de 1 - 50 caracteres.
  - Valida que la fecha de estreno tenga el formato (dd/MM/aaaa).
  - Crea un metodo estatico que consulte todos los generos disponibles.
  - Valida que la calificacion sea un numero entre 0 - 10 pudiendo ser 
    decimal de una posicion.

  - Crea un metodo que devuelva toda la ficha tecnica de la pelicula con formato.

* Generos Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,
Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, 
Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.
*/

class Pelicula{
    
    /**
     * Metodo Constructor
     * 
     * @param {string} id - codigo identificador de la pelicula
     * @param {string} titulo - titulo de la pelicula
     * @param {string} director - nombre del director de pelicula
     * @param {string} fechaEstreno - fecha de estreno de la pelicula (dd/MM/aaaa)
     * @param {string} pais - pais de origen
     * @param {Array} generos - generos de la pelicula
     * @param {number} calificacion - calificacion de la pelicula (0-10) zero siendo mala y 10 muy buena
     */
    constructor(id,titulo,director,fechaEstreno,pais,generos,calificacion){
        this.setId = id
        this.setTitulo = titulo
        this.setDirector = director
        this.setFechaEstreno = fechaEstreno
        this._pais = pais
        this._generos = generos
        this.setCalificacion = calificacion        
    }  

    //METODOS SET
    set setId(id){
        if(this.#validarID(id)){
            this._id = id;
        }else{
            throw new FormatException('El id debe tener 2 letras mayusculas seguido de 7 valores numericos, formato esperado: AB1234567')
        }
    }
    set setTitulo(titulo){
        if(this.#validarTitulo(titulo)){
            this._titulo = titulo
        }else{
            throw new FormatException('El titulo debe tener (1-100) caracteres alfabeticos')
        }
    }
    set setDirector(director){
        if(this.#validarDirector(director)){
            this._director = director
        }else{
            throw new FormatException('El director debe tener (1-50) caracteres alfabeticos')
        }
    }
    set setFechaEstreno(fechaEstreno){
        if(this.#validarFecha(fechaEstreno)){
            this._fechaEstreno = fechaEstreno
        }else{
            throw new FormatException('Error de formato de fecha, formato esperado: dd/MM/aaaa')
        }
    }
    set setCalificacion(calificacion){
        if(this.#validarCalificacion(calificacion)){
            this._calificacion = calificacion
        }else{
            throw new FormatException('La putuacion debe estar en un rango de (0-10) con opcion a tener un decimal')
        }
    }

    /**
     * Este metodo consulta todos los generos que estan disponibles para peliculas.
     * 
     * @returns {Array} un arreglo con todos los generos 
     */
    static consultarGeneros=()=>{
        let regex = /[A-z]{1,}/g
        const generos = `Action, Adult, Adventure, Animation, Biography, Comedy, Crime, 
            Documentary,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, 
            Music, Mystery, News, Reality-TV,Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.`
        return generos.match(regex)    
    }

    /**
     * Este metodo evalua si el nombre de un director cumple la normativa de empresa.
     *  - Debe ser unicamente alfabetico
     *  - Debe tener (1 - 50) caracteres 
     * 
     * @param {string} director - nombre del director de la pelicula
     * @returns {boolean} 
     */
    #validarDirector(director){
        let regex = /^[A-z\ ]{1,50}$/
        return regex.test(director)
    }

    /**
     * Este metodo evalua si un titulo cumple la normativa de empresa.
     *  - Debe ser alfabetico
     *  - Debe tener (1 - 100) caracteres 
     * @param {string} titulo - titulo de la pelicula
     * @returns {boolean} 
     */
    #validarTitulo(titulo){
        let regex = /^[A-z\ ]{1,100}$/
        return regex.test(titulo)
    }

    /**
     * Este metodo valida el codigo de la pelicula de la siguiente manera segun la politica de empresa.
     * dos letras mayusculas seguidas de 7 numeros: ejemplo(AB1234567) 
     * 
     * @param {string} id - codigo identificador
     * @returns {boolean} true si el codigo es correcto y false en caso contrario
     */
    #validarID(id){
        let regex = /^[A-Z]{2}\d{7}$/
        return regex.test(id)
    }

    /**
     * Este metodo valida que una fecha cumpla la normativa de empresa.
     *  - Formato (dd/MM/aaaa)
     *  
     * @param {string} fecha - fecha (dd/MM/aaaa)
     * @returns {boolean} - retorna true si la fecha es correcta y false en caso contrario.
     */
    #validarFecha(fecha){
        let regex = /^\d{1,2}\/\d{1,2}\/\d{4}$/
        if(regex.test(fecha)){
            return true
        }else{
            return false
        }
    }

    /**
     * Este metodo valida la calificacion de una pelicula segun la normativa de la empresa.
     * la calificacion sera valida si esta en el rango de (0 - 10) pudiendo ser decimal de una posicion,
     * siendo 0 muy mala y 10 muy buena
     * 
     * @param {Number} calificacion - (0-10) pudiendo tener 1 decimal 
     * @returns {boolean} true si cumple la normativa de empresa y false en caso contrario
     */
    #validarCalificacion (calificacion=''){
        let cal = calificacion.toString()
        let regex =/^[0-9]{1}\.[0-9]{1}$|10$|^[0-9]{1}$/
        return regex.test(cal)
    }
    /**
     * Este metodo muestra toda la informacion de una pelicula
     * 
     * @returns {string} la ficha tecnica de una pelicula con formato
     */
    getInfo(){
        let info = `ID: ${this._id}\nPelicula: ${this._titulo}\nDirector: ${this._director}`+
        `\nFecha de estreno: ${this._fechaEstreno}\nPais de origen: ${this._pais}`+
        `\nGenero: ${this._generos}\nCalificacion global: ${this._calificacion}`
        return info
    }
    
}
/**
 * Excepcion de formato incorrecto
 */
class FormatException extends Error{
    constructor(msg){
        super(msg)
        this.name ='FormatException'
    }
}
let peli = new Pelicula('AB1524568','Harry Potter','Vin Diesel','25/08/2005','EEUU',['Fantasy','Comedy'],1)

console.log(peli)
console.log(peli.getInfo())

