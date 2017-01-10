//Curso Javascript: Seleccionar elementos en el DOM(Document Object Model)
//Seleccionar metodos del DOM nos permite modificar o trabajar con los elementos de una pagina HTML.
//No es necesario guardar siempre en una variable y los resultados e impresiones pueden no ejecutarse correctamente. El codigo es de caracter demostrativo.

var div = document.getElementById("mi_div");    //Selecciona un elemento HTML que contenga el ID mi_div y lo guarda en una variable
div.classList.add("mi_clase");                  //Anexa a nuestra variable una clase que se llamara mi_clase

var div2 = document.getElementsByClassName("mi_clase");  //Selecciona un elemento HTML que contenga la clase mi_clase y lo guarda en una variable
console.log(div2);       //Imprime en consola el valor de la variable div2 y el resultado de nuestra seleccion

var div3 = document.getElementsByTagName("div");     //Selecciona un elemento HTML que contenga una etiqueta div y lo guarda en una variable
console.log(div3);      //Imprime en consola el valor de la variable div3 y el resultado de nuestra seleccion.

var mi_clase = document.querySelector(".mi_clase");     //Busca en nuestro HTML un elemento que contenga la clase especificada.
console.log(mi_clase);      //Imprime la etiqueta en consola, resultado de la busqueda del querySelector


function $(selector){   //Funcion que simula un jQuery. La creacion de la funcion es similar a PHP.
    return document.querySelector(selector);        //La funcion retornara el resultado de la busqueda con querySelector.
}

var mi_clase = $("p");      //Se asigna a una variable el valor que va a retornar nuestra funcion tipo jQuery.
console.log(mi_clase);      //Se imprime en consola el resultado de la busqueda.