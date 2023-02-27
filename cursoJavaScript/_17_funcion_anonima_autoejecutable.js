//Es necesario poner ;
(function(){
    console.log('Primera funcion anonima auto-ejecutable')
})();
//con parametros
(function(d,w,c){
    console.log('Segunda funcion anonima auto-ejecutable')
    console.log(d)
    console.log(w)
    console.log(c)
})(document,window,console);

//DIFERENTES FORMAS DE ESCRIBIR LAS FUNCIONES ANONIMAS AUTO-EJECUTABLES
//Clasica
(function(){
    console.log('Version Clasica')
})();

//La Crockford(JavaScript The Good Parts)
((function(){
    console.log('Version Crockford')
})());

//Unaria
+function(){
    console.log('Version Unaria')
}();

//Facebook
!function(){
    console.log('Version Facebook')
}();