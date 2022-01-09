/**
  Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.

  You must solve the problem without using any built-in library for handling large integers (such as BigInteger). You must also not convert the inputs to integers directly.



  Example 1:

  Input: num1 = "11", num2 = "123"
  Output: "134"
  Example 2:

  Input: num1 = "456", num2 = "77"
  Output: "533"
  Example 3:

  Input: num1 = "0", num2 = "0"
  Output: "0"


  Constraints:

  1 <= num1.length, num2.length <= 104
  num1 and num2 consist of only digits.
  num1 and num2 don't have any leading zeros except for the zero itself.
*/

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let outputStr = '';
    let carry = 0;
    let i;
    const minLength = Math.min(num1.length, num2.length);
    const l1 = num1.length - 1;
    const l2 = num2.length - 1;
    
    for(i = 0; i < minLength; i++) {
        let sum = +num1[l1 - i] + +num2[l2 - i] + carry;
        if(sum > 9) {
            sum -= 10;
            carry = 1;
        } else {
            carry = 0;
        }
        
        outputStr = sum + outputStr;
    }
    
    if(minLength !== num1.length) {
        outputStr = (carry ? addStrings([`${carry}`], num1.substr(0, num1.length - minLength)) : num1.substr(0, num1.length - minLength)) + outputStr;
    } else if (minLength !== num2.length) {
        outputStr = (carry ? addStrings([`${carry}`], num2.substr(0, num2.length - minLength)) : num2.substr(0, num2.length - minLength)) + outputStr;
    } else if (carry) {
        outputStr = carry + outputStr;
    }
    
    return outputStr;
};
