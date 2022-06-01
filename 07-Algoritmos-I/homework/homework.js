'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  let arr = [1]; // empieza el arr en 1 pq asi lo pide el test
  let i = 2; // número por el cual voy a empezar a dividir
  while (num !== 1) {  // mientras que num sea distinto a 1 se ejecuta:
    if (num % i === 0) { // si numero es divisible por i (empieza con 2, luego va sumando)
      arr.push(i); // agregamos i
      num = num / i; // y dividimos a num por i
    } else {
      i++; // si no, aumentamos a i en 1.
    }
  }
  return arr;
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  /*
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) { // 
        let aux = array[j];  // 4
        array[j] = array[i]; // 5
        array[i] = aux; // 4
      }
    }
  }
  return array; 
  */
  let inOrder = false;
  while (!inOrder) {
    inOrder = true;
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        inOrder = false;
        let aux = array[i + 1];
        array[i + 1] = array[i];
        array[i] = aux;
      }
    }
  }
  return array;
}

function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  // [5, 1, 4, 2, 8]
  for (let i = 1; i < array.length; i++) {
    let j = i - 1
    let aux = array[i]
    while ((j >= 0) && (aux < array[j])) {
      array[j+1] = array[j];
      j--
    }
    array[j+1] = aux;
  }
  return array;
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  // [5, 1, 4, 2, 8]
  // [1, 5, 4, 2, 8]
  for (let i = 0; i < array.length - 1; i++) {
    let min = array[i]; // 5
    let pos = -1;

    for (let j = i + 1; j < array.length; j++) {
      if (min > array[j]) { // 5 es mayor q 1? si. - 1 es mayor q 4? no. - 1 es mayor q 2? no. 1 es mayor q 8? no. - TERMINA i=0
        min = array[j] // min = 1
        pos = j; // 1 estaba en la pos j(1)
      }
    }
    if (pos >= 0) {
      let aux = array[i]; // 5
      array[i] = min; // 1 
      array[pos] = aux; // 
    }
  }
  return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
