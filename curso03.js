//Curso Javascript: Manejo de cadenas.

var nombre = "Carlos";
var nombre2 = "Rei";
var saludo = "Hola";

//Se ejemplifican diferentes herramientas para manejar cadenas (Solo visibles en Codepen).
console.log(saludo + " " + nombre);     //Se pueden concatenar cadenas predefinidas o en variables.
console.log(nombre.length);             //Regresa el numero de caracteres que contiene la cadena.
console.log(nombre2.charAt(0));         //Regresa el caracter que se encuentra en la posicion especifivada.

console.log(nombre.slice(0,2));         //Regresa los caracteres ubicados entre las posiciones especificados.
console.log(nombre2.toUpperCase());     //Cambia la cadena a mayusculas.
console.log(nombre2.toLowerCase());     //Cambia la cadena a minusculas.

compara("Carlos");

function compara(name) {
    if(nombre.indexOf(name) == 0)       //Compara si la cadena especificada es igual a la variable de cadena.
        console.log("Los nombres coinciden!");
    else
        console.log("No coinciden los nombres");    
}