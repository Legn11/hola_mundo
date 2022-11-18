//En esta sección se desarrollan las funciones para la interfaz de pila

// Variables globales para la construccion de la PILA
let almacen = [];
const tamaño = 6;
let cima = 0;
// Función que introduce elementos en la Pila
function pila() {
  var item = document.getElementById("numeros").value;
  if (item > 99 || item < 0) {
    alert("El numero introducido debe ser de 1 a 99");
  } else {
    if (item === "") {
      alert("Debe introducir un numero de 1 a 99 para poder continuar");
    } else {
      if (cima === tamaño) {
        alert("La pila esta llena, elimine un elemento para continuar");
      } else {
        cima = cima + 1;
        almacen.push(item);
        console.log(almacen);
      }
    }
  }
  document.getElementById("numeros").value = "";
  document.getElementById("resultado").innerHTML = " ";
}
// Esta Funcion que saca los elementos de la pila
function sacar() {
  var item = document.getElementById("numeros").value;
  if (cima === 0) {
    console.log("pila vacia")
  } else {
    almacen.pop(item);
    cima = cima - 1;
    console.log(almacen)
  }
}
// Esta funcion muestra el estado actual de la pila y la variable cima.
function ver() {
  document.getElementById("resultado").innerHTML += "<p>" + "Pila:  " + almacen + "</p>";
  document.getElementById("resultado").innerHTML += "<p>" + "cima:  " + cima + "</p>";
}
// Esta funcion vacia el contenido del arreglo y reinicia a 0 la variable cima.
function reiniciar() {
  var item = document.getElementById("numeros").value;
  document.getElementById("resultado").innerHTML = " ";
  for (let i = 1; cima > 0; i++) {
    if (cima > 0) {
      almacen.pop(item);
      cima = cima - 1;
    }
  }
}
