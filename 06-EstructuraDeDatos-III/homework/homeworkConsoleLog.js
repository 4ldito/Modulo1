class BinarySearchTree {
  constructor(value) {
    this.root = value;
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

    console.log("evaluando: ", this);
    if (value >= this.root) {
      if (!this.right) {
        console.log(value, "es mayor a " + this.root + " se agrego a la derecha");
        this.right = new BinarySearchTree(value);
      } else {
        console.log(value + " es mayor a: " + this.root + " entonces, se pasa a la derecha");
        this.right.insert(value);
      }

    } else { // en caso de que sea menor
      if (!this.left) {
        console.log(value, "es menor a " + this.root + " se agrego a la izq");
        this.left = new BinarySearchTree(value);
      } else {
        console.log(value + " es menor a: " + this.root + " entonces, se pasa a la izq");
        this.left.insert(value);
      }

    }

    console.log("-------- terminó de evaluar a ", this);
  }

  contains() { }
  depthFirstForEach() { }
  breadthFirstForEach() { }

  preOrder(root, arr) {
    arr.push(root.value)
    console.log("agregar root: ", root);

    if (root.left) {
      console.log(root, "tiene left. seguimos a la izq");
      root.preOrder(root.left, arr);
    }

    if (root.right) {
      console.log(root, "tiene right. seguimos a la derecha");
      root.preOrder(root.right, arr);
    }

    return arr;
  }
}

let tree = new BinarySearchTree(5)

tree.insert(7);
tree.insert(3);
tree.insert(9);