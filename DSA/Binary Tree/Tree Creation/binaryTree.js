// creating a tree node

class Node {
  constructor (value){
    this.data = value;
    this.left = null;
    this.right = null;
  }
}
let obj = new Node(12);
console.log(obj);


// creating a binary tree using new nodes and joining them by reference
class binaryTree {
 constructor () {
    this.root = null;
 }

 insertRootNode (value) {
   const newNode = new Node(value);
   if(!this.root){
    this.root = newNode;
   }
   else {
    this._insertNode(this.root, newNode);
   }
 }

 _insertNode (node, newNode) {
   if(newNode.data < node.data){
     if(!node.left){
        node.left = newNode;
     }
     else{
        this._insertNode(node.left, newNode);
     }
   }
   else{
    this._insertNode (node.right, newNode);
   }
 }
}

const tree = new binaryTree();
tree.insertRootNode(50);
tree.insertRootNode(30);
tree.insertRootNode(70);
tree.insertRootNode(20);
tree.insertRootNode(40);
tree.insertRootNode(60);
tree.insertRootNode(80);
console.log(tree)




