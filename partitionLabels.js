/**
  You are given a string s. We want to partition the string into as many parts as possible so that each letter appears in at most one part.

  Note that the partition is done so that after concatenating all the parts in order, the resultant string should be s.

  Return a list of integers representing the size of these parts.



  Example 1:

  Input: s = "ababcbacadefegdehijhklij"
  Output: [9,7,8]
  Explanation:
  The partition is "ababcbaca", "defegde", "hijhklij".
  This is a partition so that each letter appears in at most one part.
  A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits s into less parts.
  Example 2:

  Input: s = "eccbbbbdec"
  Output: [10]


  Constraints:

  1 <= s.length <= 500
  s consists of lowercase English letters.
*/

/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(S) {
  let last = [];
    for(let i = 0; i < S.length; i++){
        last[S[i].charCodeAt(0) - 97] = i;
    }

    let index = 0, start = 0, partitions = [];
    for(let i = 0; i < S.length; i++){
        index = Math.max(index, last[S[i].charCodeAt(0) - 97])
        if(i === index){
            partitions.push(i - start + 1);
            start = i + 1;
        }
    }
    return partitions
};
// var partitionLabels = function(s) {
//     const map = new Map();
    
//     for(let i = 0; i < s.length; i++) {
//         if(map.has(s[i])) {
//             map.set(s[i], {s: map.get(s[i]).s, e: i});
//         } else {
//             map.set(s[i], {s: i, e: i});
//         }
//     }
    
//     let currentRange;
//     let output = [];
    
//     for (const value of map.values()) {
//         if(!currentRange){
//             currentRange = value;
//         } else if(!(value.s < currentRange.e && value.e < currentRange.e)) {
//             if(value.s > currentRange.e) {
//                 output.push((currentRange.e - currentRange.s) + 1);
//                 currentRange = value;
//             } else if(value.s < currentRange.e && value.e > currentRange.e) {
//                 currentRange.e = value.e;
//             } else {
//                 currentRange = value;
//             }
//         }
//     }
//     output.push((currentRange.e - currentRange.s) + 1);
    
//     return output;
// };
