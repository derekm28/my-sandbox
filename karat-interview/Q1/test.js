'use strict';

const { find_rectangle } = require('./submission');

const image3 = [
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 0, 0],
  [1, 1, 1, 1, 1, 0, 0],
];

test('findNum - test 1', function () {
  expect(find_rectangle(image3)).toBe(3, 5);
});
