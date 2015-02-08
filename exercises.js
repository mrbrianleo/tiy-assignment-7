/**
 *
 */

// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------

function max(a, b){
  //...
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(a, b, c){
  //...
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else {
    return c;
  }
}

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
  //...
  if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
    return true;
  } else {
    return false;
  }
}

// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// ---------------------

function sum(nums){
  //...
  var theAnswer = nums.reduce(function(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
  });

  return theAnswer;
}

function multiply(nums){
  //...
  var theAnswer = nums.reduce(function(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
  });

  return theAnswer;
}

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(string){
  //
  var splitString = string.split("");
  var reverseString = splitString.reverse();
  var joinString = reverseString.join("");
  return joinString;
}

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

var arrayOfWords = ["brown", "red", "green", "blue", "turquoise", "yellow", "gold", "somereallylongcolor"]

function findLongestWord(words) {

  var longestWord = "";

  arrayOfWords.forEach(function(word) {
    if (word.length > longestWord.length) {
      longestWord = word;
    } 
  });
  return longestWord;
}

// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(words, i){
    //...
}

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string){
    //...
}