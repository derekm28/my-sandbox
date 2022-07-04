'use strict';

function twoSum(nums, target) {
  // create Map
  const map = new Map();
  let result;
  // create loop to iterate
  for (const [i, num] of nums.entries()) {
    // create variable for storing indexes
    const difference = target - num;

    // create if statement to see if difference is stored in map
    if (map.has(difference)) {
      result = [map.get(difference), i];
      break;
    }

    map.set(num, i);
  }
  return result;
}

module.exports = { twoSum };
