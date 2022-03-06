/**
Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

Note that after backspacing an empty text, the text will continue empty.

Example 1:

Input: s = "ab#c", t = "ad#c"
Output: true
Explanation: Both s and t become "ac".
Example 2:

Input: s = "ab##", t = "c#d#"
Output: true
Explanation: Both s and t become "".
Example 3:

Input: s = "a#c", t = "b"
Output: false
Explanation: s becomes "c" while t becomes "b".
 

Constraints:

1 <= s.length, t.length <= 200
s and t only contain lowercase letters and '#' characters.
 

Follow up: Can you solve it in O(n) time and O(1) space?
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    let ps = s.length - 1;
    let pt = t.length - 1;
    let sBackspaceCount = 0;
    let tBackspaceCount = 0;
    
    while(ps >= 0 || pt >= 0) {
       while(ps >= 0) {
           if(s[ps] === '#') {sBackspaceCount++; ps--;}
           else if(sBackspaceCount > 0) {sBackspaceCount--; ps--;}
           else break;
       }
       while(pt >= 0) {
           if(t[pt] === '#') {tBackspaceCount++; pt--;}
           else if(tBackspaceCount > 0) {tBackspaceCount--; pt--;}
           else break;
       } 
    
        if(pt >= 0 && ps >=0 && s[ps] !== t[pt]) return false;
        if((ps>=0) !== (pt>=0)) return false;
        pt--;
        ps--;
    }
    
    return true;
};
