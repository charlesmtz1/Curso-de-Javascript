//Curso Javascript: Operadores aritmeticos y funciones Math

var numero1 = 28;
var numero2 = 15.5;

//Ejemplos de operadores aritmeticos (Solo visibles en Codepen)
console.log(numero1 + 12);
console.log(numero1 - numero2);
console.log(numero1 * 2);
console.log(numero1 / 2);
console.log(numero1 % 2);

/*Funciones Math
  random: Genera numeros aleatorios
  pow: Eleva un numero a la potencia definida
  sqrt: Raiz cuadrada de un numero
  PI: Numero Pi
  floor: Redondea un numero abajo
  ceil: Redondea un numero arriba
  round: Redondea un numero en base a decimales.
*/

//Ejemplos de Math (Solo visibles en Codepen)
console.log(Math.random());
console.log(Math.pow(2,2))
console.log(Math.sqrt(4));
console.log(Math.PI);
console.log(Math.floor(0.4));
console.log(Math.ceil(0.5));
console.log(Math.round(0.4));

//Funcion de ejemplo para determinar un numero par. La sintaxis es similar a PHP.
par(28);

function par(num){
  if(num % 2 == 0)
    console.log("El numero es par!");
  else
    console.log("El numero no es par");
}