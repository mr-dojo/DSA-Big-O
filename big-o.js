/* WHAT IS THE BIG-O FOR THIS

1) Determine the Big O for the following algorithm:
You are sitting in a room with 15 people. You want to find a playmate for your dog,
preferably of the same breed. So you want to know if anyone out of the 15 people have the same breed as your dog.
You stand up and yell out, who here has a golden retriever and would like to be a playdate for my golden.
Someone yells - "I do, be happy to bring him over"

Answer: This is the holy grail and has a constant time, aka O(1). 
Reason: No matter how many people are in the room, 
or what kind of dogs they have, I will only have to yell once to find a playmate.

2) Determine the Big O for the following algorithm: 
You are sitting in a room with 15 people. You want to find a playmate for your dog who is of the same breed. 
So you want to know if anyone out of the 15 people have the same breed as your dog. 
You start with the first person and ask him if he has a golden retriever. 
He says no, then you ask the next person, and the next, 
and the next until you find someone who has a golden or there is no one else to ask.

Answer: This is a linear relationshipt, aka O(n).
Reason: The amount of people in the room is directly corrilated to the amount of times have to ask the question. (in the worst case)
*/

/*
Even or Odd
What is the Big O of the following algorithm? Explain your answer
*/
function isEven(value) {
  if (value % 2 === 0) {
    return true;
  } else return false;
}
/* 
Answer: This is the holy grail and has a constant time complexity of O(1)
Reason: No matter what value you put into the function, the if statement will only run once and return the answer.
*/

/*
Are you here?
What is the Big O of the following algorithm? Explain your answer
*/
function areYouHere(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    const el1 = arr1[i];
    for (let j = 0; j < arr2.length; j++) {
      const el2 = arr2[j];
      if (el1 === el2) return true;
    }
  }
  return false;
}
/* 
Answer: This is a Polynominal time complexity of O(n^2)
Reason: When this function is run. It has to loop through arr2 for EVERY ITEM in arr1
*/

/*
Doubler
What is the Big O of the following algorithm? Explain your answer
*/
function doubleArrayValues(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] *= 2;
  }
  return array;
}
/* 
Answer: This is a linear time complexity of O(n).
Reason: The amount of times the for loop will run is directly proportional to the array.length
*/

/*
Naive search
What is the Big O of the following algorithm? Explain your answer
*/
function naiveSearch(array, item) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      return i;
    }
  }
}
/* 
Answer: This is a linear time complexity of O(n).
Reason: The amount of times the for loop will run is directly proportional to the array.length
*/

/*
Creating pairs:
What is the Big O of the following algorithm? Explain your answer
*/
function createPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      console.log(arr[i] + ", " + arr[j]);
    }
  }
}
/* 
Answer: This is a linear time complexity of O(n).
Reason: The amount of times both for loops will run is directly proportional to arr.length 
*/

/*
Compute the sequence
What does the following algorithm do? What is its runtime complexity? Explain your answer
*/
function compute(num) {
  let result = [];
  for (let i = 1; i <= num; i++) {
    if (i === 1) {
      result.push(0);
    } else if (i === 2) {
      result.push(1);
    } else {
      result.push(result[i - 2] + result[i - 3]);
    }
  }
  return result;
}
/* 
Answer: This algorithm counts the fibonacci sequence and has a linear time complexity of O(n).
Reason: The amount of times the for loop will run is directly proportional to the size of num.
*/
