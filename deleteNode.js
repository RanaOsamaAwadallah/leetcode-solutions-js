/**
Given a root node reference of a BST and a key, delete the node with the given key in the BST. Return the root node reference (possibly updated) of the BST.

Basically, the deletion can be divided into two stages:

Search for a node to remove.
If the node is found, delete the node.
 

Example 1:
Input: root = [5,3,6,2,4,null,7], key = 3
Output: [5,4,6,2,null,null,7]
Explanation: Given key to delete is 3. So we find the node with value 3 and delete it.
One valid answer is [5,4,6,2,null,null,7], shown in the above BST.
Please notice that another valid answer is [5,2,6,null,4,null,7] and it's also accepted.

Example 2:
Input: root = [5,3,6,2,4,null,7], key = 0
Output: [5,3,6,2,4,null,7]
Explanation: The tree does not contain a node with value = 0.
Example 3:

Input: root = [], key = 0
Output: []
 

Constraints:

The number of nodes in the tree is in the range [0, 104].
-105 <= Node.val <= 105
Each node has a unique value.
root is a valid binary search tree.
-105 <= key <= 105
 

Follow up: Could you solve it with time complexity O(height of tree)?
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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    if (!root) return root;
    let prev;
    let current = root;
    while(current && current.val !== key) {
        prev = current;
        if(current.val > key) current = current.left;
        else current = current.right;
    }
    
    if(!current) return root;  
    
    const newNode = deleteNodeHelper(current, prev);
    if(!prev) return newNode;
    
    return root;
};

const deleteNodeHelper = (node, prev) => {
    let newNode;
    if(!node.left && !node.right) {
        newNode = null;
    } else if(!node.left) {
        newNode = node.right;
    } else if(!node.right) {
        newNode = node.left;
    } else {
        newNode = node.right;
        let currNode = newNode;
        while(currNode.left) currNode = currNode.left;
        currNode.left = node.left;
    }
    
    if(!prev) return newNode;
    else if(prev.left === node) prev.left = newNode;
    else if(prev.right === node) prev.right = newNode;
}
