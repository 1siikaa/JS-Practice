// Creating a tree node
class Node {
    constructor(value) {
      this.data = value;
      this.left = null;
      this.right = null;
    }
  }
  
  // Creating a binary tree using new nodes and joining them by reference
  class BinaryTree {
    constructor() {
      this.root = null;
    }
  
    insertRootNode(value) {
      const newNode = new Node(value);
      if (!this.root) {
        this.root = newNode;
      } else {
        this._insertNode(this.root, newNode);
      }
    }
  
    _insertNode(node, newNode) {
      if (newNode.data < node.data) {
        if (!node.left) {
          node.left = newNode;
        } else {
          this._insertNode(node.left, newNode);
        }
      } else {
        if (!node.right) {
          node.right = newNode;
        } else {
          this._insertNode(node.right, newNode);
        }
      }
    }
  }
  
  // Usage
  const obj = new Node(12);
  console.log("Single node:", obj);
  
  const tree = new BinaryTree();
  tree.insertRootNode(50);
  tree.insertRootNode(30);
  tree.insertRootNode(70);
  tree.insertRootNode(20);
  tree.insertRootNode(40);
  tree.insertRootNode(60);
  tree.insertRootNode(80);
  
  console.log("Binary Tree:", JSON.stringify(tree, null, 2));