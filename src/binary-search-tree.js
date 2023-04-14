const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.treeRoot = null;
  }
  root() {
    return this.treeRoot;
  }

  add(data) {
    this.treeRoot = insertNode(this.treeRoot, data);

    function insertNode(node, data) {
      if (!node) {
        return new Node(data);
      }
      if (node.data === data) {
        return node;
      }
      if (data < node.data) {
        node.left = insertNode(node.left, data);
      } else {
        node.right = insertNode(node.right, data);
      }
      return node;
    }
  }

  has(data) {
    return isExist(this.treeRoot, data);

    function isExist(node, data) {
      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      if (data < node.data) {
        // return isExist(node.left, data);
        var res = isExist(node.left, data);
        return res;
      } else {
        // return isExist(node.right, data);
        res = isExist(node.right, data);
        return res;
      }
    }
  }

  find(data) {
    return findValue(this.treeRoot, data);

    function findValue(node, data) {
      if (!node) {
        return null;
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        // return isExist(node.left, data);
        return findValue(node.left, data);
      } else {
        // return isExist(node.right, data);
        return findValue(node.right, data);
      }
    }
  }

  remove(data) {
    this.treeRoot = deleteNode(this.treeRoot, data);

    function deleteNode(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = deleteNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = deleteNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return (node = null);
        }

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let minNodeFromRight = node.right;
        while (minNodeFromRight.left != null) {
          minNodeFromRight = minNodeFromRight.left;
        }
        node.data = minNodeFromRight.data;
        node.right = deleteNode(node.right, minNodeFromRight.data);
        return node;
      }
    }
  }

  min() {
    if (this.treeRoot === null) {
      return;
    }
    let currentNode = this.treeRoot;
    while (currentNode.left !== null) {
      currentNode = currentNode.left;
    }
    return currentNode.data;
  }

  max() {
    if (this.treeRoot === null) {
      return;
    }
    let currentNode = this.treeRoot;
    while (currentNode.right !== null) {
      currentNode = currentNode.right;
    }
    return currentNode.data;
  }
}

module.exports = {
  BinarySearchTree,
};
