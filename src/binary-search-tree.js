const { NotImplementedError } = require('../lib');
const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  rootNode = null
  root() {
    return this.rootNode
  }

  add(data) {
    if (this.rootNode === null) this.rootNode = new Node(data)
    let base = this.rootNode
    if (base.data === data) return
    while (true) {
      if (base.data > data) {
        if (base.left === null) {
          base.left = new Node(data)
          return
        }
        else {
          base = base.left
        }
      }
      else {
        if (base.right === null) {
          base.right = new Node(data)
          return
        }
        else {
          base = base.right
        }
      }
    }
  }

  find(data) {
    if (this.rootNode === null) return null
    let base = this.rootNode
    while (true) {
      if (base.data === data) return base
      if (base.data > data) {
        if (base.left === null) {
          return null
        }
        else {
          base = base.left
        }
      }
      else {
        if (base.right === null) {
          return null
        }
        else {
          base = base.right
        }
      }
    }
  }

  has(data) {
    if (this.rootNode === null) return false
    let base = this.rootNode
    while (true) {
      if (base.data === data) return true
      if (base.data > data) {
        if (base.left === null) {
          return false
        }
        else {
          base = base.left
        }
      }
      else {
        if (base.right === null) {
          return false
        }
        else {
          base = base.right
        }
      }
    }
  }

  remove(data) {
    if (this.rootNode === null) return

    let base = this.rootNode
    let baseRoot = null

    while (base !== null && base.data !== data) {
      baseRoot = base
      if (base.data > data) {
        base = base.left
      } else {
        base = base.right
      }
    }

    if (base === null) return

    const replace = (oldNode, newNode) => {
      if (baseRoot === null) this.rootNode = newNode
      else if (baseRoot.left === oldNode) baseRoot.left = newNode
      else baseRoot.right = newNode
    }

    if (base.left === null) {
      replace(base, base.right)
    } else if (base.right === null) {
      replace(base, base.left)
    } else {
      let successorRoot = base
      let successor = base.right
      while (successor.left !== null) {
        successorRoot = successor
        successor = successor.left
      }
      base.data = successor.data
      if (successorRoot.left === successor) {
        successorRoot.left = successor.right
      } else {
        successorRoot.right = successor.right
      }
    }
  }

  min() {
    if (this.rootNode === null) return null
    let base = this.rootNode
    while (true) {
      if (base.left === null) {
        return base.data
      }
      else {
        base = base.left
      }
    }
  }

  max() {
    if (this.rootNode === null) return null
    let base = this.rootNode
    while (true) {
      if (base.right === null) {
        return base.data
      }
      else {
        base = base.right
      }
    }
  }
}

module.exports = {
  BinarySearchTree
};