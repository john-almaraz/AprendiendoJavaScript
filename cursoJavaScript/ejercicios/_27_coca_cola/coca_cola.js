const bebidas = document.querySelectorAll('.product-img');
const resumeProducts = document.querySelector('.resume-products');
const botonPagar = document.getElementById('pagar')
const screenMoney = document.getElementById('dinero-ingresado')
const botonesDinero = document.querySelectorAll('.button-money')
const totalPrice = document.getElementById('total-price')

/**
 * Selecciona un producto y lo agrega al resumen de compra
 * 
 * @param {Event} evento 
 */
const selectProduct = (evento)=>{
    let nameProduct = evento.target.alt
    let priceProduct = evento.target.title
    
    
    //verificamos si es el primer producto en la tabla de resumen
    if(document.querySelector('.pro-name-1').textContent === ''){
        //busqueda de etiquetas
        let tr = document.querySelector('#product-1')
        let tdName = document.querySelector('.pro-name-1')
        let tdUds = document.querySelector('.pro-uds-1')
        let tdPrice = document.querySelector('.pro-price-1')        
        //modificacion de propiedades
        tdName.textContent = nameProduct
        tdUds.textContent = 1
        tdPrice.textContent = priceProduct
        tr.id = 'tr-'+nameProduct
        tdName.id='td-name-'+nameProduct
        tdUds.id='td-uds-'+nameProduct
        tdPrice.id='td-price-'+nameProduct        
    }else{
        //creacion de una nueva fila
        let id = 'tr-'+nameProduct
        if(document.getElementById(id) === null){
            let tr = document.createElement('tr')
            let tdName = document.createElement('td')
            let tdUds = document.createElement('td')
            let tdPrice = document.createElement('td')
            
            //modificacion de propiedades            
            tdName.textContent = nameProduct        
            tdUds.textContent = 1        
            tdPrice.textContent = priceProduct
            tr.id = 'tr-'+nameProduct
            tdName.id='td-name-'+nameProduct
            tdUds.id='td-uds-'+nameProduct
            tdPrice.id='td-price-'+nameProduct  

            //agregar al documento
            tr.appendChild(tdName)
            tr.appendChild(tdUds)    
            tr.appendChild(tdPrice)        
            resumeProducts.appendChild(tr)
            
        }else{
            //busqueda de los elementos a modificar
            let uds = document.getElementById(`td-uds-${nameProduct}`)
            uds.textContent = parseInt(uds.textContent)+1
            //sumamos la unidad y actualizamos el precio
        }        
        
    }
    totalPrice.textContent = separarDigitos(priceProduct)+parseInt(separarDigitos(totalPrice.textContent))+'$'
   
}
/**
 * Agrega monedas a la maquina expendedora
 * 
 * @param {Event} evento 
 */
const addMoney = (evento)=>{
    let valueButton = separarDigitos(evento.target.textContent)
    console.log(valueButton)
    screenMoney.textContent = valueButton + separarDigitos(screenMoney.textContent)+'$'
}
/**
 * Realiza una compra.
 * 
 */
const pay =()=>{
    if(checkCompra()){
        let total = separarDigitos(totalPrice.textContent)
        let dineroIngresado = separarDigitos(screenMoney.textContent)
        if(total > dineroIngresado){
            alert(`Debe ingresar ${total-dineroIngresado}$ para realizar la compra`)
        }else{
            alert(`Pago realizado correctamente.Recoja su cambio ${dineroIngresado-total}$`)
            location.reload()
        }
    }else{
        alert('Debe seleccionar un producto antes de pagar')
    }
}
/**
 * Verifica si la lista de compra esta vacia.
 * 
 * @returns verdadero si el resumen de compra tiene elementos y false en caso contrario
 */
const checkCompra = ()=>{    
    if(document.querySelector('.pro-name-1').textContent === ''){
       return false 
    }else{
        return true
    }
}

/**
 * Este metodo separa todos los valores numericos
 * 
 * @param {string} string - cadena de texto
 * @returns {number} retorna los valores numericos de una cadena de texto
 */
const separarDigitos =(string)=>{
    let regex = /\d{1,}/
    let num = regex.exec(string)
    return parseInt(num[0])
}
bebidas.forEach((e)=>e.addEventListener('click',selectProduct))
botonesDinero.forEach((e)=>e.addEventListener('click',addMoney))
botonPagar.addEventListener('click',pay)