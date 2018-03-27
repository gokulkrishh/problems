/* Problems: Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

  Example:

    Input:
        3
      / \
      9  20
        /  \
      15   7

    Output: [3, 9, 20, 15, 7];
*/

// Using recursion
function levelOrderTraversal(root) {
  var arr = [root.val];

  var traverse = function (root, arr) {
    if (!root) return;

    if (root.left) arr.push(root.left.val);
    if (root.right) arr.push(root.right.val);

    traverse(root.left, arr);
    traverse(root.right, arr);
  }

  traverse(root, arr);

  return arr;
}

var root = { val: 3, right: { val: 20, right: { val: 7, right: null, left: null }, left: { val: 15, right: null, left: null } }, left: { val: 9, right: null, left: null } }

levelOrderTraversal(root); // [3, 9, 20, 15, 7]

// Time Complexity: O(N), N is number of tree nodes

// Using queue based datastructure in one loop
function levelOrderTraversal(root) {
  var queue = [root];
  var arr = [];

  while (queue.length > 0) {
    var node = queue[0];
    queue.shift();
    arr.push(node.val);

    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }

  return arr;
}

var root = { val: 3, right: { val: 20, right: { val: 7, right: null, left: null }, left: { val: 15, right: null, left: null } }, left: { val: 9, right: null, left: null } }

levelOrderTraversal(root); // [3, 9, 20, 15, 7]

// Time Complexity: O(N), N is number of tree nodes
