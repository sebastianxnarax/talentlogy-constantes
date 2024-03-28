document.getElementById("respuesta1").addEventListener("click", function () {
  respuesta1();
});
document.getElementById("respuesta2").addEventListener("click", function () {
  respuesta2();
});
document.getElementById("respuesta3").addEventListener("click", function () {
  respuesta3();
});
document.getElementById("respuesta4").addEventListener("click", function () {
  respuesta4();
});
document.getElementById("respuesta5").addEventListener("click", function () {
  respuesta5();
});

//respuesta 1
function respuesta1() {
  //solicitar el numero
  const numero = prompt("introduce un numero entero");
  //mostrar el numero en pantalla
  alert("Has introducido el número: " + numero + ", gracias.");
}

//respuesta 2
function respuesta2() {
  // Solicitar al usuario el precio
  const precioOriginal = prompt("Introduce el precio:");
  // Solicitar al usuario el descuento
  const descuento = prompt("introsuce el porentaje de descuento:");
  // fuencion para calcular el precio con descuento
  function calcularPrecioFinal(precioOriginal, descuento) {
    //pasar el nuemro de descuento  para manejar la formula
    const descuentoDecimal = descuento / 100;
    //formula para calcular el precio
    return precioOriginal - precioOriginal * descuentoDecimal;
  }
  //mostrar al usuario el resultado
  alert(
    "el precio con decuento es  " +
      calcularPrecioFinal(precioOriginal, descuento) +
      "."
  );
}

//respuesta 3
function respuesta3() {
  // Solicitar al usuario un número entero
  const dolares = prompt("Introduce la cantida en dolares:");
  //formula para calcular la convercion
  const euros = dolares * 1.3325;
  //mostrar al usuario el resultado
  alert("su cantidad en euros es: " + euros + ".");
}
//respuesra 4
function respuesta4() {
  // Solicitar al usuario los números enteros
  const numero1 = parseFloat(prompt("Introduce el numero 1:"));
  const numero2 = parseFloat(prompt("Introduce el numero 2:"));
  const numero3 = parseFloat(prompt("Introduce el numero 3:"));
  const numero4 = parseFloat(prompt("Introduce el numero 4:"));
  // Verificar que las conversiones fueron exitosas
  if (isNaN(numero1) || isNaN(numero2) || isNaN(numero3) || isNaN(numero4)) {
    // Si alguno de los valores no es un número, mostrar un mensaje de error
    alert("Por favor, introduce números válidos.");
  } else {
    // Calcular el promedio
    const promedio = (numero1 + numero2 + numero3 + numero4) / 4;

    // Mostrar al usuario el resultado
    alert("El promedio es: " + promedio + ".");
  }
}
//respuesta 5
function respuesta5() {
  const R1 = parseFloat(prompt("Introduce la resistencia 1:"));
  const R2 = parseFloat(prompt("Introduce la resistencia 2:"));
  // Verificar que las conversiones fueron exitosas
  if (isNaN(R1) || isNaN(R2)) {
    // Si alguno de los valores no es un número, mostrar un mensaje de error
    alert("Por favor, introduce números válidos.");
  } else {
    // Calcular el la fomula
    const Req = (R1 * R2) / (R1 + R2);
    // Mostrar al usuario el resultado
    alert("El promedio es: " + Req + ".");
  }
}
