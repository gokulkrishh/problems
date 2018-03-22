/* Problem: Check if given binary tree is BST or not.

  Note: BST is a binary tree where left value is always < root and right value is >= root

  Example:
       9
      / \
     6   9
        /  \
      15   10

  Output: False

  Explanation: From root, Right node's child left node has value > its parent node
*/

// Idea here is traverse each node and see the condition left > root || right <= root;

var isBST = function (root) {
  if (!root) return true;
  if (root.right != null && root.right.val <= root.val) return false;
  if (root.left != null && root.left.val > root.val) return false;
  return isBST(root.left) && isBST(root.right);
};

var root = {
  val: 3,
  left: { val: 2, right: null, left: null },
  right: {
    val: 5,
    left: { val: 4, right: null, left: null },
    right: { val: 7, right: null, left: null }
  }
};

isBST(root); // True

var root = {
  val: 3,
  left: { val: 2, right: null, left: null },
  right: {
    val: 5,
    left: { val: 19, right: null, left: null }, // val is > parent node
    right: { val: 7, right: null, left: null }
  }
};

isBST(root); // False

// Time Complexity: O(N)
