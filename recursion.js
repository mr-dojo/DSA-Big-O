"use strict";

// Example of a recursive algorithms

//_______________SUM OF_____________________

const sumOf = function(list) {
  // Base case
  if (list.length === 1) {
    return list[0];
  }
  // General case
  return list[0] + sumOf(list.slice(1));
};

let lst = [2, 4, 6, 8, 10];
// console.log(sumOf(lst));

//_______________COUNT SHEEP____________________

const countSheep = function(sheep) {
  if (sheep === 0) {
    return console.log("All the sheep have jumped over the fence");
  }
  console.log("Another sheep jumps over the fence");
  return countSheep(sheep - 1);
};

let sheep = 15;
// countSheep(sheep);

//_________________POWER CALC_____________

const powerCalculator = function(base, expoent) {
  if (expoent === 1) {
    return base;
  }
  if (expoent <= 0) {
    return console.log("exponent should be greater than zero");
  }
  console.log(base);
  return base * powerCalculator(base, expoent - 1);
};

let base = 10;
let expoent = -2;
// console.log(powerCalculator(base, expoent));

//_______________REVERSE STRING________________

const reverseString = function(string) {
  let newString = "";
  if (string.length === 1) {
    return string;
  }
  return reverseString(string.slice(1)) + string.charAt(0);
};

let string = "A quick brown fox jumps over the lazy dog";
// console.log(reverseString(string));

//______________nth Triangular Number_______________
/* Calculate the nth triangular number. 
A triangular number counts the objects that can form an equilateral triangle. 
The nth triangular number is the number of dots composing a triangle with n dots on a side, 
and is equal to the sum of the n natural numbers from 1 to n. 
This is the Triangular Number Sequence: 1, 3, 6, 10, 15, 21, 28, 36, 45. 
                          *
            *           *    *
*     |   *   *  |   *    *    *  |

 1st       2nd           3rd             nth?  */

// Instead of logging all nth triangular numbers... this CHECKS A NUMBER to see if it's an equilateral triangular number
const nthTriNumChecker = function(num, count) {
  if (num === 0) {
    return console.log(
      "YES this number can be made into an equilateral triangle"
    );
  } else if (num < 0) {
    return console.log("Not an equilateral triangular number");
  }
  count += 1;
  return nthTriNumChecker(num - count, count);
};

let count = 0;
let num = 21;
// console.log(nthTriNum(num, count));

// This should log all the numbers up to "num" that are equilateral triangular numbers BROKE
const nthTriNum = function(numberCap, sequenceArray) {
  if (numberCap === 0) {
    return numberCap;
  }
  console.log(` number = ${numberCap} & array = ${sequenceArray}`);
  sequenceArray.push(nthTriNum(numberCap - 1, sequenceArray));
  return sequenceArray.join();
};

let sequenceArray = [];
let numberCap = 6;
// console.log(nthTriNum(numberCap, sequenceArray));

//_________________STRING SPLITTER_________________________ BROKE
const stringSplitter = function(str, arr) {
  if (str.length === 0) {
    return str;
  }
  let arrayValues;
  arrayValues = stringSplitter(str.slice(1), arr);
  console.log(arrayValues);
  return arrayValues;
};

let arr = [];
let str = "03/25/2020";
// console.log(stringSplitter(str, arr));

//_____________________Fibonacci______________________
const fibonacci = fibNumber => {
  if (fibNumber === 0) {
    return fibNumber;
  }
  console.log(bothNumbers);
  fibonacci(fibNumber - 1, bothNumbers);
  console.log(bothNumbers[0] + bothNumbers[1]);
  bothNumbers[1] = bothNumbers[0];
  bothNumbers[0] = bothNumbers[0] + bothNumbers[1];
  return bothNumbers;
};
const fibNumber = 6;
// console.log(fibonacci(fibNumber));

/*Write a recursive function that finds the factorial of a given number. 
The factorial of a number can be found by multiplying that number by each number between itself and 1. 
For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120. */
//__________________Factoral____________________________
const findFactoral = factoralNumber => {
  if (factoralNumber === 1) {
    return factoralNumber;
  }
  return findFactoral(factoralNumber - 1) * factoralNumber;
};

const factoralNumber = 6;
// console.log(findFactoral(factoralNumber));

//_______________________Maze________________________________
/*You have entered a Maze and need to find your way out of it. There are more than one possible paths through the Maze to the single exit point. Write a recursive function that will help you find a possible path though the maze.

You can use the following mazes to test your program.

let mySmallMaze = [
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
];

let maze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];
The Maze is represented as a N*M matrix (in the above case, a 3X3 or a 5X7 array). The starting point is the top left corner and the exit is indicated by e. For simplicity purpose, use the bottom right corner of the maze as the exit. You can't go outside the boundaries of the maze. The maze has passages that are blocked and you can't go through them. These blocked passages are indicated by *. Passing through a blocked cell as well as passing though a cell that you have already passed before are forbidden.

For the above maze, a possible exit path can be RRDDLLDDRRRRRR*/

const mazeRunner = mazeArray => {
  if (mazeArray === [["e"]]) {
    return mazeArray;
  }

  return mazeRunner(mazeArray.slice(1));
};

let mySmallMaze = [
  [" ", " ", " "],
  [" ", "*", " "],
  [" ", " ", "e"]
];
// console.log(mazeRunner(mySmallMaze));

//______________________________10. Anagrams__________________________
/*
An anagram is any word or phrase that uses the letters of a given ("subject") word or phrase in another, rearranged order. Write a function that creates an anagram list, listing all the rearrangements of a given word. For example, if the user types "east", the program should list all 24 permutations, including "eats", "etas", "teas", and non-words like "tsae".

Hint: For your algorithm, you might want to think about a prefix and use that to create the new words. For example, given "east", use "e" as a prefix and place it in front of all 6 permutations of "ast" — "ast", "ats", "sat", "sta", "tas", and "tsa". This will give you the words "east", "eats", "esat", "esta", "etas", and "etsa". Continue this way until you find all the anagrams for "east". Then you can use "a" as a prefix and permute the remaining words "est". For "east", there should be 24 words.
*/

const findAnagrams = word => {
  if (word === "") {
    return word;
  }

  let splitWord = word.split("");

  console.log(splitWord);
  findAnagrams(word.slice(1));

  return;
};
let word = "dog";
// console.log(findAnagrams(word));

function sum(array) {
  let sum = 0,
    ticks = 1;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
    ticks++;
  }
  return { result: sum, ticks };
}

// console.log(sum([1, 2, 3]));
// console.log(sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// console.log(
//   sum([
//     1,
//     2,
//     3,
//     4,
//     5,
//     6,
//     7,
//     8,
//     9,
//     10,
//     11,
//     12,
//     13,
//     14,
//     15,
//     16,
//     17,
//     18,
//     19,
//     20,
//     21,
//     22,
//     23,
//     24,
//     25,
//     26,
//     27,
//     28,
//     29,
//     30,
//     31,
//     32,
//     33,
//     34,
//     35,
//     36,
//     37,
//     38,
//     39,
//     40,
//     41,
//     42,
//     43,
//     44,
//     45,
//     46,
//     47,
//     48,
//     49,
//     50,
//     51,
//     52,
//     53,
//     54,
//     55,
//     56,
//     57,
//     58,
//     59,
//     60,
//     61,
//     62,
//     63,
//     64,
//     65,
//     66,
//     67,
//     68,
//     69,
//     70,
//     71,
//     72,
//     73,
//     74,
//     75,
//     76,
//     77,
//     78,
//     79,
//     80,
//     81,
//     82,
//     83,
//     84,
//     85,
//     86,
//     87,
//     88,
//     89,
//     90,
//     91,
//     92,
//     93,
//     94,
//     95,
//     96,
//     97,
//     98,
//     99,
//     100
//   ])
// );

// _____________________________ O(1) the holy grail _________________________-

function getRandomItem(array) {
  let ticks = 0;
  // Get a random number and access that element in the array
  const item = array[Math.floor(Math.random() * array.length)];
  ticks++;
  return {
    result: item,
    ticks: ticks
  };
}

// console.log(getRandomItem([1, 2, 3]));
// console.log(
//   getRandomItem([
//     1,
//     2,
//     3,
//     4,
//     5,
//     6,
//     7,
//     8,
//     9,
//     10,
//     11,
//     12,
//     13,
//     14,
//     15,
//     16,
//     17,
//     18,
//     19,
//     20,
//     21,
//     22,
//     23,
//     24,
//     25,
//     26,
//     27,
//     28,
//     29,
//     30,
//     31,
//     32,
//     33,
//     34,
//     35,
//     36,
//     37,
//     38,
//     39,
//     40,
//     41,
//     42,
//     43,
//     44,
//     45,
//     46,
//     47,
//     48,
//     49,
//     50,
//     51,
//     52,
//     53,
//     54,
//     55,
//     56,
//     57,
//     58,
//     59,
//     60,
//     61,
//     62,
//     63,
//     64,
//     65,
//     66,
//     67,
//     68,
//     69,
//     70,
//     71,
//     72,
//     73,
//     74,
//     75,
//     76,
//     77,
//     78,
//     79,
//     80,
//     81,
//     82,
//     83,
//     84,
//     85,
//     86,
//     87,
//     88,
//     89,
//     90,
//     91,
//     92,
//     93,
//     94,
//     95,
//     96,
//     97,
//     98,
//     99,
//     100
//   ])
// );

//_______________________Logarithmic time ___________________________
function howManyLessThanNitems(arr, n) {
  let ticks = 0;
  /* If the 1st element in the array is greater than `n`, return 0,
       because no items in the array are less than `n`. */
  if (!arr.length || arr[0] >= n) {
    ticks++;
    return 0;
  }

  let lowIndex = 0,
    highIndex = arr.length;

  while (highIndex > lowIndex) {
    // Find midpoint
    let midIndex = Math.floor((highIndex + lowIndex) / 2);
    /* If `midIndex` element is greater than `n`, that means all elements
           to the right of `midIndex` are also greater than `n`, so
           we only need to focus on elements to the left of `midIndex`.
           We set `highIndex` to the current value of `midIndex` so next time
           through the loop, we'll only look at the left half */
    if (arr[midIndex] >= n) {
      highIndex = midIndex;
      ticks++;
    } else if (arr[midIndex + 1] < n) {
      /* If the element to the right of `midIndex` is less than `n`, then we
           know that we need to check the items to the right of `midIndex`, so
           we set `lowIndex` to the current value of `midIndex`, so that next
           time through the loop we only look at the right side */
      lowIndex = midIndex;
      ticks++;
    } else {
      /* Otherwise, if the element to the right of `midIndex` is greater
           than or equal to `n`, we know that the item at `midIndex` is the last
           item that's less than `n`, so we return `midIndex +  1` to get the total
           number of items that are less than `n` */
      ticks++;
      return {
        result: midIndex + 1,
        ticks: ticks
      };
    }
  }
}

// console.log(howManyLessThanNitems([1, 2, 3], 2));
// console.log(
//   howManyLessThanNitems(
//     [
//       1,
//       2,
//       3,
//       4,
//       5,
//       6,
//       7,
//       8,
//       9,
//       10,
//       11,
//       12,
//       13,
//       14,
//       15,
//       16,
//       17,
//       18,
//       19,
//       20,
//       21,
//       22,
//       23,
//       24,
//       25,
//       26,
//       27,
//       28,
//       29,
//       30,
//       31,
//       32,
//       33,
//       34,
//       35,
//       36,
//       37,
//       38,
//       39,
//       40,
//       41,
//       42,
//       43,
//       44,
//       45,
//       46,
//       47,
//       48,
//       49,
//       50,
//       51,
//       52,
//       53,
//       54,
//       55,
//       56,
//       57,
//       58,
//       59,
//       60,
//       61,
//       62,
//       63,
//       64,
//       65,
//       66,
//       67,
//       68,
//       69,
//       70,
//       71,
//       72,
//       73,
//       74,
//       75,
//       76,
//       77,
//       78,
//       79,
//       80,
//       81,
//       82,
//       83,
//       84,
//       85,
//       86,
//       87,
//       88,
//       89,
//       90,
//       91,
//       92,
//       93,
//       94,
//       95,
//       96,
//       97,
//       98,
//       99,
//       100
//     ],
//     99
//   )
// );

//____________________ Exponential time O(2^n)_____________________________________
function countTriangle(layers) {
  let ticks = 1;
  let count = 0; // the number of dots we've counted so far
  let layer = 0; // the current layer we're on
  let lastLayer = 1; // the number of dots we counted in the previous layer
  while (layer < layers) {
    ticks++;
    let newLayer = 0; // the number of dots we've counted so far in the current layer
    for (let i = 0; i < lastLayer; i++) {
      ticks++;
      newLayer += 2;
    }
    lastLayer = newLayer;
    count += lastLayer;
    layer++;
  }
  return {
    result: count,
    ticks: ticks
  };
}

// console.log(countTriangle(2));
// console.log(countTriangle(4));
console.log(countTriangle(16));
