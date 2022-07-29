'use strict';

const { isHappy } = require('./submission');

describe('leetocde #202 - basic unit tests', () => {
  test('45 is not a happy number', function () {
    expect(isHappy(45)).toBe(false);
  });

  test('19 is not a happy number', function () {
    expect(isHappy(19)).toBe(false);
  });
});
