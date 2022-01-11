/**
  Given an array of strings strs, group the anagrams together. You can return the answer in any order.

  An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.



  Example 1:

  Input: strs = ["eat","tea","tan","ate","nat","bat"]
  Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
  Example 2:

  Input: strs = [""]
  Output: [[""]]
  Example 3:

  Input: strs = ["a"]
  Output: [["a"]]


  Constraints:

  1 <= strs.length <= 104
  0 <= strs[i].length <= 100
  strs[i] consists of lowercase English letters.
*/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = {};
    
    strs.forEach(str => {
        const sortedStr = str.split('').sort().join('');
        if(map[sortedStr]) {
            map[sortedStr].push(str);
        } else {
            map[sortedStr] = [str];
        }
    });
    
    return Object.values(map);
};

var groupAnagrams = function(strs) {
    let res = {};
    for (let str of strs) {
        let count = new Array(26).fill(0);
        for (let char of str) count[char.charCodeAt()-97]++;
        
        res[count] ? res[count].push(str) : res[count] = [str];
    }
    return Object.values(res);
};
