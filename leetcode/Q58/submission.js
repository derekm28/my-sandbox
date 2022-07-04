'use strict';

/**
 * @param {string} s
 * @returns {number}
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
