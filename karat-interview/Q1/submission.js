/*
Our sensor technology has received a major upgrade, and now provides two dimensional images using nested arrays.

- Every pixel is still a 1 or 0.
- The image will contain exactly one rectangle of 0s on a background of 1s.
- We consider the top left corner to be 0,0.

Write a function that takes the image as input and returns the row and column indices of the rectangle's top left corner.

Sample input and output:

image1 = [
    [1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1],
    [1,1,1,0,0,0,1],
    [1,1,1,0,0,0,1],
    [1,1,1,1,1,1,1]
]
find_rectangle(image1) => (2,3) row, column

image2 = [
    [1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1],
    [1,1,1,1,1,1,0]
]
find_rectangle(image1) => (4,6) row, column

image3 = [
    [1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1],
    [1,1,1,1,1,0,0],
    [1,1,1,1,1,0,0]
]
find_rectangle(image1) => (3,5) row, column
 */

// const image1 = [
//   [1, 1, 1, 1, 1, 1, 1],
//   [1, 1, 1, 1, 1, 1, 1],
//   [1, 1, 1, 0, 0, 0, 1],
//   [1, 1, 1, 0, 0, 0, 1],
//   [1, 1, 1, 1, 1, 1, 1],
// ];
//find_rectangle(image1) => (2,3) row, column

// const image2 = [
//   [1, 1, 1, 1, 1, 1, 1],
//   [1, 1, 1, 1, 1, 1, 1],
//   [1, 1, 1, 1, 1, 1, 1],
//   [1, 1, 1, 1, 1, 1, 1],
//   [1, 1, 1, 1, 1, 1, 0],
// ];
//find_rectangle(image1) => (4,6) row, column

// const image3 = [
//   [1, 1, 1, 1, 1, 1, 1],
//   [1, 1, 1, 1, 1, 1, 1],
//   [1, 1, 1, 1, 1, 1, 1],
//   [1, 1, 1, 1, 1, 0, 0],
//   [1, 1, 1, 1, 1, 0, 0],
// ];
//find_rectangle(image1) => (3,5) row, column

function find_rectangle(arr) {
  let target = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i[j]] !== target) {
        j++;
      } else {
        return [i, j];
      }
    }
  }
}

module.exports = { find_rectangle };
