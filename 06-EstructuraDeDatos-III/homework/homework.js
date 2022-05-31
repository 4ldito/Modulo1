"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  size() {
    let counter = 1;
    if (this.left) {
      counter = counter + this.left.size();
    }
    if (this.right) {
      counter = counter + this.right.size();
    }
    return counter;
  }
  insert(value) {
    if (value >= this.value) {
      if (!this.right) {
        this.right = new BinarySearchTree(value);
      } else {
        this.right.insert(value);
      }
    } else { // en caso de que sea menor
      if (!this.left) {
        this.left = new BinarySearchTree(value);
      } else {
        this.left.insert(value);
      }
    }
  }
  contains(value) {
    let exists = false;
    if (value === this.value) return true;
    if (value >= this.value) {
      if (this.right) exists = this.right.contains(value);
    } else {
      if (this.left) exists = this.left.contains(value);
    }

    return exists;

  }
  depthFirstForEach(cb, order = "in-order") {
    let arr;
    switch (order) {
      case "post-order":
        /* if (this.left) this.left.depthFirstForEach(cb, order); // baja al final de la izq del todo.
        if (this.right) this.right.depthFirstForEach(cb, order); // verifica si la izq tiene algo a la derecha, y si tiene, sigue bajando. Si tiene un .right, puede ser que tenga que seguir bajando por el .left.
        cb(this.value); // cb es una función que agrega el elemento a un array. */
        arr = [];
        arr = this.postOrder(this, arr);
        arr.forEach(element => {
          cb(element);
        });
        break;
      case "pre-order":

        /* 
        cb(this.value);
        if (this.left) this.left.depthFirstForEach(cb, order); 
        if (this.right) this.right.depthFirstForEach(cb, order); 
        */
        arr = [];
        arr = this.preOrder(this, arr);
        arr.forEach(element => {
          cb(element);
        });
        break;
      case "in-order":
        /* 
        if (this.left) this.left.depthFirstForEach(cb, order); 
        cb(this.value);
        if (this.right) this.right.depthFirstForEach(cb, order); 
        */

        arr = [];
        arr = this.inOrder(this, arr);
        arr.forEach(element => {
          cb(element);
        });
        break;
    }
  }
  postOrder(root, arr) {
    if (root.left) {
      root.postOrder(root.left, arr);
    }
    if (root.right) {
      root.postOrder(root.right, arr);
    }
    arr.push(root.value);
    return arr;
  }

  preOrder(root, arr) {
    arr.push(root.value)
    if (root.left) {
      root.preOrder(root.left, arr);
    }
    if (root.right) {
      root.preOrder(root.right, arr);
    }
    return arr;
  }

  inOrder(root, arr) {
    if (root.left) {
      root.inOrder(root.left, arr);
    }
    arr.push(root.value)
    if (root.right) {
      root.inOrder(root.right, arr);
    }
    return arr;
  }

  breadthFirstForEach(cb, arr = []) {
    if (this.left) arr.push(this.left);
    if (this.right) arr.push(this.right);
    cb(this.value);

    if(arr.length > 0) {
      arr.shift().breadthFirstForEach(cb, arr);
    }

  }
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
