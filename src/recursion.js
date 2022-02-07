/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function(n) {
  if (n < 0) {
    return null;
  } else if (n === 0) {
    return 1;
  } else {
    return n * factorial(n-1);
  }
};


// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function(array) {
  var copyOfArray = array.slice();
  result = 0;
  if (array.length === 0) {
    return 0;
  } else if (array.length === 1) {
    return array[0];
  } else {
    result = copyOfArray.pop();
    return result += sum(copyOfArray);
  }
  return result;
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
  // create variable
  var result = 0;
  // base case ---- SMALLEST PIECE OF DATE IS: AND SINGLE NUM ELEMENT
  // if current ele in input array is a number
  if (!Array.isArray(array)) {
    // push that ele to new array
    return result += array;
  // recursive case ---- WHEN WOULD I HAVE TO CALL MY FUNC AGAIN: WHEN MY ELEMENT IS AN ARRAY
  // if ele is an array
  } else {
    // iterate over that array
    for (var i = 0; i < array.length; i++) {
      // access each ele
      var ele = array[i];
      // call func on ele
      result += arraySum(ele);
    }
    return result;
  }
};
arraySum([1,[2,3],[[4]],5]);

// 4. Check if a number is even.
var isEven = function(n) {
  //convert n to positive
  n = Math.abs(n);
  // check if n = 0
  if (n === 0 || n === 2) {
    // return true
    return true;
  // check if dividing n by two results in a whole number greater than 0
  } else if (n === 1) {
    // return true
    return false;
  } else if ((n - 2) >= 1) {
    // minus dividend from num; updatedNum
    var updatedNum = n - 2;
    // return a call to even on updatedNum
    return isEven(updatedNum);
  // end if
  }
};


// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  if (n > 0) {
    // create a var
    var sum = 0;
    // base case ---- SMALLEST PIECE OF DATA IS: if num is zero
    if (n === 0 || n === 1) {
      return sum += 0;
    // recursive case ---- WHEN WOULD I HAVE TO CALL THIS FUNC AGAIN: if num is greater than 0
    } else if (n > 1) {
      sum += n - 1;
      return sum += sumBelow(n-1);
    }
  } else {
    // create a var
    var sum = 0;
    // base case ---- SMALLEST PIECE OF DATA IS: if num is zero
    if (n === 0 || n === -1) {
      return sum += 0;
    // recursive case ---- WHEN WOULD I HAVE TO CALL THIS FUNC AGAIN: if num is greater than 0
    } else if (n < 1) {
      sum += n + 1;
      return sum += sumBelow(n+1);
    }
  }
};


// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var range = function(x, y) {
  // create an empty array
  var result = [];
  // edge case
  if (x === y || x === y - 1) {
    return [];
  }
  // base case ---- SMALLEST PIECE OF DATA IS: X === Y-2
  if (x === y - 2) {
    return result.concat(x + 1);
  }
  var innerRange = function(x, y) {
    result = [];
    // recursive case ---- WHEN WOULD I NEED TO CALL MY FUNC AGAIN:
    if (x < y - 2 ) {
      x = x + 1;
      result.push(x);
      innerRange(x, y)
    }
  }
  result.concat(innerRange(x, y));
  return result;
};
// debugger;
// range(8,8) // []
// range(8,9) // []
range(2,9) // [3,4,5,6,7,8]
range(-2,3) // [-1,0,1,2]
range(-3,-2) // [-2,-1,0,1])
range(8,2) // [7,6,5,4,3]
range(-9,-4) // [-8,-7,-6,-5]
range(3,-3) // [2,1,0,-1,-2]

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  // acccumulator
  var result = 1;
  var isNeg = false;
  // edge case
  if (exp === 0) {
    return 1;
  }
  //check if exp is neg
  if (exp < 0) {
    isNeg = true;
    exp = exp * -1;
  }

  var innerFunc = function(base, exp) {
    innerResult = 1;
    // base case --- smallest data is when exp = 1
    if (exp === 1) {
      return base;
    }
    // recursive case --- when would i have to call the function again? when exp is greater than 1
    if (exp > 1) {
      innerResult *= base;
      exp -= 1;
      return innerResult *= exponent(base, exp);
    }
  }
  result = innerFunc(base, exp);

  if (isNeg) {
    return 1/result;
  } else {
    return result;
  }
};
// debugger;
exponent(3,4)

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  // edge case
  if (n === 1) {
    return true
  }
  // base case --- smallest piece of data is: 1
  // check if n is 1
  if (n === 2) {
    return true
  }
  // check if n squared is a decimal
  var squareRoot = Math.sqrt(n);
  if (squareRoot % 1 !== 0) {
    // return false
    return false;
  }
  // recursive case ---- i would need to recall this function when n is greater than 2
  // check if n is greater than 2
  if (n > 2) {
    // divide n by 2
    n = Math.sqrt(n);
    // return a call to function with new n
    return powerOfTwo(n);
  }
};

// 9. Write a function that reverses a string.
var reverse = function(string) {
  // accumulative var
  var result = '';
  // base case - what is the smallest piece of data i could possibly have? one letter
  if (string.length === 1) {
    return string[0];
  }
  // recursive case - why would i call func again?
  if (string.length > 1) {
    // access last letter; set to result
    result = string[string.length - 1];
    // slice off last letter
    string = string.slice(0, string.length - 1);
    // return += reverse(new string with last letter sliced off)
    return result += reverse(string);
  }
};
// debugger;

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  var reverseStr = function(string) {
    var result = '';
    if (string.length === 1) {
      return string[0];
    }
    // recursive case - why would i call func again?
    if (string.length > 1) {
      // access last letter; set to result
      result = string[string.length - 1];
      // slice off last letter
      string = string.slice(0, string.length - 1);
      // return += reverse(new string with last letter sliced off)
      return result += reverse(string);
    }
  }
  if (reverseStr(string).toUpperCase() === string.toUpperCase()) {
    return true;
  } else {
    return false;
  }
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function(x, y) {
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
var divide = function(x, y) {
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
};

// 17. Reverse the order of an array
var reverseArr = function(array) {
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {
};

// 20. Count the occurrence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) {
  // create an accumulator called sum
  var sum = 0;
  // base case
  // the smallest piece of data is a key and a val
  // check if current key has a string as value
  if (Object.keys(obj).length === 1 && typeof obj[Object.keys(obj)[0]] === 'string') {
    // check if current key is the same as input key
    if (Object.keys(obj)[0] === key) {
      // add one to sum and return it
      return sum += 1;
    } else {
      return sum += 0;
    }
  } else {
    // recursive case
    // iterate over key value pairs
    for (var prop in obj) {
      if (prop === key) {
        sum += 1
      }
      // call func on new obj and add result to sum
      if (typeof obj[prop] === 'object') {
        sum += countKeysInObj(obj[prop], key);
      } else {
        return sum;
      }
    }
  }
  // return accumulator
  return sum;
};

// debugger;
// countKeysInObj({'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'}, 'y');

// 23. Write a function that counts the number of times a value occurs in an object.
var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// // countValuesInObj(obj, 'r') // 2
// // countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {
  // create a sum
  var sum = 0;
  // base case
  if (Object.keys(obj).length === 1 && typeof obj[Object.keys(obj)[0]] === 'string') {
    // check if current key is the same as input key
    if (obj[Object.keys(obj)[0]] === value) {
      // add one to sum and return it
      return sum += 1;
    } else {
      return sum += 0;
    }
  // recursive case
  } else {
    // recursive case
    // iterate over key value pairs
    for (var prop in obj) {
      if (obj[prop] === value) {
        sum += 1
      }
      // call func on new obj and add result to sum
      if (typeof obj[prop] === 'object') {
        sum += countValuesInObj(obj[prop], value);
      } else {
        return sum;
      }
    }
  }
  // return accumulator
  return sum;
};

// debugger;
countValuesInObj(obj, 'r') // 2
countValuesInObj(obj, 'e') // 1

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {
  // edge
  if (Object.keys(obj)[0] === oldKey) {

    // save old value from old key
    var oldVal = obj[Object.keys(obj)[0]];
    // add new key with old val
    obj[newKey] = oldVal;
    // delete old key
    delete obj[Object.keys(obj)[0]]
  }
  // base case
  // check if current obj as one key and a value of string
  if (Object.keys(obj).length === 1 && typeof obj[Object.keys(obj)[0]] === 'string') {
    // check if current key is the same as old key
    if (Object.keys(obj)[0] === oldKey) {
      // save old value from old key
      var oldVal = obj[Object.keys(obj)[0]];
      // add new key with old val
      obj[newKey] = oldVal;
      // delete old key
      delete obj[Object.keys(obj)[0]]
    // end if
    }
  // if value of current obj is an object it self
  } else {
    // iterate over that obj val
    for (var prop in obj) {
      // check if obj[prop] is a string
      if (typeof obj[prop] === 'string') {
        // check if prop is the same as oldKey
        if (prop === oldKey) {
          // save old value from old key
          var oldVal = obj[Object.keys(obj)[0]];
          // add new key with old val
          obj[newKey] = oldVal;
          // delete old key
          delete obj[Object.keys(obj)[0]]
        }
      } else {
        // call replaceKeysInObj on this value with the same old key and new key
        replaceKeysInObj(obj[prop], oldKey, newKey);
      }
    // end loop
    }
  //
  }
  // return obj
  return obj;
};
// debugger;
input = {e:{x:'y'},t:{r:{e:'r'},p:{y:'r'}},y:'e'};
replaceKeysInObj(input, 'e', 'a'); // {a:{x:'y'},t:{r:{a:'r'},p:{y:'r'}},y:'e'};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj) {
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
};

// 33. Augment every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
};
