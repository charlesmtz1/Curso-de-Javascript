//Curso Javascript: Eventos

document.getElementById("botoncito").addEventListener("click", clic, false);    //Se manda a llamar el objeto por ID, posteriormente

document.getElementById("mi_div").addEventListener("click", another, true);

function clic(){
  alert("Hola");
}

function another(){
  alert("Div");
}