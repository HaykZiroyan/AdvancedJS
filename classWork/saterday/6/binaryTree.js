class BinaryTreeNode {
    constructor(key, value = key) {
      this.key = key;
      this.value = value;
      this.left = null;
      this.right = null;
    }
  
    get isLeaf() {
      return this.left === null && this.right === null;
    }
  
    get hasChildren() {
      return !this.isLeaf;
    }
  }
  
  class BinaryTree {
    constructor() {
      this.root = null;
    }

    #insertOnRoot(root, value) {
        if(value > root.value) {
            if(!root.right) {
                root.right = new BinaryTreeNode(value)
            } else {
                this.#insertOnRoot(root.right, value)
            }
        } else if(value < root.value) {
            if(!root.left) {
                root.left = new BinaryTreeNode(value)
            } else {
                this.#insertOnRoot(root.left, value)
            }
        }
    }
    insert(value) {
        if (!this.root) {
            this.root = new BinaryTreeNode(value)
            return 
        } 
        this.#insertOnRoot(this.root, value)
    }
    
    searchItem(value, elem = this.root) {
        if(elem.value === value) return true
        if(value < elem.value && elem.left) return this.searchItem(value, elem.left)
        if (elem.right) return this.searchItem(value, elem.right)
        return false
    }

    findMin(elem = this.root, min = this.root.value) {
        if(elem.left) {
            min = elem.left.value
            return this.findMin(elem.left, min)
        }
        return min
    }
    findMax(elem = this.root, max = this.root.value) {
        if(elem.right) {
            max = elem.right.value
            return this.findMax(elem.right, max)
        }
        return max
    }
    returnRoot() {
        console.log(this.root);
    }
  }

const tree = new BinaryTree
tree.insert(5)
tree.insert(7)
tree.insert(234)
tree.insert(1)
tree.insert(3)
tree.insert(4)
console.log(tree.searchItem(235))
console.log(tree.findMin())
console.log(tree.findMax())

// tree.returnRoot()