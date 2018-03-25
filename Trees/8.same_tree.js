/* tree1roblem: Given two binary trees, write a function to check if they are the same or not.

  Note: Two binary trees are considered the same if they are structurally identical and the nodes have the same value.

  Example 1:
    Input:     1         1
              / \       / \
            2   3     2   3
    Output: true

  Example 2:
    Input:     1         1
              /           \
            2             2
    Output: false
*/

var isSameTree = function (tree1, tree2) {
  if (tree1 == null && tree2 == null) return true;
  else if (tree1 == null || tree2 == null) return false;

  var traverse = function (tree1, tree2) {
    if (!tree1 && !tree2) return true;
    else if (!tree1 || !tree2) return false;
    else if (tree1.val !== tree2.val) return false;
    return traverse(tree1.left, tree2.left) && traverse(tree1.right, tree2.right);
  }

  return traverse(tree1, tree2);
};

var tree1 = { val: 1, left: { val: 1, left: null, right: null }, right: null };
var tree2 = { val: 1, left: null, right: { val: 1, left: null, right: null } };

isSameTree(tree1, tree2); // False

var tree1 = { val: 1, left: { val: 1, left: null, right: null }, right: null };
var tree2 = { val: 1, left: { val: 1, left: null, right: null }, right: null };

isSameTree(tree1, tree2); // True

// Time Complexity: O(T1), where T1 is tree1 and T2 is tree2, where T1 < T2
