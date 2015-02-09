var person = [
{name: "Brian", age: 49},
{name: "Joe",   age: 17},
{name: "John",  age: 90},
{name: "Luke",  age: 56},
{name: "David", age: 34},
];


var nums = "123456".split("");


var sum = nums.reduce(function(memo,item) {
  return memo + item;
});



var sum = nums.reduce(function(memo,item) {
  console.log("memo: " + memo);
  console.log("item: " + item);
  console.log("-------------\n");
  return memo + item;
});


function isVowel(char){
  //...
  var vowels = "aeiou".split("");
  if (char === vowels) {
    return true;
  } else {
    return false;
  }
}


///............................................................................................................

//how do we find the value of wood in an array?

var materials = ["plastic", "metal", "glass", "cloth"]

var hasWood = function(materials) {

  var containsWood = false;

  materials.forEach(function(currentMaterial) {            ////accessing a property on materials
  if (currentMaterial === "wood") {
    containsWood = true;
  }
});
 
  return containsWood;
}

///^^first piece of problem and solves does the array contain wood

// now we have the items and we have a hasWood function that we can use

//2nd step filter down the items that wood

var itemsWithWood = items.filter(function(currentItem) {    ///have current item and whether or not we want to keep it
  var currentMaterials = currentItem.materials;
  var containsWood = hasWood(currentMaterials);
  return containsWood;
});

///3rd step

var titles = itemsWithWood.map(function(currentItem) {
  return (currentItem.title + " is made with wood");
});

///adding to function 

function titlesWithWood () {

var itemsWithWood = items.filter(function(currentItem) {    ///have current item and whether or not we want to keep it
  var currentMaterials = currentItem.materials;
  var containsWood = hasWood(currentMaterials);
  return containsWood;
});

var titles = itemsWithWood.map(function(currentItem) {
  return (currentItem.title + " is made with wood");
});

return titles;

}

///............................................................................................................

str;

[convert to array of chars]
now we have [chars]
set empty object [mapobj]
[loop over chars]
  [currentChar]
  [does mapobj have property for currentChar]
    [if true]
      [increment that property]
    [if false]
      [add that property]
      [give value of one]


///............................................................................................................




var myArray = ["brown", "red", "green", "blue", "turquoise", "yellow", "gold"]


= if(longestWord > currentWord) {
  return longestWord;
} else {
  return currentWord = longestWord
}



for (var longestWord = ""; longestWord.length > currentWord.length;)
  









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

function filterLongWords(words, i)

  arrayOfWords.filter(function(word) {
    if (word.length > i) {
      return word;
  })
}

var arrayOfWords = ["brown", "red", "green", "blue", "turquoise", "yellow", "gold", "somereallylongcolor"]
var i;

function filterLongWords(words, i) {

  var longestWords = arrayOfWords.filter(function(word) {
    return word.length > i;
  });
  return longestWords;
}


function charFreq(string){
    //...
    //need to split the string to an array of letters
    var splitChars = string.split("");
    //need to count occurence of each string in array
    //create empty object
    var myObj;

  splitChars.forEach(function(letter) {
    if (letter = myObj) {
      return letter++;
    } myObj = letter;
  })
  return myObj;
}






























