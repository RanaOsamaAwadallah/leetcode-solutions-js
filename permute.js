/**
  Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

  Example 1:
  Input: nums = [1,2,3]
  Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

  Example 2:
  Input: nums = [0,1]
  Output: [[0,1],[1,0]]

  Example 3:
  Input: nums = [1]
  Output: [[1]]

  Constraints:

  1 <= nums.length <= 6
  -10 <= nums[i] <= 10
  All the integers of nums are unique.
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const result = [], permutationsArr = [], visitedMap = new Map();
    backTrack(nums, permutationsArr, result, visitedMap);
    
    return result;
};

const backTrack = (nums, permutationsArr, result, visitedMap) => {
    if(permutationsArr.length === nums.length) {
        result.push([...permutationsArr]);
        return;
    }
    
    for(let i = 0; i < nums.length; i++) {
        if(visitedMap.get(i)) continue;
        permutationsArr.push(nums[i]);
        visitedMap.set(i, true);
        backTrack(nums, permutationsArr, result, visitedMap);
        permutationsArr.pop();
        visitedMap.set(i, false);
    }
}
