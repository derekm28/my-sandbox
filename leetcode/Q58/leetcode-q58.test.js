'use strict';

const { lengthOfLastWord } = require('./submission');

describe('leetcode #58 - lengthOfLastWord - testcases provided by leetcode', () => {
  test('provided testcase #1', () => {
    const input = 'Hello World';
    expect(lengthOfLastWord(input)).toEqual(5);
  });

  test('provided testcase #2', () => {
    const input = ' fly me    to the moon  ';
    expect(lengthOfLastWord(input)).toEqual(4);
  });

  test('provided testcase #3', () => {
    const input = 'luffy is still joyboy';
    expect(lengthOfLastWord(input)).toEqual(6);
  });
});
