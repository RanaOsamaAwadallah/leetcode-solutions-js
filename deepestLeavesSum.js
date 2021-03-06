/**
Given the root of a binary tree, return the sum of values of its deepest leaves.
 

Example 1:


Input: root = [1,2,3,4,5,null,6,7,null,null,null,null,8]
Output: 15
Example 2:

Input: root = [6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]
Output: 19
 

Constraints:

The number of nodes in the tree is in the range [1, 104].
1 <= Node.val <= 100
**/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var deepestLeavesSum = function(root) {
    if(!root.left && !root.right) return root.val;
    let sum = 0;
    let maxDepth = 0;
    
    const getDeepestLeaf = (node, depth = 1) => {
        if(!node.left && !node.right) {
            if ( depth > maxDepth ) {
                maxDepth = depth
                sum = node.val
            } else if ( depth === maxDepth ) {
                sum += node.val
            }
            
            return;
        }


        if(node.left) getDeepestLeaf(node.left, depth + 1);
        if(node.right) getDeepestLeaf(node.right, depth + 1);
    }
    
    getDeepestLeaf(root);
    
    return sum;
};

