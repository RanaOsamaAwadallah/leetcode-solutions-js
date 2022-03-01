 /**
  Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. This matrix has the following properties:

  Integers in each row are sorted from left to right.
  The first integer of each row is greater than the last integer of the previous row.


  Example 1:
  Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
  Output: true
  Example 2:


  Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
  Output: false


  Constraints:

  m == matrix.length
  n == matrix[i].length
  1 <= m, n <= 100
  -104 <= matrix[i][j], target <= 104
*/

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let start = 0;
    let end = matrix.length - 1;
    let mid;
    
    while(start <= end) {
        mid = parseInt((start + end) / 2);
        if(target > matrix[mid][0]) {
            if(target < matrix[mid+1]?.[0]) break;
            start = mid + 1;
        }
        else if(target < matrix[mid][0]) end = mid - 1;
        else return true;
    }
    
    let targetRow = matrix[mid];
    return !!targetRow.find(n => n === target);
};
