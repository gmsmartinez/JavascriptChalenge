var tiempo = document.querySelector("#tiempo");
var segundos = 0;


//SET INTERVAL (INTERVALO DE TIEMPO)
//TIENE DOS PARAMETROS (PRIMER PARAMETRO: FUNCION O TAREA QUE NECESITO QUE SE EJECUTE)
//SEGUNDO PARAMETRO: EL TIEMPO EN LA QUE LA VA A REPETIR. X VECES.

var intervalo = setInterval(function(){
    
    segundos++;

    tiempo.innerHTML = segundos;

},1000)



//SET TIMEOUT (RETARDO DE TIEMPO)

setTimeout(function(){
   // alert("se cumplió el tiempo")
    
   clearInterval(intervalo);

},5000)
