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
