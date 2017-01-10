//Curso Javascript: Uso de prompt y Ejercicio de ejemplo.
/*
    Ejercicio donde se pone a prueba lo visto hasta el momento en las entregas anteriores.
    Detalles del ejercicio:
    0.- El usuario debera adivinar un numero que se generara de forma aleatoria dek 1 al 100.
    1.- Al cargar la pagina HTML, mostrara una ventana emergente en pantalla.
    2.- El usuario debera escribir un numero entre el 1 y el 100.
    3.- Si el usuario adivina, mostrara un mensaje de enhorabuena y finalazara la aplicacion.
    4.- Si el usuario no adivina, se le invitara a escribir nuevamente un numero.
    5.- Si el usuario escribe 0, finaliza la aplicacion mostrando un mensaje de despedida.
    6.- Cualquier otro caracter diferente a un numero o que sea mayor a 100 o menor a 0, mostrara un error y se debera volver a intentar.
*/

var max = 100;      //Se define el numero maximo en la aplicacion.
var min = 1;        //Se define el numero minimo en la aplicacion.
var num_secreto = Math.random() * max;      //Se genera el numero aleatorio el cual sera el que el usuario adivinara y se multiplica por 100 .
var mensaje = "Escribe un numero entre el 1 y el 100 (Escribe 0 y saldras del juego):";     //Este sera el mensaje inicial de la aplicacion en el prompt.

num_secreto = parseInt(num_secreto);    //El numero secreto se transforma en un numero entero sin decimales.

console.log(num_secreto);       //Se imprime el numero en consola, esto solo como material de auxilio para el programador.

while(true){        //La aplicacion se ejecutara por cada intento que se realice, a menos que se adivine el numero o 
    var num_usuario = prompt(mensaje,"");       //Se invoca un prompt con el mensaje inicial. En este prompt el usuario escribira su numero.

    //num_usuario = parseInt(num_usuario);

    if(num_usuario == num_secreto){     //Si el numero ingresado por el usuario es igual al numero aleatorio generado, el usuario habra ganado y finaliza la aplicacion.
        alert("Felicidades, haz adivinado el numero secreto!");
        break;      //Fin de la aplicacion.
    }else if(num_usuario == 0){         //Si el numero ingresado es 0, finaliza la aplicacion.
        alert("Hasta pronto!");
        break;      //Fin de la aplicacion.
    }else if(num_usuario > 100 ){       //Si el numero es mayor a 100, se mostrara un mensaje de error y se pide al usuario ingresar un numero nuevo.
        mensaje = "Su numero es mayor a 100... Por favor escriba un numero entre el 1 y el 100:";
    }else if(num_usuario < 0){          //Si el numero es menor a 0, se mostrara un mensaje de error y se pide al usuario ingresar un numero nuevo.
        mensaje = "Su numero es menor a 0... Por favor escriba un numero entre el 1 y el 100:"
    }else if(num_usuario > num_secreto){        //Si el usuario escribe un numero mayor al numero aleatorio, se le dara una pista al usuario que su numero es mayor al aleatorio.
        mensaje = "Lo sentimos, el numero que ingresaste es mayor al numero secreto. Vuelve a intentarlo:";
    }else if(num_usuario < num_secreto){        //Si el usuario escribe un numero menor al numero aleatorio, se le dara una pista al usuario que su numero es menor al aleatorio.
        mensaje = "Lo sentimos, el numero que ingresaste es menor al numero secreto. Vuelve a intentarlo:";
    }else if(typeof num_usuario != "number"){   //Si el usuario escribe cualquier caracter que no sea un numero, se mostrara un mensaje de error y se pide al usuario ingresar un numero
        mensaje = "Este programa solo acepta numeros... Por favor escriba un numero entre el 1 y el 100:";
    }
}   //Este While no finalizara hasta que el usuario adivine el numero o escriba el numero 0.