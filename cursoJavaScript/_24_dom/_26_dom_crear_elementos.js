let div = document.createElement('div');
let header = document.createElement('header');
let h1 = document.createElement('h1');

//agregando nodos hijos
div.appendChild(header)
header.appendChild(h1)

div.className = 'card'//agregando atributo
div.setAttribute('id','card-5')//agregando atributo v2

h1.textContent = ' Testing';
console.log(div)

//insertar elementos en el documento HTML
document.body.appendChild(div)

//eliminar un elemeto del HTML
let title1 = document.getElementById('card-1')
title1.remove()
console.log(title1)
