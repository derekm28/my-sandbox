'use strict';

/*
Suppose we have data representing the counts of how many times users have clicked on a url. This data is represented in the form of a string with the click count and url seperarted by a comma as follows:

url_count = "600,mail.yahoo.com"

Write a function that takes in  a string like this and returns the number preceding the url in integer form.

Note: Do not call split, index, indexOf, or equivalent functions for this problem.

Sample input and output:
url_count1 = "600,mail.yahoo.com" => 600
url_count1 = "15,google.com" => 15
url_count1 = "1,stackoverflow.com" => 1

Complexitiy Discussion:
The length of the input string has a constant upper limit.

*/

// const url_count1 = '600,mail.yahoo.com';
// const url_count2 = '15,google.com';
// const url_count3 = '1,stackoverflow.com';

function findNum(str) {
  //create a variable to hold numbers
  let num = '';

  //create a loop to iterate over the string
  for (let i = 0; i < str.length; i++) {
    //create if statement for str[i] equating to a number
    if (
      str[i] === '0' ||
      str[i] === '1' ||
      str[i] === '2' ||
      str[i] === '3' ||
      str[i] === '4' ||
      str[i] === '5' ||
      str[i] === '6' ||
      str[i] === '7' ||
      str[i] === '8' ||
      str[i] === '9'
    ) {
      num = num + str[i];
    }
  }
  return Number(num);
}

module.exports = { findNum };
