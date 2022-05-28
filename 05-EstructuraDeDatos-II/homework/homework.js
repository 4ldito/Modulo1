"use strict";

/*
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  Ejemplo: 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/

class LinkedList { // creo la clase LinkedList con su constructor
  constructor() {
    this.head = null;
    this.length = 0; // este length corresponde al tamaño de la lista.
  }

  add(value) { // Método para agregar un nuevo Nodo a la lista
    const node = new Node(value)

    if (!this.head) { // Si head === null, entonces significa que este va a ser el primer nodo. 
      this.head = node;
      this.length++; // aumentamos el length en 1.
      return; // retornamos porque al ser el primer elemento, no es necesario que se ejecute todo lo demás.
    }
    let currentNode = this.head; // si head !== null, es que ya existe uno o más nodos. Nos colocamos en el head.
    while (currentNode.next) { // mientras el nodo en el que estemos si su .next !== null, vamos a ir pasando de nodo en nodo. hasta llegar al último.
      currentNode = currentNode.next;
    }
    currentNode.next = node; // en el último .next colocamos el nuevo nodo.
    this.length++; 
  }

  remove() { // Método para remover el último Nodo de la lista.
    if (this.length === 0) { // Caso para cuadno no existe ningun nodo 
      return null;
    } else if (this.length === 1) { // Caso para cuando solo exista el head
      let valueHead = this.head.value;
      this.head = null;
      this.length = 0;
      return valueHead;
    }
    // Caso para cuando exista 1 o más nodos

    let currentNode = this.head;
    let i = 1; // I empieza en 1 porque queremos colocarnos en el penultimo nodo, NO en el último.

    while (i < this.length - 1) { // hacemos un while hasta centrarnos en el penultimo nodo
      currentNode = currentNode.next;
      i++;
    }

    let valueNode = currentNode.next.value; // antes de removerlo, copiamos los datos último nodo para retornarlo.
    currentNode.next = null; // eliminamos la referencia al último nodo
    this.length--;

    return valueNode;
  }

  search(data) { // Método para buscar un dato en la lista
    if (!this.head) return null; // si NO hay un head, entonces retornamos null.
    let currentNode = this.head;

    // recorremos todos los nodos para encontrar el dato ingresado
    for (let i = 0; i < this.length; i++) {
      if (currentNode.value === data) {
        return data;
        // en caso de que sea una función
      } else if (typeof data === 'function') {
        if (data(currentNode.value)) { // verificamos si retorna algo
          return currentNode.value; // si retorna, devolvemos el valor.
        }
      }
      currentNode = currentNode.next;
    }
    // en caso de que no se haya encontrado el dato ingresado, retornamos null
    return null;

  }
}

class Node { // Creo la clase Nodo con su constructor, siempre va a recibir un valor.
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

/*
Implementar la clase HashTable.

Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/

function HashTable() {

}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};
