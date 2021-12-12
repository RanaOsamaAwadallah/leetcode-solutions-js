/**
Given an integer n, return all the structurally unique BST's (binary search trees), which has exactly n nodes of unique values from 1 to n. Return the answer in any order.

 

Example 1:


Input: n = 3
Output: [[1,null,2,null,3],[1,null,3,2],[2,1,3],[3,1,null,null,2],[3,2,null,1]]
Example 2:

Input: n = 1
Output: [[1]]
 

Constraints:

1 <= n <= 8
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
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
    if(n === 1) return [new TreeNode(n)];
    if(!n) return [];
    
    return generateTree(1, n);
    
};

const generateTree = (start, end) => {
    if(start > end) return [null];
    
    let result = [];
    
    for(let i = start; i <= end; i++) {
        const leftList = generateTree(start, i - 1);
        const rightList = generateTree(i + 1, end);
        
        for(let j = 0; j < leftList.length; j++) {
            for(let k = 0; k < rightList.length; k++) {
                 var root =new TreeNode(i)
                root.left = leftList[j];
                root.right = rightList[k];
                result.push(root)
            }
        }
    }
    
    return result;
}
