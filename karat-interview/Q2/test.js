'use strict';

const { findNum } = require('./submission');

test('findNum - test 1', function () {
  expect(findNum('600,mail.yahoo.com')).toBe(600);
});
