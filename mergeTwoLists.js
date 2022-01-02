/**
  You are given the heads of two sorted linked lists list1 and list2.

  Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

  Return the head of the merged linked list.



  Example 1:


  Input: list1 = [1,2,4], list2 = [1,3,4]
  Output: [1,1,2,3,4,4]
  Example 2:

  Input: list1 = [], list2 = []
  Output: []
  Example 3:

  Input: list1 = [], list2 = [0]
  Output: [0]


  Constraints:

  The number of nodes in both lists is in the range [0, 50].
  -100 <= Node.val <= 100
  Both list1 and list2 are sorted in non-decreasing order.
**/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let head = new ListNode();
    
    let curr = head;
    let curr1 = l1;
    let curr2 = l2;
    
    while(curr1 && curr2) {
        if(curr1.val < curr2.val) {
            curr.next = curr1;
            curr1 = curr1.next;
        } else {
            curr.next = curr2;
            curr2 = curr2.next;
        }
        
        curr = curr.next;
    }
    
    if(curr1) {
        curr.next = curr1;
    }
    if(curr2) {
        curr.next = curr2;
    }
    
    return head.next;
};