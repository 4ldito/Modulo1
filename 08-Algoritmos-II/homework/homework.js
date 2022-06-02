'use strict'
// No cambies los nombres de las funciones.

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


function quickSort(arr) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  /**
   * 1. Seleccionar una posición random del array
   * 2. Dividir en 2 el array a partir de esa posición y guardamos esa posición como el pivote.
   * 3. Todos los números menores al pivote van a la izquierda, y todos los mayores o iguales van a la derecha.
   * 4. Repetir hasta que consigamos un array de length 1.
   * 5. Concatenar izquierda con pivote y estos dos con derecha.
   */
  let numRandom = getRandomInt(0, arr.length),
    arrLeft = [],
    arrRight = [];

  for (let i = 0; i < arr.length; i++) {
    if (i === numRandom) continue; // no agregamos el número pivote a ningún array
    (arr[i] < arr[numRandom]) ? arrLeft.push(arr[i]) : arrRight.push(arr[i]);
  }

  if (arrLeft.length > 1) arrLeft = quickSort(arrLeft);
  if (arrRight.length > 1) arrRight = quickSort(arrRight);

  //return arrLeft.concat(arr[numRandom], arrRight);
  return [...arrLeft, arr[numRandom], ...arrRight]; // otra forma de concatenar arrays 
}



function mergeSort(arr) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  /**
   * 1. Divide el array por la mitad, hasta que quede en length 1.
   * 2. Compara los valores de dos array y los ordena
   * 3. Junta todos los grupos 
   * 
   */

  if (arr.length <= 1) return arr;

  let arrLeft = [];
  arrLeft = arr.splice(0, Math.floor(arr.length / 2)); // en arr queda todo lo de la derecha

  let array = merge(mergeSort(arrLeft), mergeSort(arr));
  console.log(array);
  return array;
}

function merge(arrLeft, arrRight) {
  let newArray = [];
  let arrLeftIndex;
  let arrRightIndex;
  while (arrLeftIndex < arrLeft && arrRightIndex < arrRight) {
    if (arrLeft[arrLeftIndex] < arrRight[arrRightIndex]) {
      newArray.push(arrLeft[arrLeftIndex]);
      arrLeftIndex++;
    } else {
      newArray.push(arrRight[arrRightIndex]);
      arrRightIndex++;
    }
  }
  return newArray.concat(arrLeft.slice(arrLeftIndex), arrRight.slice(arrRightIndex));
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
