/**
Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

 

Example 1:


Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]
Example 2:

Input: root = [1]
Output: [[1]]
Example 3:

Input: root = []
Output: []
 

Constraints:

The number of nodes in the tree is in the range [0, 2000].
-1000 <= Node.val <= 1000
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) return [];
    
    let output = [[root.val]];
    let queue = [{node: root, depth:0}];
    let map = {};
    
    while(queue.length) {
        let {node, depth} = queue.shift();
        map[depth] = map[depth] || [];
        
        if(node.left) {
            queue.push({node: node.left, depth: depth + 1 });
            map[depth].push(node.left.val);
        }
        if(node.right) {
            queue.push({node: node.right, depth: depth + 1});
            map[depth].push(node.right.val);
        }
        depth++;
    }

    for(key in map) {
        if(map[key].length) output.push(map[key]);
    }
    
    return output;
};
