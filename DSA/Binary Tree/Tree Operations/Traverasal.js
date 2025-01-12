/* 
 Tree Traversal using DFS Algorithms and Recursion function.
*/

// DFS Preorder Binary Tree Traversal using array as a input
const preOrderDFSTraversal = (node, index = 0) => {
  // base condition
  if (node === null || !node.length) {
    return [];
  }
  let root = [node[index]];
  let leftChild = preOrderDFSTraversal(node, 2 * index + 1);
  let rightChild = preOrderDFSTraversal(node, 2 * index + 2);
  return root.concat(leftChild, rightChild);  
}
console.log(preOrderDFSTraversal([1,3,4,5,,6,9,0,2,20]));