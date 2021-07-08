// VARIABLES NUMERICAS

var numero = 5;
console.log("numero", numero);

//VARIABLES DE TEXTO

var palabra = "palabras tontas";
console.log("palabra", palabra);

//VARIABLES BOLEANAS arrojan dos valores. falso o verdadero

var boleana = true;
console.log ("boleana", boleana);

//VARIABLES DE TIPO ARREGLO (array), estas me permiten almacenar mas de una informacion

var colores = ["rojo", "amarillo"]
console.log ("colores", colores);
//y para especificar que me traiga solo un color, lo llamo por el orden. Así:
//console.log ("colores", colores[0]);


//VARIABLES DE TIPO DE OBJETO (object: trae la propiedad y el valor de esa propiedad que hace ese objeto. los ingredientes son una propiedad)

var jugo = {ingrediente1:"fresa",
            ingrediente2:"mandarina",
            ingrediente3:"banana"}
console.log ("jugo", jugo.ingrediente3);
//y para acceder a un solo ingrediente se hace así:
//console.log ("jugo", jugo.ingrediente1);



//VARIABLES DOM (MODELO DE OBJETOS DEL DOCUMENTO)
/*Es la estructura de objetos que genera el navegador
cuando se carga un documento y se puede alterar mediante
javascript para cambiar dinamicamente los contenidos y 
aspectos de la pagina*/

var caja = document.querySelector("#caja");
console.log("caja", caja);

caja.style.width = "200px";
caja.style.height = "200px";
caja.style.background = "red";

var cajas = document.querySelectorAll(".cajas");
console.log("cajas", cajas);


