/**
  Given an array of integers nums and an integer k, return the number of contiguous subarrays where the product of all the elements in the subarray is strictly less than k.

  Example 1:

  Input: nums = [10,5,2,6], k = 100
  Output: 8
  Explanation: The 8 subarrays that have product less than 100 are:
  [10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6]
  Note that [10, 5, 2] is not included as the product of 100 is not strictly less than k.
  
  Example 2:

  Input: nums = [1,2,3], k = 0
  Output: 0

  Constraints:

  1 <= nums.length <= 3 * 104
  1 <= nums[i] <= 1000
  0 <= k <= 106
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    let l = 0, r = 0;
    let resCount = 0;
    let currMult = 1;
    
    while(r < nums.length) {
        if(nums[r] < k) {
            currMult *= nums[r];
            
            while(currMult >= k) {
                currMult /= nums[l];
                l++;
            }
            if(l !== r) {
                resCount += r - l + 1;
            } else {
                resCount++;
            }
            
        } else {
            currMult = 1;
            l = r + 1;
        }
        r++;
    }
    
    return resCount;
};
