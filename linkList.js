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

let arrCalc = [1, 3, 5, 7];

const calcFunction = function (ar) {};

console.log(calcFunction(arrCalc));
