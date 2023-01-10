class Node {
   constructor(value) {
      this.value = value;
      this.next = null;
   }
}

class LinkList {
   constructor(value) {
      const newNode = new Node(value);

      this.head = newNode;
      this.tail = newNode;
      this.length = 1;
   }

   push(value) {
      const newNode = new Node(value);

      if (!this.head) {
         this.head = newNode;
         this.tail = newNode;
      } else {
         this.head.next = newNode;
         this.tail = newNode;
      }

      this.length++;
      return this;
   }

   pop() {
      let temp, pre;

      temp = this.head;
      pre = this.head;

      while (temp.next) {
         pre = temp;
         temp = temp.next;
      }

      this.tail = pre;
      this.tail.next = null;

      this.length--;
      return temp;
   }

   unshift(value) {
      const newNode = new Node(value);

      if (!this.head) {
         this.head = newNode;
         this.tail = newNode;
      } else {
         newNode.next = this.head;
         this.head = newNode;
      }

      this.length++;
      return this;
   }

   shift() {
      if (!this.head) return undefined;
      let temp = this.head;
      this.head = this.head.next;
      temp.next = null;
      this.length--;
      return temp;
   }

   get(index) {
      let temp = this.head;

      for (let i = 0; i < index; i++) {
         temp = temp.next;
      }

      temp.next = null;
      return temp;
   }

   set(index, value) {
      let temp = this.get(index);

      if (temp) {
         temp.value = value;
      }
   }

   insert(index, value) {
      if (index === 0) return this.unshift(value);
      if (index === this.length) return this.push(value);
      if (index < 0 || index > this.length) return undefined;
   }
}

const myLinkList = new LinkList(7);
myLinkList.push(9);
myLinkList.unshift(10);
myLinkList.set(0, 11);

// https://shinjukudev.medium.com/algorithm-interview-questions-and-answers-js-c44f0872b9b2

// Find the missing number in a given integer array of 1 to 100
let arr = [4, 3, 1];

const findMissing = function (arr) {
   arr.sort();
   for (let i = 0; i < arr.length; i++) {
      if (arr[i] + 1 !== arr[i + 1]) {
         return arr[i] + 1;
      }
   }
};

// console.log(findMissing(arr));

// 2. Find a duplicate number in an array of integers
const arrDup = [1, 2, 3, 4, 5, 6, 7, 8, 8, 6, 6, 10];

const removeDuplicatesOnce = function (arr) {
   const duplicatesMap = {};

   for (let i = 0; i < arr.length; i++) {
      if (duplicatesMap[arr[i]]) {
         return arr[i];
      } else {
         duplicatesMap[arr[i]] = arr[i];
      }
   }
};

const removeDuplicatesMultipal = function (ar) {
   const unique = [];
   const duplicates = [];

   for (let i = 0; i < ar.length; i++) {
      if (!unique.includes(ar[i])) {
         unique.push(ar[i]);
      } else {
         duplicates.push(ar[i]);
      }
   }

   return {
      unique,
      duplicates,
   };
};

// console.log(removeDuplicatesMultipal(arrDup));

// console.log(removeDuplicatesOnce(arrDup));

// 3. Find the largest and smallest number in an unsorted array of integers

const lg = [1, 2, 3, 4, 100];

const minMaxNumber = function (ar) {
   let min = ar[0];
   let max = ar[0];

   for (let i = 0; i < ar.length; i++) {
      if (ar[i] > ar[min]) {
         max = ar[i];
      } else if (ar[i] < min) {
         min = ar[i];
      }
   }

   return {
      min,
      max,
   };
};

// console.log(minMaxNumber(lg));

// 4. Return an array showing the cumulative sum at each index of an array of integers

let arrCalc = [1, 3, 5, 7]; // [ 1, 4, 9, 16 ]

const calcFunction = function (ar) {
   let result = [ar[0]]; // [1]

   for (let i = 1; i < ar.length; i++) {
      result.push(ar[i] + result[i - 1]);
   }

   return result;
};

// console.log(calcFunction(arrCalc));

// 5. Find all duplicate numbers in an array with multiple duplicates

const findDuplications = function () {
   const arr = [1, 1, 1, 1, 1, 1, 1, 1, 1];
   let unique = [];

   for (let i = 0; i < arr.length; i++) {
      if (!unique.includes(arr[i])) {
         unique.push(arr[i]);
      }
   }

   return {
      unique,
   };
};

// console.log(findDuplications());

// big 0

// 6. Remove all duplicates from an array of integers

const removeAllDuplications = function () {
   const arr = [1, 1, 1, 1, 1, 1, 1];
   const uni = [];
   // lter((el, i) => {
   //    return arr.indexOf(el) === i;
   // });

   // return uni;
   for (let i = 0; i < arr.length; i++) {
      if (uni.indexOf(arr[i]) === -1) {
         uni.push(arr[i]);
      }
   }

   // let uni = arr.filter((el, i) => {
   //    return arr.indexOf(el) === i;
   // });

   return uni;
};

// console.log(removeAllDuplications());

// 4) Remove duplicates from an array of objects by one property

const removeDuplicateObjects = function () {
   const members = [
      { id: 1, name: "John" },
      { id: 2, name: "Jane" },
      { id: 1, name: "Johnny" },
      { id: 4, name: "Alice" },
   ];

   const temp = [];
   const uniObject = [];

   for (let i = 0; i < members.length; i++) {
      if (!temp.includes(members[i].id)) {
         temp.push(members[i].id);
         uniObject.push(members[i]);
      }
   }

   let uniResult = [...new Map(members.map((el) => [el["id"], el])).values()];

   return {
      uniObject,
      uniResult,
   };
};

// console.log(removeDuplicateObjects());

const checkPerformance = function () {
   const nemo = ["nemo"];
   const findArr = new Array(1000).fill("nemo");
   let t1 = performance.now();
   for (let i = 0; i < findArr.length; i++) {
      if (findArr[i] === "nemo") {
         console.log("we found nemo");
         break;
      }
   }
   let t2 = performance.now();
   console.log(t2 - t1);
};

// checkPerformance();

const tFn = function () {
   const ar1 = ["a", "b", "c", "d"];
   const ar2 = ["a", "x", "y"];

   // for (let i = 0; i < ar1.length; i++) {
   //    for (let j = 0; j < ar2.length; j++) {
   //       if (ar1[i] === ar2[j]) {
   //          return true;
   //       }
   //    }
   // } // O(n^2) time complexity

   const map = {}; // O(1) space complexity

   for (let i = 0; i < ar1.length; i++) {
      if (!map[ar1[i]]) {
         map[ar1[i]] = true;
      }
   } // O(n)

   for (let j = 0; j < ar2.length; j++) {
      if (map[ar2[j]]) {
         return true;
      }
   } // O(n)

   // return false;

   ar1.some((el) => (ar2.includes(el) ? true : false));
};

// console.log(tFn());

// 1. Remove all even integers from an array

const removeElemFromArray = function () {
   const arr = [4, 1, 9, 10, 15, 22, 5, 14]; // => [4, 10, 22, 14]

   const odd = [];

   for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 !== 0) {
         odd.push(arr[i]);
      }
   }

   return odd;
};

// console.log(removeElemFromArray());
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

var romanToInt = function (s) {
   const symbolObj = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
   };
   let sum = 0;

   let ar = s.split("");
   ar.forEach((el) => {
      if (symbolObj[el]) {
         sum += symbolObj[el];
      }
   });

   console.log(sum);
};

// romanToInt("MCMXCIV");

// The cumulative sum of an array at index i is defined as the sum of all elements of the array from index 0 to index i.

const calcElemWithPrevElem = function () {
   let ar = [1, -2, 3, 4, -6]; // => [1, 3, 6, 10]
   const result = [ar[0]];

   for (let i = 1; i < ar.length; i++) {
      result.push(ar[i] + result[i - 1]);
   }

   console.log(result);
};

// calcElemWithPrevElem();

// For an array of integers nums, an identical twin is defined as pair (i, j) where nums[i] is equal to nums[j] and i < j.

const findTwinesAndIndex = function () {
   const array = [1, 2, 2, 3, 2, 1]; // => output [[1, 1], [2, 2], [2, 2], [2, 2]] and (0, 5), (1, 2), (1, 4), (2, 4)

   let left = 0;
   let right = array.length - 1;
   let result = [];

   while (left < right) {
      if (array[left] - array[right] === 0) {
         result.push([array[left], array[right]]);
         right--;
      } else {
         left++;
      }
   }
};

// findTwinesAndIndex();
