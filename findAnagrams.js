/**
  Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.

  An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

  Example 1:

  Input: s = "cbaebabacd", p = "abc"
  Output: [0,6]
  Explanation:
  The substring with start index = 0 is "cba", which is an anagram of "abc".
  The substring with start index = 6 is "bac", which is an anagram of "abc".
  
  Example 2:

  Input: s = "abab", p = "ab"
  Output: [0,1,2]
  Explanation:
  The substring with start index = 0 is "ab", which is an anagram of "ab".
  The substring with start index = 1 is "ba", which is an anagram of "ab".
  The substring with start index = 2 is "ab", which is an anagram of "ab".

  Constraints:

  1 <= s.length, p.length <= 3 * 104
  s and p consist of lowercase English letters.
*/

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    const pMap = new Map();
    for(let letter of p) {
        pMap.set(letter, (pMap.get(letter) || 0) + 1);
    }
    
    let count = pMap.size, res = [];
    let l = 0, r = 0;
    
    while(r < s.length) {
        const letter = s[r];
        if(pMap.has(letter)) pMap.set(letter, pMap.get(letter) - 1);
        if(pMap.get(letter) === 0) count--;
        
        while(count === 0) {
            if(r - l + 1 === p.length) res.push(l);
            if(pMap.has(s[l])) pMap.set(s[l], pMap.get(s[l]) + 1);
            if(pMap.get(s[l]) > 0) count++;
            l++;
        }
        r++;
    }
    
    return res;
};
