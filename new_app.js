

// 59-masala

// function nthSmallest(arr, n) {
// arr.sort( (a, b) => a-b);
//     return arr[n - 1]
// }
//
// // Test case
// console.log(nthSmallest([7, 10, 4, 3, 20, 15], 3)); // Output: 7
// console.log(nthSmallest([7, 10, 4, 3, 20, 15], 4)); // Output: 10



// 60-masala

// function mostFrequent(arr) {
//     let result = [];
//     let sne = arr[0]
//     for (let i = 0; i < arr.length; i++) {
//         let res = 0;
//         for (let j = 0; j < arr.length; j++) {
//             if(arr[i] == arr[j]) {
//                 res++;
//             }
//         }
//         if(res < result){
// result = res;
// sne = result
//         }
//     }
//     return sne
// }
//
// // Test case
// console.log(mostFrequent([1, 3, 1, 3, 2, 1])); // Output: 1
// console.log(mostFrequent([3, 3, 3, 2, 2, 1])); // Output: 3




// 61-masala
// function mostFrequentChar(str) {
//     const frequencyMap = [...str].reduce((acc, char) => {
//         acc[char] = (acc[char] || 0) + 1;
//         if (!acc.max || acc[char] > acc[acc.max]) {
//             acc.max = char;
//         }
//         return acc;
//     }, {});
//
//     return frequencyMap.max;
// }
//
// // Test case
// console.log(mostFrequentChar("aabbbcccc")); // Output: "c"
// console.log(mostFrequentChar("abcdabcdabcd")); // Output: "a"



// 62-masala
// function firstMissingPositive(nums) {
//     nums.sort((a, b) => a - b); // Massivni saralash
//     let smallestPositive = 1; // Eng kichik musbat sonni 1 ga o'rnatish
//
//     for (let num of nums) {
//         if (num === smallestPositive) {
//             smallestPositive++; // Agar son `smallestPositive` ga teng bo'lsa, uni oshirish
//         }
//     }
//
//     return smallestPositive;
// }
//
// // Test case
// console.log(firstMissingPositive([3, 4, -1, 1])); // Output: 2
// console.log(firstMissingPositive([1, 2, 0])); // Output: 3




// 63-masala
// function printCharsInLine(s) {
//    s = s.split("").join(" ");
//    return s;
// }
//
// // Test case
// console.log(printCharsInLine("hello")); // Output: "h e l l o"




// 64-masala
// function longestCommonPrefix(strs) {
//    let arr = strs[0]
//     for (let i = 0; i < arr.length; i++) {
//         for(let item of strs) {
// if(item[i] !== arr[i]) {
//     return item.slice(0,i)
// }
//         }
//     }
// }
//
// // Test case
// console.log(longestCommonPrefix(["flower", "flow", "flight"])); // Output: "fl"
// console.log(longestCommonPrefix(["dog", "racecar", "car"])); // Output: ""


// 65-masala
// function maxSumSubmatrix(matrix) {
//    let max_count = 0
//     let result = null
//     for (let i = 0; i < matrix.length; i++) {
//         let total = 0
//         for (let j = 0; j < matrix[i].length; j++) {
//             total += matrix[i][j]
//         }
//         if(total > max_count) {
//             max_count = total
//             result = matrix[i]
//         }
//     }
//     return result
// }
//
// // Test case
// console.log(maxSumSubmatrix([
//     [10, 2, 3],
//     [4, 11, 6],
//     [7, 8, 9]
// ])); // [7, 8, 9]






// 66-masala
// function intersection(nums1, nums2) {
//     for(let item of nums1) {
//         if(nums2.includes(item)){
//             return item;
//         }
//     }
// }
//
// // Test case
// console.log(intersection([1, 2, 2, 1], [2, 2])); // Output: [2]
// console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4])); // Output: [4, 9]







// 67-masala
// function twoSumPairs(nums, target) {
//     let result =[];
//     for(let i = 0; i < nums.length; i++) {
//         for(let j = i + 1; j < nums.length; j++) {
//             if(nums[i] + nums[j] === target) {
//                 result.push([nums[i], nums[j]]);
//             }
//         }
//     }
//     return result;
// }
//
// // Test case
// console.log(twoSumPairs([2, 7, 11, 15], 9)); // Output: [[2, 7]]
// console.log(twoSumPairs([3, 2, 4], 6)); // Output: [[2, 4]]





// 68-masala
// function charFrequency(s) {
//   let result = {};
//   for(let item of s) {
//       result[item] = (result[item] || 0) + 1;
//   }
//   return result;
// }
//
// // Test case
// console.log(charFrequency("aabbcc")); // Output: { a: 2, b: 2, c: 2 }
// console.log(charFrequency("hello")); // Output: { h: 1, e: 1, l: 2, o: 1 }







// 69-masala
// function deepestValue(obj) {
//     let result = null
//     let total = 0;
//     let arr = [{value:obj,step:1}]
//     for (let i = 0; i < arr.length; i++) {
//         let {value,step} = arr[i]
//         for(let key in value){
//             if(typeof value[key] === "object"){
//                 arr.push({value:value[key],step:step + 1})
//             }else if(step > total){
//                 total =step
//                 result = value[key]
//             }
//         }
//     }
//     return result
// }
//
// // Test case
// const obj = {
//     a: 1,
//     b: {
//         c: 2,
//         d: {
//             e: 3,
//             f: {
//                 g: 4
//             }
//         }
//     }
// };
// console.log(deepestValue(obj)); // Output: 4




// 70-masala
// function concatStrings(obj) {
//     let result = '';
//     let stack = [obj];
//
//     while (stack.length > 0) {
//         let current = stack.pop();
//
//         for (let key in current) {
//             if (typeof current[key] === 'object' && current[key] !== null) {
//                 stack.push(current[key]);
//             } else if (typeof current[key] === 'string') {
//                 result += current[key];
//             }
//         }
//     }
//
//     return result;
// }
//
// // Test case
// const obj = {
//     a: "Hello",
//     b: {
//         c: " ",
//         d: {
//             e: "World",
//             f: {
//                 g: "!"
//             }
//         }
//     }
// };
// console.log(concatStrings(obj)); // Output: "Hello World!"




// 71-masala
// function sortByLength(s) {
//     return s
//         .split(' ')
//         .sort((a, b) => a.length - b.length)
//         .join(' ');
// }
//
// // Test case
// console.log(sortByLength("short longest medium")); // Output: "short medium longest"
// console.log(sortByLength("a quick brown fox")); // Output: "a fox quick brown"







// 72-masala
// function findNumbers(obj) {
//     const numbers = [];
//     const stack = [obj];
//
//     while (stack.length > 0) {
//         const current = stack.pop();
//
//         for (let key in current) {
//             if (typeof current[key] === 'object' && current[key] !== null) {
//                 stack.push(current[key]);
//             } else if (typeof current[key] === 'number') {
//                 numbers.push(current[key]);
//             }
//         }
//     }
//
//     return numbers;
// }
//
// // Test case
// const obj = {
//     a: 1,
//     b: {
//         c: 2,
//         d: {
//             e: 3,
//             f: {
//                 g: 4
//             }
//         }
//     }
// };
// console.log(findNumbers(obj)); // Output: [1, 2, 3, 4]


// 73-masala
// function longestWord(s) {
//   let str  = s.split(' ');
//   let long =  0;
//   let word = null;
//   for(let i = 0; i <= str.length -1; i++) {
//       if(long < str[i].length) {
//           long = str[i].length;
//           word = str[i];
//       }
//   }
//   return word
// }

// console.log(longestWord("Find the longest word in this sentence")); // Output: "sentence"
// console.log(longestWord("JavaScript is awesome")); // Output: "JavaScript"



// 74-masala

// function reverseUpperCase(s) {
// s = s.toUpperCase();
// return s;
// }

// console.log(reverseUpperCase("Hello World")); // Output: "DLROW OLLEH"
// console.log(reverseUpperCase("JavaScript")); // Output: "TPIRCASAVAJ"



// 75-masala
// function extractNumbers(s) {
//     return s.split(/\D+/).filter(Boolean).map(Number)
// }
// console.log(extractNumbers("There are 3 apples and 4 oranges")); // Output: [3, 4]
// console.log(extractNumbers("123 Main St.")); // Output: [123]


// izoh : "split(/\D+/)." stckoverflowdan copy qildim






// 76-masala

// function valueTypes(obj) {
//     const types = [];
//     const stack = [obj];
//
//     while (stack.length > 0) {
//         const current = stack.pop();
//
//         for (let key in current) {
//             const value = current[key];
//             types.push(typeof value);
//
//             if (value && typeof value === 'object') {
//                 stack.push(value);
//             }
//         }
//     }
//
//     return types;
// }
//
// // Test case
// const obj = {
//     a: 1,
//     b: "string",
//     c: true,
//     d: {
//         e: 3.14,
//         f: null,
//         g: {
//             h: undefined,
//             i: [1, 2, 3]
//         }
//     }
// };
// console.log(valueTypes(obj));
// // Output: ["number", "string", "boolean", "object", "number", "object", "undefined", "object"]








// 77-masala
// function invertObject(obj) {
//     const result = {};
//     const stack = [obj];
//
//     while (stack.length > 0) {
//         const current = stack.pop();
//
//         for (let key in current) {
//             const value = current[key];
//
//             if (typeof value === 'object' && value !== null) {
//                 stack.push(value);
//             } else {
//                 result[value] = key; // Agar qiymat takrorlansa, oxirgi qiymatni saqlaydi
//             }
//         }
//     }
//
//     return result;
// }
//
// // Test case
// const obj = {
//     a: 1,
//     b: {
//         c: 2,
//         d: {
//             e: 3,
//             f: {
//                 g: 4
//             }
//         }
//     }
// };
// console.log(invertObject(obj)); // Output: { 1: 'a', 2: 'c', 3: 'e', 4: 'g' }




// 78-masala
// function isPalindrome(s) {
//    let clen = s.toLowerCase().replace(/[^a-z0-9]/g, '');
//    return clen === clen.split('').reverse().join('')
// }
//
// // Test case
// console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: true
// console.log(isPalindrome("Hello, World!")); // Output: false



// 79-masala
// function sumNumbers(obj) {
//     let sum = 0;
//
//     function traverse(value) {
//         if (typeof value === 'number') {
//             sum += value;
//         } else if (typeof value === 'object' && value !== null) {
//             for (let key in value) {
//                 traverse(value[key]);
//             }
//         }
//     }
//
//     traverse(obj);
//     return sum;
// }
//
// // Test case
// const obj = {
//     a: 1,
//     b: {
//         c: 2,
//         d: {
//             e: 3,
//             f: {
//                 g: 4
//             }
//         }
//     }
// };
// console.log(sumNumbers(obj)); // Output: 10




// 80-masala
// function capitalizeWords(s) {
//     var splitStr = s.toLowerCase().split(' ');
//     for (var i = 0; i < splitStr.length; i++) {
//         splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
//     }
//     return splitStr.join(' ');
// }
//
// // Test case
// console.log(capitalizeWords("hello world from javascript")); // Output: "Hello World From Javascript"
// console.log(capitalizeWords("this is a test")); // Output: "This Is A Test"




// 81-masala
// function uniqueWords(s) {
//     return s.split(' ').filter((item,  _, arr) => arr.indexOf(item) ===arr.lastIndexOf(item))
//
// }
//
// // Test case
// console.log(uniqueWords("this is a test this is only a test")); // Output: ["only"]
// console.log(uniqueWords("hello world hello")); // Output: ["world"]




// 82-masala
// function collectValues(obj) {
//    let value =[]
//     function rex(obj){
//        for(let key in obj){
// if(typeof obj[key] === 'object' && obj[key] !== null){
// rex(obj[key]);
// }else {
//     value.push(obj[key]);
// }
//        }
//     }
//     rex(obj);
//    return value;
// }
//
// // Test case
// const obj = {
//     a: 1,
//     b: {
//         c: 2,
//         d: {
//             e: 3,
//             f: {
//                 g: 4
//             }
//         }
//     }
// };
// console.log(collectValues(obj)); // Output: [1, 2, 3, 4]




// 83-masala
// function swapFirstLast(s) {
//   return s.split(' ').map(item => {
//       if(item.length <= 1) {
//           return item;
//       }
//       return item[item.length -1] + item.slice(1,-1) + item[0]
//   }).join(" ")
// }
//
// // Test case
// console.log(swapFirstLast("hello world")); // Output: "oellh dlorw"
// console.log(swapFirstLast("a quick brown fox")); // Output: "a kuicq nrowb fxo"


// 84-masala
// function indexOfMax(arr) {
//     let res = 0
//     let resvalue = arr[0]
//     arr.forEach((item,index) => {
//      if(item > resvalue){
//          resvalue = item;
//          res = index;
//      }
//
//     })
//     return res
// }
//
// // Test case
// console.log(indexOfMax([1, 3, 7, 1, 2, 5, 7])); // Output: 2


// 85-masala
// function sqrtElements(arr) {
// return arr.map(item => Math.sqrt(item))
// }
//
// // Test case
// console.log(sqrtElements([1, 4, 9, 16, 25])); // Output: [1, 2, 3, 4, 5]



// 86-masala
// function separateEvenOdd(arr) {
//     let even = []
//     let odd  =[]
// arr.filter(item => item % 2 === 0 ? even.push(item) : odd.push(item)  )
//     return {even, odd};
// }
//
// // Test case
// console.log(separateEvenOdd([1, 2, 3, 4, 5, 6, 7, 8, 9])); // Output: { even: [2, 4, 6, 8], odd: [1, 3, 5, 7, 9] }



// 87-masala
// function gcd(a) {
//     a = a.filter(number => {
//         for(let i = 2; i <=  Math.sqrt(number);i++){
//             if( number % 2 === 0)return false;
//         }
//         return true;
//     })
//     return a;
// }
//
// // Test case
// console.log(gcd([2, 3, 4, 5, 6, 7])); // Output: [2, 3, 5, 7]


// 88-masala
// function rotateArray(arr, k) {
//    k = k % arr.length;
//    return arr.slice(-k).concat(arr.slice(0,-k));
// }
//
// // Test case
// console.log(rotateArray([1, 2, 3, 4, 5], 2)); // Output: [4, 5, 1, 2, 3]



// 89-masala
// function trimmedMean(arr) {
//     let res = arr.length
//     let d = 0
//     for (let i = 0; i < arr.length; i++) {
//         d += arr[i]
//     }
//     let od = d / res
//     return od
// }
//
// // Test case
// console.log(trimmedMean([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // Output: 5.5




// 90-masala

// function findPalindromes(arr) {
//  return arr.filter(item => {
//      let str = item.toString()
//      let rev = str.split('').reverse().join('');
//      return str === rev
//  })
// }
//
// // Test case
// console.log(findPalindromes([121, 123, 202, 345, 454])); // Output: [121, 202, 454]



// 91-masala
// function allElementsEqual(arr) {
//   let rt = arr[0]
//    return arr.every(function (item){
//        return item === rt
//    })
// }
//
// // Test case
// console.log(allElementsEqual([1, 1, 1, 1])); // Output: true
// console.log(allElementsEqual([1, 2, 1, 1])); // Output: false





// 92-masala
// function arraysHaveSameElements(arr1, arr2) {
//     arr1.sort();
//     arr2.sort();
//
//     for (let i = 0; i < arr1.length; i++) {
//         if(arr1[i] !== arr2[i]) {
//             return false;
//         }
//     }
//     return true;
// }
//
// // Test case
// console.log(arraysHaveSameElements([1, 2, 3], [3, 2, 1])); // Output: true
// console.log(arraysHaveSameElements([1, 2, 3], [3, 2, 2])); // Output: false




// 93-masala
// function isUniqueSet(arr) {
//    for (let i = 0; i < arr.length - 1; i++) {
//        if(arr[i] === arr[i+1]) {
//            return false;
//        }
//    }
//    return true;
// }
//
// // Test case
// console.log(isUniqueSet([1, 2, 3, 4])); // Output: true
// console.log(isUniqueSet([1, 2, 3, 3])); // Output: false



// 94-masala
// function hasThreeConsecutiveEvenOrOdd(arr) {
//    let even = 0;
//    let odd = 0;
//    for (let i = 0; i < arr.length; i++) {
//        if(arr[i] % 2 ===0) {
// even++;
// odd = 0;
//        }else {
//            odd++;
//            even = 0;
//        }
//        if(even === 3 || odd === 3) {
//            return true;
//        }
//    }
//    return false
// }
//
// // Test case
// console.log(hasThreeConsecutiveEvenOrOdd([1, 2, 3, 4, 5, 6, 7])); // Output: false
// console.log(hasThreeConsecutiveEvenOrOdd([1, 2, 3, 4, 6, 8, 7])); // Output: true




// 95-masala
// function isMonotonic(arr) {
//     let isIncreasing = true;
//     let isDecreasing = true;
//
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > arr[i - 1]) {
//             isDecreasing = false;
//         }
//         if (arr[i] < arr[i - 1]) {
//             isIncreasing = false;
//         }
//     }
//
//     return isIncreasing || isDecreasing;
//
// }
//
// // Test case
// console.log(isMonotonic([1, 2, 2, 3])); // Output: true
// console.log(isMonotonic([6, 5, 4, 4])); // Output: true
// console.log(isMonotonic([1, 3, 2])); // Output: false
