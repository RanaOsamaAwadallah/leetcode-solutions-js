/**
Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.

Each number in candidates may only be used once in the combination.

Note: The solution set must not contain duplicate combinations.

Example 1:

Input: candidates = [10,1,2,7,6,1,5], target = 8
Output: 
[
[1,1,6],
[1,2,5],
[1,7],
[2,6]
]

Example 2:

Input: candidates = [2,5,2,1,2], target = 5
Output: 
[
[1,2,2],
[5]
]
 
Constraints:

1 <= candidates.length <= 100
1 <= candidates[i] <= 50
1 <= target <= 30
*/

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    const result = [], comb = [], map = new Map();
    
    for(const candidate of candidates) {
        if(!map.has(candidate)) map.set(candidate, 1);
        else map.set(candidate, map.get(candidate) + 1);
    }
    const arrMap = Array.from(map);
    console.log(arrMap)
    
    backTrack(comb, target, result, arrMap);
    
    return result;
};

const backTrack = (comb, target, result, arrMap, start = 0) => {
    if(target < 0) return;
    if(target === 0) {
        result.push([...comb]);
        return;
    }
    
    for(let i = start; i < arrMap.length; i++) {
        const candidate = arrMap[i][0];
        const count = arrMap[i][1];
        if(count <= 0) continue;
        
        comb.push(candidate);
        arrMap[i][1] = count - 1;
        
        backTrack(comb, target - candidate, result, arrMap, i);
        
        comb.pop();
        arrMap[i][1] = count;
    }
}
