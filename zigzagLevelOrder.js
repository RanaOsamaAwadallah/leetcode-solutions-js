/**
Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then right to left for the next level and alternate between).

Example 1:


Input: root = [3,9,20,null,null,15,7]
Output: [[3],[20,9],[15,7]]
Example 2:

Input: root = [1]
Output: [[1]]
Example 3:

Input: root = []
Output: []
 

Constraints:

The number of nodes in the tree is in the range [0, 2000].
-100 <= Node.val <= 100
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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    let output = [];
    let queue = [root];
    let moveRight = false;
    
    while(queue.length) {
        const l = queue.length;
        const arr = [];
        
        for(let i = 0; i < l; i++) {
            const current = queue.shift();
            if(!current) continue;
            !moveRight ? arr.push(current.val) : arr.unshift(current.val);     
            queue.push(current.left);
            queue.push(current.right);
        }
        
        moveRight = !moveRight;
        if(arr.length) output.push(arr);
    }
    
    return output;
};
