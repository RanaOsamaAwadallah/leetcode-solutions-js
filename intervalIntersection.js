/**
  You are given two lists of closed intervals, firstList and secondList, where firstList[i] = [starti, endi] and secondList[j] = [startj, endj]. Each list of intervals is pairwise disjoint and in sorted order.

  Return the intersection of these two interval lists.

  A closed interval [a, b] (with a <= b) denotes the set of real numbers x with a <= x <= b.

  The intersection of two closed intervals is a set of real numbers that are either empty or represented as a closed interval. For example, the intersection of [1, 3] and [2, 4] is [2, 3].

  Example 1:
  Input: firstList = [[0,2],[5,10],[13,23],[24,25]], secondList = [[1,5],[8,12],[15,24],[25,26]]
  Output: [[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]]
  
  Example 2:
  Input: firstList = [[1,3],[5,9]], secondList = []
  Output: []
  
  Constraints:

  0 <= firstList.length, secondList.length <= 1000
  firstList.length + secondList.length >= 1
  0 <= starti < endi <= 109
  endi < starti+1
  0 <= startj < endj <= 109
  endj < startj+1
*/

/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function(firstList, secondList) {
    if(!firstList.length || !secondList.length) return [];
    
    let firstPointer = 0;
    let secondPointer = 0;
    let currentIntersection;
    let intersections = [];
    
    while(firstPointer < firstList.length && secondPointer < secondList.length) {
        let firstInterval = firstList[firstPointer]; //[24,25]
        let secondInterval = secondList[secondPointer]; //[15, 24]
        
        if((firstInterval[0] >= secondInterval[0] && firstInterval[0] <= secondInterval[1]) ||
           (secondInterval[0] >= firstInterval[0] && secondInterval[0] <= firstInterval[1])) {
            currentIntersection = [Math.max(firstInterval[0], secondInterval[0]), Math.min(firstInterval[1], secondInterval[1])];
            intersections.push(currentIntersection);
        } else {
            if(firstInterval[0] < secondInterval[0]) firstPointer++;
            else secondPointer++;
        }
        
        if(firstInterval[1] === currentIntersection?.[1]) firstPointer++;
        else if(secondInterval[1] === currentIntersection?.[1]) secondPointer++;
        currentIntersection = null;
    }
    
    return intersections;
};
