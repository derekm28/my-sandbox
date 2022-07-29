'use strict';

const { twoSum } = require('./submission');

describe('leetcode #1 - twoSum - testcases provided by leetcode', () => {
  test('provided testcase #1', () => {
    const input = [2, 7, 11, 15];
    const target = 9;
    expect(twoSum(input, target)).toEqual([0, 1]);
  });

  test('provided testcase #2', () => {
    const input = [3, 2, 4];
    const target = 6;
    expect(twoSum(input, target)).toEqual([1, 2]);
  });

  test('provided testcase #3', () => {
    const input = [3, 3];
    const target = 6;
    expect(twoSum(input, target)).toEqual([0, 1]);
  });
});
