//CONDICIONES (Nos ayuda a diferenciar lo que puede suceder entre dos variables)

var a = 5;
var b = 10;

if (a > b){
    console.log("a es mayor que b")

}else if(a == b){
    console.log("a es lo mismo que b")

}else{
    console.log ("a no es lo mismo que b, y a es menor que b")
}

/*si utilizo if, lo completo con else
pero si utilzo else if, sí debo completar con else */



//CAMBIOS

var dia ="lunes";
switch(dia){

    case "sabado":
    console.log("voy a estudiar php");
    break;

    case "martes":
    console.log("voy a estudiar css");
    break;

    case "jueves":
    console.log("voy a estudiar html");
    break;

    case "lunes":
    console.log("voy a descansar");
    break;

    default: console.log("voy a estudiar javascript");
    /*con default doy la pauta de que si ninguno de los dias
    se cumplió, va a tirar "voy a estudiar js" pero en este caso
    puse "lunes" y para lunes ya tenía definido una acción.*/
}



