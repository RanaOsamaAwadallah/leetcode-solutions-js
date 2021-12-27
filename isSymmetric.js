/**
Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

 

Example 1:


Input: root = [1,2,2,3,4,4,3]
Output: true
Example 2:


Input: root = [1,2,2,null,3,null,3]
Output: false
 

Constraints:

The number of nodes in the tree is in the range [1, 1000].
-100 <= Node.val <= 100
 

Follow up: Could you solve it both recursively and iteratively?
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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    return helper(root.left, root.right);
}
var helper = (left, right) => {
    if(left == undefined || right == undefined)
        return left==right;
    if(left.val!=right.val)
        return false;

    return helper(left.right, right.left) && helper(left.left, right.right);
}

// Non-recursive Sol

// var isSymmetric = function(root) {
//     const queue = [root.left, root.right];
    
//     while(queue.length) {
//         const leftElement = queue.shift();
//         const rightElement = queue.shift();
        
//         if(!help(leftElement, rightElement)) return false;
//         if(leftElement) {
//             queue.push(...[leftElement.left, rightElement.right, leftElement.right, rightElement.left])
//         }
        
//     }
    
//     return true;
// };

//const help = (left, right) => {
//     if(left == undefined || right == undefined)
//         return left==right;
//     if(left.val!=right.val)
//         return false;
    
//     return true;
// }
