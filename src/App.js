import "./App.css";
// We initialize the string input and assign a value to it.
const input = "Counting Vowels";
const numbers = [2, 4, 7, 11, 15];
const target = 9;

function App() {
  // The findSumOfTwo function takes in two parameters: numbers (an array of numbers) and target (the target number we want to find the sum of two numbers for).
  function findSumOfTwo(numbers, target) {
    // We create a new Set called numberSet to store the numbers.
    // A JavaScript Set is a collection of unique values.

    // Each value can only occur once in a Set.

    // A Set can hold any value of any data type.
    const numberSet = new Set();

    //  for loop to iterate through each element in the numbers array. The loop variable i represents the current index.
    // Inside the loop, we calculate the complement of the current number by subtracting it from the target.
    //The complement represents the number that, when added to the current number, will give the target.
    //complement refers to a number that, when added to the current number, will result in the target number.
    for (let i = 0; i < numbers.length; i++) {
      const complement = target - numbers[i];
      //  check if the numberSet already contains the complement using the has() method of the Set.
      //If it does, it means we have found a pair that adds up to the target. In that case, we return an array containing the complement and the current number.

      if (numberSet.has(complement)) {
        return [complement, numbers[i]];
      }
      // If the complement is not found in the numberSet, we add the current number to the set using the add() method. This ensures that we remember the numbers we have encountered so far.
      numberSet.add(numbers[i]);
    }
    // If the loop completes without finding a pair, we return an empty array [] to indicate that no pair of numbers adds up to the target.
    return [];
  }
  const result = findSumOfTwo(numbers, target);
  console.log(result); //  [2, 7]

  // We define the countVowels function,
  //which accepts a string as a parameter and
  //returns the count of the vowels present in that string.

  function countVowels(input) {
   // We will pass /[aeiou]/gi as a parameter to the match method, 
    // which checks and returns characters which are matching the pattern,/[aeiou]/gi, 
    // that is it returns an array of characters that are vowels.




//     Regex, short for regular expression, is a sequence of characters that forms a search pattern. It is a powerful tool used in computer science and programming for pattern matching and manipulating strings. A regular expression can be seen as a special text string that describes a search pattern.

// With regex, you can define patterns to match or search for specific strings or parts of strings. It allows you to perform tasks like searching for specific patterns, validating inputs, extracting information from strings, replacing text, and more.

    // In the given statement, the gi at the end of the regex pattern /[aeiou]/gi represents flags or modifiers that can be added to a regular expression in JavaScript. Each flag has a specific meaning:

    // The g flag (global) indicates that the pattern should be applied globally, rather than stopping after the first match. It allows the regex to find all occurrences of the pattern in the string, not just the first one.
    
    // The i flag (ignore case) indicates that the pattern should be case-insensitive. It allows the regex to match characters regardless of their case. For example, with the i flag, the pattern /[aeiou]/ would match both uppercase and lowercase vowels.
    
    

    let newCount = input.match(/[aeiou]/gi);
   // If no vowels are found we will get null 
    //so we check for null and return 0 else return the length of the array.



    
    // condition ? expression1 : expression2

    //the ternary operator is like a shorthand 
    //if-else statement. It allows you to make a decision and choose between two possible values based on the condition.



    return newCount === null ? 0 : newCount.length;
  }

  //call countVowels function
  console.log(countVowels(input));
}

export default App;


//

function countVowels(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const characters = str.toLowerCase().split('');
  let count = 0;

  for (let i = 0; i < characters.length; i++) {
    if (vowels.includes(characters[i])) {
      count++;
    }
  }

  // characters.map(letter => vowels.includes(letter) ? count++ : count = count + 0)

  return count;
}

// challenge: Sort Array with Preserved Index for -1 Values

// You are given an array a containing integers. Your task is to implement the solution function to sort the array in ascending order, while preserving the original index positions of -1 values.

// Write a function solution(a) that takes in an array a and returns a new array with the following conditions:

// All non -1 values in the array should be sorted in ascending order.
// The -1 values should retain their original index positions in the sorted array.


// sorting an array using . map to sort out all the positive numbers 


// function solution(arr){

// }

const solution = arr => {
  // / Filter out all occurrences of -1 from the array and create a new array called "filtered"
  const filtered = arr.filter((num) => num !== -1);
  // Sort the "filtered" array in ascending order
  filtered.sort((a, b) => a - b);

  // Create a new array called "newArr" using the "map" method
  const newArr = arr.map((nums) => {
    /// For each element in the original array "arr",
    // if the element is not equal to -1, replace it with the smallest element from the "filtered" array
    if (nums !== -1) {
      nums = filtered[0];
      // Remove the smallest element from "filtered" to avoid using it again
      filtered.splice(0, 1);
    }

    // Return the element (either -1 or the smallest element) to the "newArr"
    return nums;
  });

    // Return the final modified array "newArr"
  return newArr;
}



// The solution function takes an array arr as input and returns a modified version of the array.
// It filters out all occurrences of -1 from the input array and creates a new array called filtered.
// The filtered array is sorted in ascending order.
// The map method is used to create a new array newArr, where each element is either a non-negative number from the filtered array or -1.
// While mapping the elements, if the element in the original array arr is not -1, it is replaced with the smallest element from the filtered array.
// The smallest element from the filtered array is then removed to avoid using it again in the next iterations.
// The final modified array newArr is returned as the result.
// Please note that this code modifies the original array arr by replacing non-negative elements with sorted values. If you want to preserve the original array, you can create a copy before applying this solution.

console.log(solution([-1, 150, 190, 170, -1, -1, 160, 180])) // [-1, 150, 160, 170, -1, -1, 180, 190]
console.log(solution([5, 3, 1]))
console.log(solution([-1, -1, -1, -1]))
console.log(solution([100, -1, 50, -1, 75]))




// const nums = [1, 2, 3, 4, 5]
// const names = ["alice", "bob", "charlie", "danielle"]

//my try, this doesnt work, returns nan
// function squared(arr){
//   const squareArr = arr.map((num)=> nums * 2)
//   return squareArr
// }
// const squareArr = squared(nums)
// console.log(squareArr)

// this works
// const squaredNums = nums.map(num => num ** 2)
// console.log(squaredNums)

//returns above names caplitalized
// Each element in the names array is a string representing a name.

// The map function iterates over each element in the names array and applies a transformation to each element. In this case, the transformation converts the first letter of each name to uppercase and keeps the rest of the name as is.

// The code snippet is written in JavaScript and is using the map function to transform an array called names. Each element in the names array is a string representing a name.

// The map function iterates over each element in the names array and applies a transformation to each element. In this case, the transformation converts the first letter of each name to uppercase and keeps the rest of the name as is.

// const wordsWithCapitalizedFirstLetters declares a new variable that will store the result of the transformation.
// names.map(...) applies the transformation to each element of the names array.
// (name => ...) is an arrow function that takes each name as an argument and performs the transformation on it.
// name.charAt(0).toUpperCase() retrieves the first character of the name using charAt(0) and converts it to uppercase using toUpperCase().
// name.slice(1) retrieves the rest of the name starting from the second character using slice(1).
// + concatenates the uppercase first letter with the rest of the name.
// The transformed name is returned as the result of the arrow function.
// The transformed names are stored in the wordsWithCapitalizedFirstLetters array.

// This code snippet ensures that the first letter of each name in the names array is capitalized while keeping the rest of the name unchanged.

// const wordsWithCapitalizedFirstLetters = names.map(name => name.charAt(0).toUpperCase() + name.slice(1));
// console.log(wordsWithCapitalizedFirstLetters);

// This function takes in an array of numbers (numbers) and a target number (target). It uses a map called complements to store the complements of the numbers encountered so far. The map is used to efficiently check if a complement exists in the array.

// Create an empty map called complements to store the complements of the numbers encountered.
// Iterate over each number in the numbers array using a for loop.
// For each number, calculate its complement by subtracting it from the target value.
// Check if the complement exists in the complements map using the has method.
// If the complement exists, return an array containing the complement and the current number.
// If the complement does not exist, add the current number to the complements map with a value of true.
// If the loop finishes without finding a pair, return an empty array [] to indicate that no such pair exists.

// function findSumOfTwo(numbers, target) {
//   const complements = new Map();

//   for (let i = 0; i < numbers.length; i++) {
//     const currentNum = numbers[i];
//     const complement = target - currentNum;

//     if (complements.has(complement)) {
//       return [complement, currentNum];
//     }

//     complements.set(currentNum, true);
//   }

//   return [];
// }
