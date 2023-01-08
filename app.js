// qution ?
// 01:02 PM -> 13:02
// 02:11 AM -> 02:11

const checkTimeFucntion = function (time12h) {
   let [time, modifire] = time12h.split(' ');
   let [hour, minutes] = time.split(':');
   if (modifire === 'PM') hour = +hour + 12;

   return `${hour}:${minutes}`;
};

// console.log(checkTimeFucntion("01:02 PM"));
// console.log(checkTimeFucntion("05:02 PM"));
// console.log(checkTimeFucntion("10:02 AM"));
// console.log(checkTimeFucntion("01:02 AM"));

// done

// qution ?
const obj = {
   a: 10,
   name: 'dheeraj sing',

   greed() {
      return this.a;
   },

   morning: () => {
      return this.a;
   },
};

// console.log(obj.morning()); // window
// console.log(obj.greed()); // object

// window

// console.log(obj.greed());
// console.log(obj.morning());

// qution ?
// checking sum zero
// [-5,-4,-3,-2,-1, 0, 2, 4, 3, 5]

const checkFunction = function (ar) {
   for (let i = 0; i < ar.length; i++) {
      for (let j = 1; j < ar.length; j++) {
         if (ar[i] + ar[j] === 0) {
            return [ar[i], ar[j]];
         }
      }
   }
}; // n(o^2)

const chekcSumFunction = function (ar) {
   let left = 0;
   let right = ar.length - 1;

   while (left < right) {
      let sum = ar[left] + ar[right];

      if (sum === 0) {
         return [ar[left], ar[right]];
      } else if (sum > 0) {
         right--;
      } else {
         left++;
      }
   }
};

// const ar = [-5, -4, -3, -2, -1, 0, 2, 4, 4, 4];
// console.log(chekcSumFunction(ar));
// console.log(checkFunction(ar));

// qution ?
// String Anagram Problem
const isAnagram = function (string1, string2) {
   if (string1.length !== string2.length) return false;
   let obj = {};

   for (let letters of string1) {
      obj[letters] = (obj[letters] || 0) + 1;
   }

   for (let items of string2) {
      if (!obj[items]) {
         return false;
      }

      obj[items] -= 1;
   }

   // console.log(obj);
   return true;
};

// console.log(isAnagram("dheeraj", "eerjdh"));
// { d: 1, h: 1, e: 2, r: 1, a: 1, j: 1 }

// qution ?
// Counting Unique Numbers Problem

const checkUnique = function (ar) {
   let uni = [];

   for (let i = 0; i < ar.length; i++) {
      if (uni.indexOf(ar[i]) === -1) {
         uni.push(ar[i]);
      }
   }

   for (let i = 0; i < ar.length - 1; i++) {
      if (ar.indexOf(ar[i]) === i) {
         uni.push(ar[i]);
      }
   }

   return uni;
};

const arNew = [1, 10, 11, 11, 1, 3, 4, 5, 2, 1];
// console.log(checkUnique(arNew));

// sum of array of elements
const getReduceSum = function (ar) {
   let sum = 0;

   for (let i = 0; i < ar.length; i++) {
      sum += ar[i]['a'];
   }

   return sum;
};

const sumAr = [{ a: 10 }, { a: 20 }, { a: 40 }, { a: 50 }];
// console.log(getReduceSum(sumAr));

//////////////////////////////////////////////////////////////////////

// qution ?
// Check Square Elements of Another Array

const checkSqure = function (arrFirst, arrSecond) {
   let isSqure = false;
   for (let i = 0; i < arrFirst.length; i++) {
      for (let j = 0; j < arrSecond.length; j++) {
         if (arrFirst[i] * arrFirst[i] === arrSecond[j]) {
            isSqure = true;
         }

         if ((j = arrSecond.length - 1)) {
            if (!isSqure) return true;
         }
      }
   } // O(n^2) // we want to make a o(n)

   return false;
};

const firstArr = [1, 2, 2, 4];
const secondArr = [1, 4, 4, 16];

// console.log(checkSqure(firstArr, secondArr));

// qution ?
const checkSqureFunction = function (arr1, arr2) {
   let map1 = {};
   let map2 = {};
   let isSqure = false;

   for (let i = 0; i < arr1.length; i++) {
      map1[arr1[i]] = (map1[arr1[i]] || 0) + 1;
   }

   for (let j = 0; j < arr2.length; j++) {
      map2[arr2[j]] = (map2[arr2[j]] || 0) + 1;
   }

   for (let key in map1) {
      if (map2[key * key] === map1[key]) {
         map1[key] = map1[key] - map2[key * key];
      }

      if (map1[key] === 0) {
         isSqure = true;
      } else {
         isSqure = false;
         break;
      }
   }

   return isSqure;
};

// console.log(checkSqureFunction(firstArr, secondArr));

// qution ?
// How would you verify a prime number?
const checkPrime = function (num) {
   let devide = 2;
   if (num % devide === 0) {
      return true;
   } else {
      return false;
   }
};

// console.log(checkPrime(10));

// qution ?
// How could you find all prime factors of a number?

// number = 69
// number / 2 === 0 ? return number : devideo++

function primeFactors(n) {
   let fector = [];
   let devidor = 2;

   while (n > 2) {
      if (n % devidor === 0) {
         fector.push(devidor);
         n = n / devidor;
      } else {
         devidor++;
      }
   }

   return fector;
}

// console.log(primeFactors(70));

// qution ?
// Program for Fibonacci numbers

const num = 200;

const getFibonacciNumbers = function (number) {
   let a = 0;
   let b = 1;
   let sum = a + b;

   while (sum < number) {
      sum = a + b; // 1 -> 2 + 1 -> 3
      a = b; // a = 0, b = 1, a = 1
      b = sum; // b = 1, sum = 2, b = 2;

      // console.log(sum);
   }
};

// console.log(getFibonacciNumbers(num));

const str = 'dhrj';

// qution ?
const checkString = function (str) {
   const vavol = ['a', 'e', 'i', 'o', 'u'];

   for (let i = 0; i < vavol.length; i++) {
      if (str.includes(vavol[i])) return true;
   }

   return false;
};

// console.log(checkString(str));

// qution ?
let primeNumber = 5;

const checkPrimeNumber = function (num) {
   for (let i = 2; i < num; i++) {
      if (num % i === 0) {
         return false;
      } else {
         return true;
      }
   }
};

// console.log(checkPrimeNumber(primeNumber));

// qution ?
const checkFecture = function (num) {
   let nu = [];
   for (let i = 2; i < num; i++) {
      if (num % i === 0) {
         nu.push(i);
      }
   }

   return nu;
};

// console.log(checkFecture(20));

// qution ?
const primeFactorsFucntion = function (num) {
   let fector = [];
   let devide = 2;

   while (num > 2) {
      if (num % devide === 0) {
         fector.push(devide);
         num = num / devide;
      } else {
         devide++;
      }
   }

   return fector;
};

// console.log(primeFactorsFucntion(20));

// qution ?
const z = 1000;
const febonic = function (num) {
   let x = 0;
   let y = 1;
   let sum = x + y; // -> 0 + 1 => 1, 3

   while (sum < z) {
      // 999 < 1000;
      sum = x + y; // => sum = x -> 2 + y -> 3 => 5
      x = y; // 1
      y = sum; // 3

      console.log(sum);
   }
};

// console.log(febonic(z));

const arn = [1, 3, 2, 5, 6, 7, 3, 8, 10, 8];

// qution ?
const checkLarger = function (ar) {
   let temp = ar[0];

   for (let i = 0; i < ar.length; i++) {
      if (temp < ar[i]) {
         temp = ar[i];
      }
   } // o(n)

   return temp;
};

// console.log(checkLarger(arn));

// qution ?
let count = 1;
const rec = function (number) {
   if (count > number) {
      return;
   }

   console.log('print');
   count++;
   rec(10);
};

// const resultN = rec(10);
// console.log(resultN);

const shortFn = function (ar) {
   for (let i = 0; i < ar.length; i++) {
      for (let j = 0; j < ar.length; j++) {
         if (ar[i] < ar[j]) {
            [ar[i], ar[j]] = [ar[j], ar[i]];
         }
      }
   }

   return ar;
};

const noSortedAr = [1, 3, 2, 4, 5, 30, 10, 1, 10, 20, 5];

// console.log(shortFn(noSortedAr));

// qution ?
// [1,2,3,4] -> swipe
const getLarge = function () {
   let temp = 0;
   const sort = noSortedAr.filter((el) => {
      if (el > temp) {
         temp = el;
         return temp;
      }
   });

   return sort[sort.length - 1];
};
// console.log(getLarge());

const sortThis = [100, 200, 1, 3, 4, 2];

// qution ?
const sort = function (arr) {
   for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
         if (arr[i] < arr[j]) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
         }
      }
   }

   return arr;
};

// console.log(sort(sortThis));

// qution ?
const greatestCommonDivisor = function (number1, number2) {
   const firstNumberFector = [];
   const secondNumberFector = [];

   for (let i = 0; i < number1; i++) {
      if (number1 % i === 0) {
         firstNumberFector.push(i);
      }
   }

   for (let i = 0; i < number2; i++) {
      if (number2 % i === 0) {
         secondNumberFector.push(i);
      }
   }

   for (let i = firstNumberFector.length - 1; i >= 0; i--) {
      for (let j = secondNumberFector.length - 1; j >= 0; j--) {
         if (firstNumberFector[i] === secondNumberFector[j]) {
            return firstNumberFector[i];
         }
      }
   } // o(n^2)

   // o(n)
};

// console.log(greatestCommonDivisor(20, 10)); // 5
// console.log(greatestCommonDivisor(69, 169)); // 1

// qution ?
// remove duplicates and sort the array
const removeDuplicate = function (array) {
   const set = [];

   for (let i of array) {
      if (set.indexOf(i) === -1) {
         set.push(i);
      }
   }

   for (let i = 0; i < set.length; i++) {
      for (let j = 0; j < set.length; j++) {
         if (set[i] < set[j]) {
            [set[i], set[j]] = [set[j], set[i]];
         }
      }
   }

   return set;
};

// console.log(removeDuplicate([1, 3, 3, 2, 1, 5, 10, 4, 8, 3]));

// qution ?
// merge two sorted array

const mergeSortedArray = function (array1, array2) {
   /**
    * @for merge all the elements first
    * @sort sort all elements using swipe methods
    * @return return the element of array from the function
    */
   for (let i = 0; i < array2.length; i++) {
      array1.push(array2[i]);
   }

   for (let j = 0; j < array1.length; j++) {
      for (let x = 0; x < array1.length; x++) {
         if (array1[j] < array1[x]) {
            [array1[j], array1[x]] = [array1[x], array1[j]];
         }
      }
   }

   // sort the elements
   return array1;
};

// console.log(mergeSortedArray([2, 5, 6, 9], [1, 2, 3, 29, 1, 2]));

// swap number without temp
{
   a = 10;
   b = 20;
   [a, b] = [b, a];
   // console.log(a, b);
}

// qution ?
// string reverse
const reverse = function (str) {
   let reverseStr = [];

   if (!str || str.length > 2 || typeof str != 'string') return str;

   for (let i = str.length - 1; i >= 0; i--) {
      reverseStr.push(str[i]);
   }

   return reverseStr.join('');
};

// console.log(reverse("you are a nice dude"));

const reverseInPlace = function (str) {
   const arString = str
      .split(' ')
      .reverse()
      .join(' ')
      .split('')
      .reverse()
      .join('');
   console.log(arString);
};

// console.log(reverseInPlace("I am the good boy")); //  "I ma eht doog yob"

// First non repeating char

const removeDuplicateSubString = function (str) {
   let ar = [];
   let unique = [];

   for (let i = 0; i < str.length; i++) {
      ar.push(str[i]);
   }

   for (let i = 0; i < ar.length; i++) {
      if (unique.indexOf(str[i]) === -1) {
         unique.push(str[i]);
      }
   }

   return unique.join('');
};

// console.log(removeDuplicateSubString("tthhis"));

// qution ?
// check palindrome
const isPalindrome = function (str) {
   let reverse = [];
   for (let i = str.length - 1; i >= 0; i--) {
      reverse.push(str[i]);
   }
   if (reverse.join('') === str) return true;
   return false;
};

// console.log(isPalindrome("madam"));
// console.log(isPalindrome("toyota"));

// console.log(5 + ((Math.random() * 4 + 1) / 5) * 2);

// find the missing numbers from the array?

const missingNumber = function (arr) {
   let minEm = arr[0],
      maxEm = arr[arr.length - 1];
   const missingElements = [];

   for (let i = 0; i < arr.length; i++) {
      if (arr[i] > maxEm) {
         maxEm = arr[i];
      } else if (arr[i] < minEm) {
         minEm = arr[i];
      }
   }

   for (let i = minEm; i < maxEm; i++) {
      if (arr.indexOf(i) === -1) {
         missingElements.push(i);
      }
   }

   return missingElements;
};

// console.log(missingNumber([1, 2, 3, 5, 10, 8]));

const sumFinder = function (array, number) {
   let n = array.length;

   for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
         if (array[i] + array[j] === number) {
            return true;
         }
      }
   }

   return false;
};

// console.log(sumFinder([6, 4, 3, 2, 1, 7], 9));
// console.log(sumFinder([6, 4, 3, 2, 1, 7], 2));

// time complexity o(n2)

// const chekcSumFu = function (array, number) {
//     let n = array.length;
//     let left = 0;
//     let right = array.length - 1;

//     while (left < right) {
//         let sum = array[left] + array[right];

//         if (sum === number) {
//             console.log(array[left], array[right]);
//             return true;
//         } else {
//             console.log(right, left);
//             right--;
//         }
//     }

//     // return false;
// };

// console.log(chekcSumFu([4, 4, 3, 5, 1, 7], 9));

////////////////////////////////////////////////////////
/*
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.

Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
*/

const countSum = function (str) {
   const map = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
   };

   const properCase = str.toUpperCase().split('');
   let sum = 0;
   for (let i = 0; i < properCase.length; i++) {
      sum += map[properCase[i]];
   }
   return sum;
};
// countSum("LVIII");

// [1, 3, 4, 2];
// [0, 1, 2, 3];

// find the substring index wihtout indexOf method
/*
    'abcdefg', 'cd'
    [ab, cd, ef, g], cd,
    i += 0 -> 1 -> 2 -> = 2 
*/

// for (var i = 0; i < 3; i++) {
//     console.log(i)
//     setTimeout(() => {
//         console.log(i)
//     }, 1000 + i);
// }

const removeDuplicateChar = function (str) {
   const set = [];

   for (let i = 0; i < str.length; i++) {
      if (set.indexOf(str[i]) === -1) {
         set.push(str[i]);
      }
   }

   return set.join('');
};

// removeDuplicateChar('this is me some new text');

///////////////////////////////////////////

// reverse the string
const reverseStrFn = function (str) {
   let rev = [];

   for (let i = str.length; i >= 0; i--) {
      rev.push(str[i]);
   }

   return rev.join('');
};

// console.log(reverseStrFn("this is new"));

const firstNonRepeatedCharacter = function (string) {
   for (let i = 0; i < string.length; i++) {
      console.log(string.charAt(i));
   }
};

var someString = 'aabcbd';
// console.log(firstNonRepeatedCharacter(someString));

function firstNotRepeatingCharacter(s) {
   for (let i = 0; i < s.length; i++) {
      console.log(s.indexOf(s[i]), s.lastIndexOf(s[i]));
   }
}

// console.log(firstNotRepeatingCharacter("tthherrt"));

const insertFunction = function (position, place, element = null) {
   // const a = [1, 2, 3];
   // a.splice(1, 0, 4); //  1 -> add on 1 position, 0 -> we don't want to remove anything from the array, 4 -> i want to add this element into the array.
   // return a;

   const a = [1, 2, 3, 4];
   let newAr = [];

   if (!!element) {
      if (!!position) {
         for (let i = 0; i < a.length; i++) {
            if (place === i) {
               newAr.push(element);
            }
            newAr.push(a[i]);
         }
         return newAr;
      } else return a;
   } else {
      if (!!position) {
         for (let i = 0; i < a.length; i++) {
            if (a[i] !== place) {
               newAr.push(a[i]);
            }
         }
      } else {
         return a;
      }
   }

   return newAr;
};

// console.log(insertFunction(1, 3, 5));

//////////////////////////////////////////////////////////////
const findDupes = function (ar) {
   let dup = ar[0];
   for (let i = 0; i < ar.length; i++) {
      if (ar.indexOf(ar[i]) == dup) {
         dup = ar[i];
      }
   }
   return dup;
};

// console.log(findDupes([1, 2, 3, 4, 5, 6, 7, 7, 8, 6, 10]));

const findMaxMin = function (arr) {
   let max = arr[arr.length - 1],
      min = arr[0];

   for (let i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
         max = arr[i];
      } else if (arr[i] < min) {
         min = arr[i];
         2;
      }
   } // o(n) o(1)

   console.log(max, min);
};

// console.log(findMaxMin([1, 2, 3, 400, 100]));

const returnMultipleDupesArray = function (ar) {
   let observered = {};
   let duplicates = [];

   for (let i = 0; i < ar.length; i++) {
      observered[ar[i]] = (observered[ar[i]] || 0) + 1;

      if (observered[ar[i]] > 1) {
         if (duplicates.indexOf(ar[i]) == -1) {
            duplicates.push(ar[i]);
         }
      }
   }

   console.log(duplicates);
};

////////////////////////////////////////////////////////////////////////////////

let people = [
   { name: 'first person', age: 20 },
   { name: 'second person', age: 20 },
   { name: 'thred person', age: 30 },
];

const createGroupFunction = function (arr) {
   const convertObj = {};

   for (let i = 0; i < arr.length; i++) {
      if (!convertObj[arr[i].age]) {
         convertObj[arr[i].age] = [arr[i]];
      } else {
         // if the object is not exists in convertObj then push the object into the convert obj
         convertObj[arr[i].age].push(arr[i]);
      }
   }

   return convertObj;
};

// console.log(createGroupFunction(people));

/*
    {
        '20': [{name: 'x', age: 20}, {name: "y", age: 20}],
        '30': [{name: 'z', age: 30}]
    }
*/

// 4. Find the pairs of array element for which sum is equal to given target value (Two Sum Problem) ?

// const pairsAr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// https://blog.bitsrc.io/most-important-javascript-coding-challenge-aa14c956d2df
