//Curso Javascript: Ciclo While y Do While.

var contador = 0;
var contador2 = 0;
var contador3 = 0;

console.log("------------------------");//Todos los ejemplos mostrados solo pueden ser visualizados en Codepen

console.log("Primer While con numeros pares");  //El ciclo While es similar a PHP, Java y C++.
while(contador < 10){   //El ciclo  While se ejecuta mientras se cumpla la condicion dada. Sale de el hasta que la condicion no se cumpla.
  contador++;
  if(contador % 2 != 0)
    continue;       //La instruccion continue hace que ejecute la siguiente iteracion del ciclo, omitiendo todas las lineas de codigo posteriores a esta.
  console.log(contador);
}

console.log("Segundo While con numeros impares");
while(true){
      contador2++;
      if(contador2 % 2 != 0)
        console.log(contador2);
      if(contador2 >= 10)
        break;      //La instruccion break provoca que se rompa el ciclo y ya no se ejecute.
}

console.log("Manejo de Do-While")       //El ciclo DO While es similar a PHP, Java y C++.
do{     //El ciclo Do While se ejecuta por lo menos una vez, y posteriormente hace la evaluacion para continuar el ciclo o salir de el.
  contador3++;
  console.log(contador3);
}while(contador3 < 5);