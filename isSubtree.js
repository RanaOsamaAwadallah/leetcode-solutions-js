/**
Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.

A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants. The tree tree could also be considered as a subtree of itself.

Example 1:
Input: root = [3,4,5,1,2], subRoot = [4,1,2]
Output: true

Example 2:
Input: root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2]
Output: false
 

Constraints:

The number of nodes in the root tree is in the range [1, 2000].
The number of nodes in the subRoot tree is in the range [1, 1000].
-104 <= root.val <= 104
-104 <= subRoot.val <= 104
*/

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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    if(!root || !subRoot) return false;
    
    let found = false;
    if(root.val === subRoot.val) found = treesEqual(root, subRoot);
    
    return found || isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

var treesEqual = (root1, root2) => {
    let queue1 = [root1], queue2 = [root2];
    
    while(queue1.length && queue2.length) {
        let el1 = queue1.shift();
        let el2 = queue2.shift();
        
        if((el1.left?.val !== el2.left?.val) || (el1.right?.val !== el2.right?.val)) return false;
        
        if(el1.left) queue1.push(el1.left);
        if(el1.right) queue1.push(el1.right);
        if(el2.left) queue2.push(el2.left);
        if(el2.right) queue2.push(el2.right);
    }
    
    return !queue1.length && !queue2.length;
}
