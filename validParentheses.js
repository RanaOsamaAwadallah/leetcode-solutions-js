/**
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
Example 4:

Input: s = "([)]"
Output: false
Example 5:

Input: s = "{[]}"
Output: true
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const brackesStack = [];
    const bracketsMap = {
        "(" : ")",
        "{" : "}",
        "[" : "]"
    }

    for(let i = 0; i < s.length; i++) {
        const currBracket = s[i];
        const lastBrackestStackElement = brackesStack[brackesStack.length - 1];
        
        if(bracketsMap[lastBrackestStackElement] === currBracket) brackesStack.pop();
        else brackesStack.push(s[i]);
    }
    
    return !brackesStack.length;
};
