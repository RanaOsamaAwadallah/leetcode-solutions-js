/**
  Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations in any order. 

  Example 1:

  Input: nums = [1,1,2]
  Output:
  [[1,1,2],
   [1,2,1],
   [2,1,1]]

  Example 2:

  Input: nums = [1,2,3]
  Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]


  Constraints:

  1 <= nums.length <= 8
  -10 <= nums[i] <= 10
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    let result = [], map = new Map();
    for(const num of nums) {
        if(map.has(num)) map.set(num, map.get(num) + 1);
        else map.set(num, 1);
    }
    backTrack(map, nums.length, result);
    
    return result;
};

const backTrack = (map, numsLength, result, permutedArr = []) => {
    if(permutedArr.length === numsLength) {
        result.push([...permutedArr]);
        return;
    }
    
    for(let[num, count] of map) {
        if(!count) continue;
        permutedArr.push(num);
        map.set(num, count - 1);
        
        backTrack(map, numsLength, result, permutedArr);
        
        permutedArr.pop();
        map.set(num, count);
    }
    
}
