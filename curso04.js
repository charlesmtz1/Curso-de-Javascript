//Curso Javascript: Condicionales

var numero1 = 10;
var numero2 = 15;
var numero3 = 15;

console.log("----------------");
///////////////////////////////////////////////////////////////////////////
//Condicional de mayor y menor que
if(numero1 < numero2){
   console.log("Esta condicion es verdadera");
   }else{
     console.log("Esta condicion es falsa");
   }

///////////////////////////////////////////////////////////////////////////
//Condicional AND, para que funcione, ambas condiciones deben ser verdaderas
if(numero1 == 10 && numero2 == 16){
  console.log("Ambos son verdaderos");
}else{
  console.log("Una de los dos condiciones son falsas");
}

///////////////////////////////////////////////////////////////////////////
//Condicional OR, para que funcione, solo es necesario que una condicion sea verdadera
if(numero1 == 10 || numero2 == 16){
  console.log("Al menos una de las condiciones es verdadera");
}else{
  console.log("Ambas condiciones son falsas");
}

///////////////////////////////////////////////////////////////////////////
//Condicional para comparar que tanto el valor como el tipo sean iguales
if(numero2 === numero3){
    console.log("Los tipos y valores de ambas variables coinciden");   
   }else{
     console.log("Los tipos y valores de ambas variables no coinciden");
   }

///////////////////////////////////////////////////////////////////////////
//Condicional de negacion NOT
if(!false){
   console.log("La condicion es verdadera");
   }