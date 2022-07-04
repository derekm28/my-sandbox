'use strict';

const { lengthOfLastWord } = require('./submission');

// Iteratively:

// [
//   {
//     input: 'hello world',
//     output: 5,
//   },
//   {
//     input: ' fly me     to the moon  ',
//     output: 4,
//   },
//   {
//     input: 'luffy is still joyboy',
//     output: 6,
//   },
// ].forEach(({ input, output }) => {
//   test(`lengthofLastWord - "${input}" -> ${output}`, function () {
//     expect(lengthOfLastWord(input)).toBe(output);
//   });
// });

// Alternatively:
//
test('lengthofLastWord - test 1', function () {
  expect(lengthOfLastWord('hello world')).toBe(5);
});

test('lengthofLastWord - test 2', function () {
  expect(lengthOfLastWord(' fly me    to the moon  ')).toBe(4);
});

test('lengthofLastWord - test 3', function () {
  expect(lengthOfLastWord('luffy is still joyboy')).toBe(6);
});
