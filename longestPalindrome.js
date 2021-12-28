/**
  Given a string s, return the longest palindromic substring in s.



  Example 1:

  Input: s = "babad"
  Output: "bab"
  Explanation: "aba" is also a valid answer.
  Example 2:

  Input: s = "cbbd"
  Output: "bb"


  Constraints:

  1 <= s.length <= 1000
  s consist of only digits and English letters.
**/

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let longestPalindrome = '';
    
    for(let i = 0 ; i < s.length; i++){
        const longestPalindromeFromIndex = longestPalindromeAroundIndex(s, i);
        longestPalindrome = longestPalindrome.length > longestPalindromeFromIndex.length ? longestPalindrome : longestPalindromeFromIndex;
    }
    
    return longestPalindrome;
};

const longestPalindromeAroundIndex = (s, i) => {
    let longestPalindrome = s[i];
    let start = i - 1;
    let end = i + 1;
    
    while(start >= 0 && end < s.length) {
        if(s.charAt(start) === s.charAt(end)) {
            longestPalindrome = s.charAt(start) + longestPalindrome + s.charAt(end);
            start--;
            end++;
        } else break;
    }
    
    
    start = i;
    end = i + 1;
    let longestPalindromeFromEven = s[i];
    
    while(start >= 0 && end < s.length) {
        if(s.charAt(start) === s.charAt(end)) {
            longestPalindromeFromEven = s.charAt(start) + (start == i ? '' : longestPalindromeFromEven) + s.charAt(end);
            start--;
            end++;
        } else {
            break;
        }
    }
    
    
    return longestPalindrome.length > longestPalindromeFromEven.length? longestPalindrome : longestPalindromeFromEven;
}
