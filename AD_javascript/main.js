// Big O notation.

function logItems(items) {
   for (let i = 0; i < items; i++) {
      console.log(i);
   }
   for (let j = 0; j < items; j++) {
      console.log(j);
   } // O(n)
   // our code run n + n time = 2n => O(2n) => drop constance O(n)
}

// logItems(10);

function logItems2(items) {
   for (let i = 0; i < items; i++) {
      for (let j = 0; j < items; j++) {
         console.log(i, j);
      } // O(n^2)
      // the numbers of items this time is n * n => n^2 => O(n^2)
   }
}

// logItems2(2);

// Diffrent Terms of inputs
function termsInputs(a, b) {
   console.log('I input');
   for (let i = 0; i < a; i++) {
      console.log(i);
   } // O(n)

   console.log('II input');
   for (let i = 0; i < b; i++) {
      console.log(i);
   } // O(n)
   // the numbers of opration is n + n => 2n => O(2n) but there is some diffrent
   // inputes like a !== n or b !== n. so we can't say like a === b the a
   // a value is ot the same like b value. so we can say a + b => O(a + b)
}

// termsInputs(2, 10);

// Drop Non-Dominants
function dropItems(n) {
   for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
         console.log(i, j);
      }
   } // O(n^2)

   for (let j = 0; j < n; j++) {
      console.log(j);
   } // O(n)
   // O(n^2 + n) => O(n^2)
}

// dropItems(2);

// O(1)
function addFn(n) {
   return n + n; // O( n + n ) => O(1)
}

function findMaxMin(arr) {
   /*
   let max;
   let min;

   for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
         if (arr[i] < arr[j]) {
            max = arr[j];
         }
      }
   } // O(n^2)
   */

   let max = arr[arr.length - 1];
   let min = arr[0];

   for (let i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
         max = arr[i];
      } else if (arr[i] < min) {
         min = arr[i];
      }
   } // O(n)

   return { max, min };
}

// console.log(findMaxMin([1, 2, 3, 300, 100, 500]));
// console.log(findMaxMin([300, 10, 1, 100, 200]));

function chekcSumFunction(ar) {
   let left = 0;
   let right = ar.length - 1;

   let sortAr = ar.sort((a, b) => a - b);

   while (left < right) {
      let sum = sortAr[left] + sortAr[right];

      if (sum === 0) {
         return [sortAr[left], sortAr[right]];
      } else if (sum > 0) {
         right--;
      } else {
         left++;
      }
   }
}

// const ar = [-5, -4, -3, -2, -1, 0, 2, 4, 4, 4];
const ar = [-2, -1, 0, 2, 3, 1];
// console.log(chekcSumFunction(ar));

function getNumberIndexFromAr(arr, num) {
   let start = 0;
   let end = arr.length - 1;

   let midIndex = Math.floor((end - start) / 2);

   while (end > start) {
      console.log('inside the loop', end, start);

      if (arr[midIndex] === num) {
         console.log('index found.');
         return midIndex;
      } else if (arr[midIndex] > num) {
         end = midIndex;
         midIndex = Math.floor((end + start) / 2) - 1;
      } else if (arr[midIndex] < num) {
         start = midIndex;
         midIndex = Math.floor((end + start) / 2);
      } else return { message: 'not found' };
   }
}

// console.log(getNumberIndexFromAr([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7));

// link list
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
      this.tail = this.head;
      this.length = 1;
   }

   push(value) {
      const newNode = new Node(value);
      if (!this.head) {
         this.head = newNode;
         this.tail = newNode;
      } else {
         this.tail.next = newNode;
         this.tail = newNode;
      }
      this.length++;
      return this;
   }

   pop() {
      if (!this.head) return undefined;

      // these are pointing to the link list head.
      let temp = this.head;
      let pre = this.head;

      // once we get the last item from the link list stop the loop.
      while (temp.next) {
         pre = temp;
         temp = temp.next;
      }

      // set the items.
      this.tail = pre;
      this.tail.next = null;
      this.length--;

      if (this.length === 0) {
         this.head = null;
         this.tail = null;
      }
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
      if (!this.head) {
         this.head = null;
         this.tail = null;
         this.length = 0;
      } else {
         let temp = this.head;
         this.head = temp.next;
         temp.next = null;
         this.length--;

         if (this.length === 0) {
            this.tail = null;
         }

         return temp;
      }

      return this;
   }

   get(index) {
      if (index < 0 || index >= this.length) {
         return undefined;
      }
      let temp = this.head;
      for (let i = 0; i < index; i++) {
         temp = temp.next;
      }
      return temp;
   }

   set(index, value) {
      if (index < 0 || index >= this.length) {
         return undefined;
      }

      let temp = this.get(index);
      temp.value = value;
      return temp;
   }

   insert(index, value) {
      if (index === 0) return this.unshift(value);
      if (index === this.length) this.push(value);
      if (index < 0 || index > this.length) return undefined;

      const newNode = new Node(value);
      let temp = this.get(index - 1);
      newNode.next = temp.next;
      temp.next = newNode;
      this.length++;
      return newNode;
   }

   remove(index) {
      if (index < 0 || index >= this.length) {
         return undefined;
      }
      let pre = this.get(index - 1);
      let temp = pre.next;
      pre.next = temp.next;
      temp = null;
      this.length--;
      return true;
   }

   reverse() {
      let temp = this.head;
      this.head = this.tail;
      this.tail = temp;
      let pre = null;
      let next = temp.next;

      for (let i = 0; i < this.length; i++) {
         next = temp.next;
         temp.next = pre;
         pre = temp;
         temp = next;
      }
      return this;
   }
}

let myNewLinkList = new LinkList(4);
myNewLinkList.push(2);
// myNewLinkList.push(5);
// myNewLinkList.pop();
// myNewLinkList.unshift(1);
// myNewLinkList.shift();
// myNewLinkList.get(1);
// myNewLinkList.set(0, 5);
console.log(myNewLinkList);
