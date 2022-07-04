'use strict';

// develop test for #1
const { twoSum } = require('./submission');

// Iteratively:

[
  {
    input: [2, 7, 11, 15],
    target: 9,
    output: [0, 1],
  },
  {
    input: [3, 2, 4],
    target: 6,
    output: [1, 2],
  },
  {
    input: [3, 3],
    target: 6,
    output: [0, 1],
  },
].forEach(({ input, output, target }) => {
  test(`twoSum - "${input}" -> ${output}`, function () {
    expect(twoSum(input, target)).toEqual(output);
  });
});

// test(`twoSum - "${input}" -> ${output}`, function () {
//     expect(twoSum(input)).toBe(output);
// });

// test('should return indexes that equal target', function () {
//     expect(twoSum(input)).toBe(output);
// })

// Alternatively:
//
// test('lengthofLastWord - test 1', function () {
//   expect(lengthOfLastWord('hello world')).toBe(5);
// });

// test('lengthofLastWord - test 2', function () {
//   expect(lengthOfLastWord(' fly me    to the moon  ')).toBe(5);
// });

// test('lengthofLastWord - test 3', function () {
//   expect(lengthOfLastWord('luffy is still joyboy')).toBe(5);
// });
