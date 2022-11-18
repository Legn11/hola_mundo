// En esta sección se desarrollan las funciones para la interfaz de cola

// variables globales para cola
let contenedor = [];
let max = 6;
let frente = 0;
let final = 0;

function cola() {
  var valor = document.getElementById("numcola").value;

  if (valor > 99 || valor < 0) {
    alert("El numero introducido debe ser de 1 a 99");
   }else{
    if (valor === "") {
      alert("Debe introducir un numero de 1 a 99 para poder continuar");
    }else{
  if (frente === 1 && final === max || frente === final + 1 ){
    alert("pila llena");
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
    }
    document.getElementById("numcola").value = "";
    document.getElementById("resultado").innerHTML = " ";
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
  document.getElementById("resultado").innerHTML += "<p>" + "Cola:  " + contenedor + "</p>";
  document.getElementById("resultado").innerHTML += "<p>" + "Frente:  " + frente + "  " + "Final:  " + final + "</p>";
//   document.getElementById("resultado").innerHTML += "<p>" + "final:  " + final + "</p>";
}
// Esta funcion vacia el contenido del arreglo y reinicia a 0 la variable cima.
function restablecer() {
  var item = document.getElementById("numcola").value;
  document.getElementById("resultado").innerHTML = " ";
  for (let i = 1; final > 0; i++) {
    if (final > 0 ) {
      contenedor.pop(contenedor);
      final  = final - 1;
      frente = 0;
    }
  }

}