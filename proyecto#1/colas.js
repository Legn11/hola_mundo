// En esta sección se desarrollan las funciones para la interfaz de cola

// variables globales para cola
let contenedor = [];
let max = 0;
let frente = 0;
let final = 0;

function cola() {
  var valor = document.getElementById("numcola").value;
  if (frente === 1 && final === max || frente === final + 1 ){
    console.log("pila llena");
  }else{
      if(frente === 0 && final === 0){
        frente = 1;
        final  = 1; 
      }else{
        if(final === max){
          final = 1;
        }else{
            final = final + 1;
            }
          }
          contenedor.push(valor);
          console.log(contenedor);
        }
      }
      // Esta funcion controla la eliminación de elementos.
      function eliminar(){
        var valor = document.getElementById("numcola").value;

        if( frente === 0 && final === 0){
          console.log("cola vacia");
        }else{
          contenedor.shift(valor);
          if(frente === final){
          frente = 0;
          final  = 0;
          console.log(contenedor);
        }else{
          if( frente === max){
            frente = 1;
          }else{
            frente = frente + 1;
          }
        }
        console.log(contenedor);
      }
    }
    // Esta funcion muestra el estado actual de la pila y la variable cima.
function visualizar() {
  document.getElementById("resultado").innerHTML += "<p>" + "Pila:  " + contenedor + "</p>";
  document.getElementById("resultado").innerHTML += "<p>" + "cima:  " + cima + "</p>";
}
// Esta funcion vacia el contenido del arreglo y reinicia a 0 la variable cima.
function restablecer() {
  var item = document.getElementById("numcola").value;
  document.getElementById("resultado").innerHTML = " ";
  for (let i = 1; cima > 0; i++) {
    if (cima > 0) {
      almacen.pop(item);
      cima = cima - 1;
    }
  }
}