/**
  The DNA sequence is composed of a series of nucleotides abbreviated as 'A', 'C', 'G', and 'T'.

  For example, "ACGAATTCCG" is a DNA sequence.
  When studying DNA, it is useful to identify repeated sequences within the DNA.

  Given a string s that represents a DNA sequence, return all the 10-letter-long sequences (substrings) that occur more than once in a DNA molecule. You may return the answer in any order.



  Example 1:

  Input: s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
  Output: ["AAAAACCCCC","CCCCCAAAAA"]
  Example 2:

  Input: s = "AAAAAAAAAAAAA"
  Output: ["AAAAAAAAAA"]


  Constraints:

  1 <= s.length <= 105
  s[i] is either 'A', 'C', 'G', or 'T'.
*/

/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
    const map = {};
    const output = [];
    
    for(let i = 0; i + 9 < s.length; i++) {
        const substr = s.substring(i, i + 10);
        map[substr] = (map[substr] || 0) + 1;
        if(map[substr] === 2) output.push(substr);
    }
    
    return output;
};
