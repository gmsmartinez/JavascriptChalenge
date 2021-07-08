var numeroAleatorio = document.querySelector("#numeroAleatorio");
var numero = 0;

/*numeros aleatorios: el objeto math permite realizar
tareas matematicas en los numeros
arroja un numero aleatorio entre 0.0 (inclusive) hasta el 1 exclusive*/
//match.ceil=redondea el numero mayor del decimal
//math.round=redondea pero lo devuelve el valor x a su numero entero mas proximo

/* lo mismo con decimales:
numero = Math.random()*100;*/

numero = Math.ceil(Math.random()*10);
numeroAleatorio.innerHTML = numero;
//console.log("numero", numero);

