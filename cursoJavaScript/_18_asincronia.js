//Se ejecuta 1 sola vez
let time = setTimeout(()=>{console.log('Ejecutando setTimeout con 3 segundos')},3000)
clearTimeout(time);//elimina el timeout

//Se ejecuta por intervalos
let interval = setInterval(() => {
    let time =new Date()
    console.log(time.toLocaleTimeString())    
}, 2000);
clearInterval(interval);//elimina el intervalo

/**
 Codigo sincrono bloqueante -> se ejecuta cada tarea bloqueando el hilo principal.
 El control del hilo principal sera liberado al finalizar todas las tareas pendientes
*/
(()=>{
    console.log('Codigo sincrono bloqueante');
    console.log('Inicio');
    function uno(){
        console.log('Uno');
        dos();
        console.log('Tres');
    }
    function dos(){
        console.log('Dos');
    }
    uno();
    console.log('Fin');
})();

/*
 Codigo asincrono no bloqueante -> los setTimeout se ejecutan en segundo plano dejando libre el
 hilo principal, cada setTimeout sera ejecutado cuando los metodos bloqueantes(console.log()) hayan
 terminado su ejecucion
*/
(()=>{
    console.log('Codigo asincrono no bloqueante');
    console.log('Inicio');
    function uno(){
        setTimeout(function(){
            console.log('Uno');
        }, 0);
        dos();
        console.log('Tres');
    }
    function dos(){
        setTimeout(function(){
            console.log('Dos');
        },1_000)
    }
    uno();
    console.log('Fin');
})();
