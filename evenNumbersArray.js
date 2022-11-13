// Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

// For example:

// ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
// ([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
// ([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]


// [arr], num
// never be empty, at least num in the array
// [2,4], 2
// [] -> last even nums


function evenNumbers(array, number) {
  // Filter out odd nums
  // grab n last nums from hte filtered array

  // for - grabbing even nums O(n)
  // for - grabb total from right o(n)
    return array.filter(element => element % 2 ===0).slice(-number)
  }
// asking questions of using es6 one liners do you prefer comments etc
  const nEvenNums = (arr,num) => arr.filter(n => n % 2 === 0).splice(-num)

  // Don't slouch on doing the examples. on third one make your own
  console.log(nEvenNums([1,2,3,4,5,6,7,8,9],3), '[2,6,8]')