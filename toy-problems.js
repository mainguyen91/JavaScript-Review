/* Make sure you do these last */

/*

Write a function that takes an array of integers and returns the sum of the integers after adding 1 to each.

plusOneSum([1, 2, 3, 4]); // 14

*/
function plusOneSum(nums) {
    var count = 0;
    for (var i = 0; i < nums.length; i++) {
        count += 1 + nums[i];
    };
    return count;
}

/*

Write a function that accepts a multi dimensional array and returns a flattened version.

flatten([1, 2, [3, [4], 5, 6], 7]) // [1, 2, 3, 4, 5, 6, 7]

*/
function flatten(inputArray) {

    var flatArray = inputArray.slice(0, inputArray.length);
    for (var i = 0; i < flatArray.length; i++) {
        if (flatArray[i].length !== undefined) {
            var addElems = flatten(flatArray[i]);
            flatArray.splice(i, 1)
            for (var j = addElems.length - 1; j >= 0; j--) {
                flatArray.splice(i, 0, addElems[j]);
            }
        }
    };
    return flatArray;
}


/*

Given an array [a1, a2, ..., aN, b1, b2, ..., bN, c1, c2, ..., cN] convert it to [a1, b1, c1, a2, b2, c2, ..., aN, bN, cN]

*/
var order = function (arr) {
    var obj = {};
    obj.length = 0;
    for (var i = 0; i < arr.length; i++) {
        var index = arr[i].slice(1);
        if (obj[index]) {
            obj[index].push(arr[i]);
        } else {
            obj[index] = [arr[i]];
            obj.length++;
        }
    }

    var newArr = [];
    for (var i = 1; i < obj.length + 1; i++) {
        newArr = newArr.concat(obj[i]);
    }

    return newArr;
}

var arr = ['a1', 'a2', 'b1', 'b2', 'c1', 'c2']
order(arr)
/*

There is an array of non-negative integers. A second array is formed by shuffling the elements of the first array and deleting a random element. Given these two arrays, find which element is missing in the second array.

*/
let origArray = [1, 2, 3, 4, 5]
let shuffArray = [2, 3]

var findMissing = origArray.filter(item => shuffArray.indexOf(item) === -1)

console.log(findMissing)


/*

Write a function that returns the longest word(s) from a sentence. The function should not return any duplicate words (case-insensitive).

Example

longestWords("You are just an old antidisestablishmentarian") // ["antidisestablishmentarian"]
longestWords("I gave a present to my parents") // ["present", "parents"]
longestWords("Buffalo buffalo Buffalo buffalo buffalo buffalo Buffalo buffalo") // ["buffalo"] or ["Buffalo"]

*/
function longestWords(str) {
    var words = str.split(' ');
    var longest = [];
    var len = 0;
    for (var i in words) {
        if (words[i].length == len) {
            longest.push(words[i]);
        } else if (words[i].length > len) {
            longest = [];
            len = words[i].length;
            longest.push(words[i]);
        }
    }
    return longest;
}

/*

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.

*/
function multiples() {
    var multiples = [];
    for (var i = 1; i < 1000; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            multiples.push(i);
        }
    };
    var sum = 0;
    for (var i = 0; i < multiples.length; i++) {
        sum += multiples[i];
    };

    return sum;
}
multiples();

/*

Remove duplicate characters in a given string keeping only the first occurrences. For example, if the input is ‘tree traversal’ the output will be "tre avsl".

*/
function removeDup(str) {
    var chars = str.split('');
    for (var i = 0; i < chars.length; i++) {
        if (chars.indexOf(chars[i]) !== i) {
            chars.splice(i, 1);
            i--;
        }
    };
    return chars.join('');
}


/*
Write a sum method which will work properly when invoked using either syntax below.

console.log(sum(2,3));   // Outputs 5
console.log(sum(2)(3));  // Outputs 5

*/

function sum(x, y) {
    if (!isNaN(x) && !isNaN(y)) {
        return x + y;
    } else {
        return function (y) {
            return x + y;
        }
    }
}