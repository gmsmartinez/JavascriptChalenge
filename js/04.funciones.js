/*FUNCIONES SIN PARAMETROS
PRIMER CUERPO: CUANDO DECLARAMOS LA FUNCION
SEGUNDO CUERPO: CUANDO EJECUTAMOS LA FUNCION
*/

var globales = 10;
console.log("globales", globales);

//declaramos la funcion
function saludo (){
    //tarea de la funcion
    console.log("saludo","hola boluda")
}
//ejecutamos la funcion
saludo();

/*FUNCIONES CON PARAMETROS: son las que me van a permitir
enviar valores dentro de los parentesis */
function operacion(digito1, digito2){

    var resultado = digito1 + digito2;
    globales = resultado;
    console.log("globales_operacion", globales);
    console.log("resultado", resultado);

}
operacion(5,7);
operacion(10,5);

/*FUNCIONES CON RETORNO SIN PARAMETROS:
son funciones que retornan valores.
eso es lo que hace una funcion con retorno,
darle valor a la funcion y poder utilizar
ese valor, por fuera, en alguna otra tarea*/

function retorno1(){
    var numero = 5;
    return numero;
    /*return true; tambien puedo usarlo así*/
}
console.log(retorno1())

//FUNCIONES CON RETORNO Y CON PARAMETROS
function retorno2(numero){
    return numero;
}
console.log(retorno2(10)); /*en lugar de 10 puedo poner true o "pedro", o sea, un string*/
console.log(retorno2(20));
console.log(retorno2(30));

