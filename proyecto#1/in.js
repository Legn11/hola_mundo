// let item = document.getElementById("numeros").value;
let almacen = [];
const tamaño = 6;
let cima = 0;

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
function ver() {
  document.getElementById("resultado").innerHTML += "<p>" + "Pila:  " + almacen + "</p>";
  document.getElementById("resultado").innerHTML += "<p>" + "cima:  " + cima + "</p>";
}
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