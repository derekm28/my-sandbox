'use strict';

const { find_rectangle } = require('./submission');

/**
 * These tests do not pass yet
 */

describe('karat q1 - testcases provided by karat', () => {
  test('image 1', () => {
    const image1 = [
      [1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 0, 0, 0, 1],
      [1, 1, 1, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 1],
    ];

    expect(find_rectangle(image1)).toEqual([2, 3]);
  });

  test('image 2', () => {
    const image2 = [
      [1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 0],
    ];

    expect(find_rectangle(image2)).toEqual([4, 6]);
  });

  test('image 3', () => {
    const image3 = [
      [1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 0, 0],
      [1, 1, 1, 1, 1, 0, 0],
    ];

    expect(find_rectangle(image3)).toEqual([3, 5]);
  });
});
