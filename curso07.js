//Curso Javascript: typeof, null y undefined

var numero =  0;

//Typeof permite extraer el tipo de una variable declarada(Number, Object, String, Undefined). Puede ser utilizado para comparaciones e impresiones.
//Null permite asignar "nada" a una variable. Puede ser utilizado para comparaciones y validaciones.
//Undefined no se declara como variable, sin embargo puede  utilizarse para comparaciones y validaciones cuando una variable no esta declarada.

console.log(typeof numero);     //Imprime el tipo de variable de "numero"

if (typeof hola == "undefined"){    //Verifica si la variable "hola" esta como Undefined(No declarada) e imprime un mensaje con el resultado.
  console.log("No se ha declarado la variable!");
} else
  console.log("hola si esta declarado!");