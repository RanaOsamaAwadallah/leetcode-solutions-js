/**
Given an array of integers nums, sort the array in ascending order.

 

Example 1:

Input: nums = [5,2,3,1]
Output: [1,2,3,5]
Example 2:

Input: nums = [5,1,1,2,0,0]
Output: [0,0,1,1,2,5]
 

Constraints:

1 <= nums.length <= 5 * 104
-5 * 104 <= nums[i] <= 5 * 104
**/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    // Straightforward solution
    // return nums.sort((a, b) => a - b);
    
    // If we use merge sort algorithm
    mergeSort(nums, [], 0, nums.length - 1);
    return nums;
};

const mergeSort = (arr, helper, low, high) => {
    if(low < high) {
        const mid = parseInt((low + high) / 2);
        mergeSort(arr, helper, low, mid); // Sort left half
        mergeSort(arr, helper, mid + 1, high); // Sort right half
        merge(arr, helper, low, mid, high); // Merge them
    }
}

const merge = (arr, helper, low, mid, high) => {
    // Copy both halves into a helper array
    for(let i = low; i <= high; i++) {
        helper[i] = arr[i];
    }
    
    let helperLeftStart = low;
    let helperRightStart = mid + 1;
    let current = low;
    
    
    /* Iterate through helper array. Compare the left and right half, copying back 
    the smaller element from the two halves into the original array. */
    while(helperLeftStart <= mid && helperRightStart <= high) {
        if(helper[helperLeftStart] <= helper[helperRightStart]) {
            arr[current] = helper[helperLeftStart];
            helperLeftStart++;
        } else {
            arr[current] = helper[helperRightStart];
            helperRightStart++;
        }
        
        current++;
    }
    
    /* Copy the rest of the left side of the array into the target array */
    const remaining = mid - helperLeftStart;
    for(let i = 0; i <= remaining; i++) {
        arr[current + i] = helper[helperLeftStart + i];
    }
}
