'use strict';

/**
 * @param {string} s
 * @returns {number}
 */

/*
Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal substring consisting of non-space characters only.



Example 1:

Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
Example 2:

Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.
Example 3:

Input: s = "luffy is still joyboy"
Output: 6
Explanation: The last word is "joyboy" with length 6.
*/

const lengthOfLastWord = function (s) {
  let count = 0;
  let startIdx = s.length - 1;

  //     Trim the spaces at the end
  for (let i = startIdx; i >= 0; i--) {
    if (s[i] === ' ') {
      startIdx--;
    } else {
      break;
    }
  }

  // Iterate through the string. Add 1 to count for every letter
  // Return the count when we hit a space
  for (let i = startIdx; i >= 0; i--) {
    if (s[i] === ' ') {
      return count;
    }
    count++;
  }

  return count;
};

module.exports = { lengthOfLastWord };
