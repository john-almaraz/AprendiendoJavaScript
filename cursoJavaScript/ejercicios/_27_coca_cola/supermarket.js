const bebidas = document.querySelectorAll('.product-img')

const selectProduct = (evento)=>{
    let nameProduct = evento.target.title
    console.log(nameProduct)
}
bebidas.forEach((e)=>e.addEventListener('click',selectProduct))

