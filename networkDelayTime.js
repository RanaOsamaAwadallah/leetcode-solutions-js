/**
You are given a network of n nodes, labeled from 1 to n. You are also given times, a list of travel times as directed edges times[i] = (ui, vi, wi), where ui is the source node, vi is the target node, and wi is the time it takes for a signal to travel from source to target.

We will send a signal from a given node k. Return the time it takes for all the n nodes to receive the signal. If it is impossible for all the n nodes to receive the signal, return -1.

 

Example 1:


Input: times = [[2,1,1],[2,3,1],[3,4,1]], n = 4, k = 2
Output: 2
Example 2:

Input: times = [[1,2,1]], n = 2, k = 1
Output: 1
Example 3:

Input: times = [[1,2,1]], n = 2, k = 2
Output: -1
 

Constraints:

1 <= k <= n <= 100
1 <= times.length <= 6000
times[i].length == 3
1 <= ui, vi <= n
ui != vi
0 <= wi <= 100
All the pairs (ui, vi) are unique. (i.e., no multiple edges.)
**/

/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function(times, n, k) {
    let map = {};
    
    for(let i = 0; i < times.length; i++) {
        map[times[i][0]] = [...(map[times[i][0]] || []), {v: times[i][1], w: times[i][2]}];
    }
    
    let arrW = [];
    let queue = [k];
    arrW[k] = 0;
    
    while(queue.length) {
        const currentK = queue.shift();
        (map[currentK] || []).forEach(node => {
            if(arrW[node.v] === undefined || arrW[node.v] > node.w + arrW[currentK]) {
                arrW[node.v] = node.w + arrW[currentK];
                queue.push(node.v);
            }
        });
    }
    
    for(let i = 1; i <= n; i++) {
        if(arrW[i] === undefined) return -1;
    }
    
    arrW[0] = -Infinity;
    return Math.max(...arrW);
};
