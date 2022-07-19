'use strict';

const { isHappy } = require('./submission');

test('isHappy - test 1', function () {
  expect(isHappy(45)).toBe(false);
});

test('isHappy - test 1', function () {
  expect(isHappy(19)).toBe(false);
});
