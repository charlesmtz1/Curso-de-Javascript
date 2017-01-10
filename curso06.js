//Curso Javascript: Ciclo For

var arreglo = ["Hola", "Mundo!"];

console.log("--------------------------------");    //Todos los ejemplos mostrados solo pueden ser visualizados en Codepen

for(var x = 0; x < 10; x++){    //El ciclo For es similar a PHP, Java y C++;
  console.log("Valor: " + x);
}

for(var x = 0; x < 10; x++){    //La instruccion Continue funciona de igual forma que en el ciclo While y Do While
  if(x % 2 != 0)
    continue;
  console.log(x);
}

for(var x = 0; x < 10; x++){    //La instruccion Break funciona de igual forma que en el ciclo While y Do While
  if(x == 5)
    break;
  console.log(x);
}

for(var x = 0; x < arreglo.length; x++){    //Se puede utilizar el ciclo For para acceder a los elementos de un arreglo
  console.log(arreglo[x]);
}