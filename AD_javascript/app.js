/*
const levelAr = [
   { min: 0, max: 22 },
   { min: 22, max: 70 },
   { min: 70, max: 120 },
];

let level = 70;
const findLevelBaseObject = levelAr.find((el) => el?.max >= level);
console.log(findLevelBaseObject);

const nemo = [
   'jemi',
   'jake',
   'sam',
   'amah',
   'roh',
   'ajm',
   'nemo',
   'aoo',
   'nem',
];

const findNemo = function (arr) {
   let t0 = performance.now();
   for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 'nemo') {
         console.log('found nemo');
         break;
      }
      console.log(arr[i]);
   }
   let t1 = performance.now();
   console.log(`call the nemo take ${t1 - t0} miliseconds`);
};

nemo[1] // O(1)
nemo[2] // O(1)

findNemo(nemo);

function funChallange(input) {
   let a = 10; // O(1)
   let b = 20; // O(1)

   for (let i = 0; i < input; i++) {
      someOtherFunction(); // O(n)
      let isTrue = true; // O(n)
   }
   return a; // O(1)
}

   const a = null;
   console.log(typeof a);
   console.log(typeof a === 'object'); // worng wat to check
   // check with this methods.
   console.log(a !== null && typeof a === 'object'); // right
   console.log(toString.call(a) == '[object Object]'); // right
   // console.log(a.constructor === Object); // throw error

   (function (global) {
      global.a = 2;
   })(global);

   console.log(a);

   var myObject = {
   foo: 'bar',
   func: function () {
      var self = this;
      console.log('outer func:  this.foo = ' + this.foo); // this = this object
      console.log('outer func:  self.foo = ' + self.foo); // self = this object

         (function () {
            console.log('inner func:  this.foo = ' + this.foo); // undefined
            console.log('inner func:  self.foo = ' + self.foo); // self global context value.
         })();
      },
   };

myObject.func();

   function areThereAlmostEuql(num1, num2) {
      return Math.abs(num1 - num2) < Number.EPSILON;
   }

   console.log(areThereAlmostEuql(0.1 + 0.2, 0.3));
*/

// Given 2 arays, create a function that let's user knonw (true/false) whether the
// give arays contains any common items.
// 2 parameters
// return true or false.

// const obj = {
//    a: () => {
//       console.log(this);
//    },
//    b: function () {
//       console.log(this);
//    },
// };

// obj.a()
// obj.b()

// const a = [1, 2, 3, 4];
// output = [4,3,2,1]

// const arr = [];

// Array.prototype.last = function () {
//    return this.length ? this[this.length - 1] : -1;
// };

// console.log(arr.last());

// var createCounter = function (n) {
//    return function () {
//       return n++;
//    };
// };

// const counter = createCounter(10);
// console.log(counter());
// console.log(counter());
// console.log(counter());

/**
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */

/**
 * @param {number} millis
 */
// async function sleep(millis) {
//    return new Promise((reslove) =>
//       setTimeout(() => {
//          reslove(millis);
//       }, millis)
//    );
// }

// let t = Date.now();
// sleep(1000).then(() => {
//    console.log(Date.now() - t); // 100
// });

/**
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */

/**
 * @param {Function} fn
 */
// function memoize(fn) {
//    const cache = {};

//    return function (...args) {
//       // create key
//       const key = JSON.stringify(args);

//       // check the key is exists or not
//       if (key in cache) {
//          return cache[key];
//       }

//       // call the function
//       const result = fn.apply(this, args);
//       // set the key
//       cache[key] = result;
//       return result;
//    };
// }

// let callCount = 0;
// const memoizedFn = memoize(function (a, b) {
//    callCount += 1;
//    return a + b;
// });

// console.log(memoizedFn(2, 3)); // 5
// console.log(memoizedFn(2, 3)); // 5
// console.log(callCount); // 1

// reference type

// context
// instantaition

// let obj1 = {};
// let obj2 = obj1;
// let obj3 = {};
// console.log(obj1 === obj2);
// console.log(obj1 === obj3);

/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
// var createCounter = function (init) {
//    let a = init;
//    return {
//       increment: () => (a += 1),
//       decrement: () => (a -= 1),
//       reset: () => (a = init),
//    };
// };

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */

/**
 * @param {Object} context
 * @param {any[]} args
 * @return {any}
 */
// Function.prototype.callPolyfill = function (context, ...args) {
//    return this.call(context, ...args);
// };

// const fn = function add(b) {
//    return this.a + b;
// };

// console.log(fn.callPolyfill({ a: 5 }, 7));

/**
 * function increment() { this.count++; return this.count; }
 * increment.callPolyfill({count: 1}); // 2
 */

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
// var map = function (arr, fn) {
//    return arr.map((el, i) => fn(el, i));
// };

// const newArray = map([1, 2, 3], function plusI(n, i) {
//    return n + i;
// });

// console.log(newArray);

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
// var filter = function (arr, fn) {
//    let findValues = [];
//    for (let i = 0; i < arr.length; i++) {
//       let result = fn(arr[i], i);
//       if (result) {
//          findValues.push(arr[i]);
//       }
//    }
//    return findValues;
// };

// let arr = [1, 2, 3],
//    fn = function firstIndex(n, i) {
//       return i === 0;
//    };

// const newArray = filter(arr, fn); // [20, 30]
// console.log(newArray);

/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
// var reduce = function (nums, fn, init) {
//    let sum = init;
//    for (let i = 0; i < nums.length; i++) {
//       sum = fn(sum, nums[i]);
//    }
//    return sum;
// };

// let nums = [1, 2, 3, 4],
//    fn = function sum(accum, curr) {
//       return accum + curr;
//    };

// const result = reduce(nums, fn, 0);

// console.log(result);

/**
 * @param {Function} fn
 * @return {Function}
 */
// var once = function (fn) {
//    let times = 0;
//    return function (...args) {
//       times++;
//       if (times <= 1) return fn(...args);
//       else return undefined;
//    };
// };

// let fn = (a, b, c) => a + b + c;
// let onceFn = once(fn);

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */

// let callCount = 0;
// function memoize(fn) {
//    const cache = {};
//    return function (...args) {
//       const key = JSON.stringify(args);

//       if (key in cache) {
//          return cache[key];
//       }

//       let result = fn.apply(this, args);
//       cache[key] = result;
//       return result;
//    };
// }

// const memoizedFn = memoize(function (a, b) {
//    callCount += 1;
//    return a + b;
// });

// console.log(memoizedFn(2, 3)); // 5
// console.log(memoizedFn(2, 3)); // 5
// console.log(callCount); // 1

/**
 * @param {Function} fn
 * @return {Function}
 */
// var curry = function (fn) {
//    return function curried(...args) {
//       if (args.length >= fn.length) return fn.apply(this, args);
//       return (...newArgs) => curried(...args, ...newArgs);
//    };
// };

// function sum(a, b) {
//    return a + b;
// }
// const csum = curry(sum);
// console.log(csum(1)(2)); // 6

/**
 * function sum(a, b) { return a + b; }
 * const csum = curry(sum);
 * csum(1)(2) // 3
 */

// -------------------------------
// class MyArray {
//    constructor() {
//       this.length = 0;
//       this.data = {};
//    }
//    push(item) {
//       this.data[this.length] = item;
//       this.length++;
//       return item;
//    }
//    pop() {
//       const lastItem = this.data[this.length - 1];
//       delete this.data[this.length - 1];
//       this.length--;
//       return lastItem;
//    }
//    get(index) {
//       const findItem = this.data[index];
//       return findItem;
//    }
//    delete(index) {
//       const item = this.data[index];
//       delete this.data[index];
//       this.shiftItems(index);
//       return item;
//    }
//    shiftItems(index) {
//       for (let i = index; i < this.length - 1; i++) {
//          this.data[i] = this.data[i + 1];
//       }
//       delete this.data[this.length - 1];
//       this.length--;
//    }
// }

// const newArray = new MyArray();
// newArray.push('this');
// newArray.push('is');
// newArray.push('me');
// newArray.pop();
// newArray.pop();
// newArray.get(0);
// newArray.delete(1);
// console.log(newArray);

// const str = 'em si siht';

// function reverseStr(string) {
//    const itemsLength = string.length - 1;
//    let backWord = [];
//    for (let i = itemsLength; i >= 0; i--) {
//       backWord.push(string[i]);
//    }
//    return backWord.join('');
// }

// console.log(reverseStr(str));

// class HashTable {
//    constructor(size) {
//       this.data = new Array(size);
//    }

//    _hash(key) {
//       let hash = 0;
//       for (let i = 0; i < key.length; i++) {
//          hash = Math.floor(
//             hash + ((key.charCodeAt(i) * i) % this.data.length) / 20
//          );
//       }
//       return hash;
//    }

//    set(key, number) {
//       let address = this._hash(key);
//       if (!this.data[address]) {
//          this.data[address] = [];
//       }
//       this.data[address].push([key, number]);
//       return this.data;
//    }

//    get(key) {
//       let address = this._hash(key);
//       const bucket = this.data[address];
//       if (bucket.length) {
//          for (let i = 0; i < bucket.length; i++) {
//             if (bucket[i][0] === key) {
//                return bucket[i];
//             }
//             return undefined;
//          }
//       }
//       return undefined;
//    }
// }

// const myHashTable = new HashTable(2);
// myHashTable.set('graph', 1000);
// myHashTable.set('mango', 100);
// const element = myHashTable.get('graph');
// console.log(element);

// Given an array = [2,1,1,3,4,5,6]
// ite shoud return 1

// const findReapertFunction = function (arr) {
//    const map = {};

//    for (let i = 0; i < arr.length; i++) {
//       if (!map[arr[i]]) {
//          map[arr[i]] = 1;
//       } else {
//          return arr[i];
//       }
//    }

//    return undefined;
// };

// const result = findReapertFunction([2, 1, 3, 3, 4, 5, 6]);
// console.log(result);

// let callCount = 0;
// let cache = {};
// const memo = function (fn) {
//    return function (...args) {
//       const key = JSON.stringify(args);

//       if (key in cache) {
//          return cache[key];
//       }

//       const result = fn.apply(this, args);
//       cache[key] = result;
//       return result;
//    };
// };

// const loopFunction = function (arr) {
//    callCount++;
//    return arr.reduce((acc, crv) => acc + crv);
// };

// const memoLoopFunction = memo(loopFunction);
// memoLoopFunction([1, 2, 3, 4]);
// memoLoopFunction([1, 2, 3, 4]);
// memoLoopFunction([1, 2, 3, 1]);
// console.log(callCount);

// ---------- pending..
// const array = [
//    [1, 2, 3, 4],
//    [5, 6, 7, 8],
//    [9, 10, 11, 12],
//    [13, 14, 15, 16],
// ];

// const makeSqureArray = function () {
//    /**
//     * first create new array with first arrays of elements. then created second array with last elements with all arrays.
//     */

// };

// makeSqureArray();

/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
// var timeLimit = function (fn, t) {
//    return async function (...args) {
//       const originalPromise = fn(...args);
//       const promise = new Promise((_, reject) => {
//          setTimeout(() => {
//             reject('Time Limit Exceeded');
//          }, t);
//       });
//       return Promise.race([originalPromise, promise]);
//    };
// };

// const limited = timeLimit((t) => new Promise((res) => setTimeout(res, t)), 100);
// limited(130).catch(console.log); // "Time Limit Exceeded" at t=100ms

// match combination function ---------------.

// class GenrateNumbers {
//    #numbers = [];
//    #mapNumber = 0;
//    constructor(count, start, end, combination) {
//       this.count = count;
//       this.start = start;
//       this.end = end;
//       this.combination = combination;
//    }

//    _generateUniqueRandomNumbers() {
//       if (this.count > this.max - this.min + 1) {
//          throw new Error('Cannot generate unique random numbers. The range is smaller than the count.');
//       }

//       const numbers = [];

//       while (numbers.length < this.count) {
//          const randomNumber = Math.floor(Math.random() * (this.end - this.start + 1)) + this.start;

//          if (!numbers.includes(randomNumber)) {
//             numbers.push(randomNumber);
//          }
//       }

//       console.log(numbers);
//    }

//    _genrateNumberWithMatchOne() {
//       const combination = this.combination;
//       const { luckyNumbers } = combination;

//       const randomNumber = Math.floor(Math.random() * luckyNumbers.length);
//       const getNumber = luckyNumbers[randomNumber];
//       this.#numbers.push(getNumber);

//       while (this.#numbers.length < this.count) {
//          const randomNumber = Math.floor(Math.random() * (this.end - this.start + 1)) + this.start;

//          if (!this.#numbers.includes(randomNumber) && !luckyNumbers.includes(randomNumber)) {
//             this.#numbers.push(randomNumber);
//          }
//       }

//       console.log(this.#numbers, getNumber, luckyNumbers);
//    }

//    genrateUniqueNumbers(mapNumber, userId) {
//       this.mapNumber = mapNumber;
//       // this._generateUniqueRandomNumbers();
//       this._genrateNumberWithMatchOne();
//       // console.log(this.#numbers);

//       // const newLotteryData = new Array(mapNumber).fill({}).map(() => {
//       //    const uniqueAr = generateUniqueRandomNumbers();
//       //    return {
//       //       userId,
//       //       numberOfTickets: 1,
//       //       lotteryPollNumbers: {
//       //          luckyNumbers: uniqueAr,
//       //          jackpotBallNumber: Math.floor(Math.random() * 10 + 1),
//       //       },
//       //    };
//       // });
//    }
// }

// const newLuckyNumbers = new GenrateNumbers(5, 1, 36, numberCombinations[0]);
// newLuckyNumbers.genrateUniqueNumbers(2, 'dase21231d');

// match combination function ---------------.

/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */

// const debounce = function (func, expireTime = 1000) {
//    let ref;
//    return function (...args) {
//       clearInterval(ref);
//       ref = setTimeout(() => func.apply(this, args), expireTime);
//    };
// };

// const process = debounce(() => {
//    console.log('done');
// });

// process();

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */

/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
// var throttle = function (fn, t) {
//    let ref;
//    let callCount = 0;

//    return function (...args) {
//       callCount++;
//       clearInterval(ref);

//       if (callCount === 1) {
//          fn.apply(this, args);
//       } else {
//          ref = setTimeout(() => {
//             fn.apply(this, args);
//          }, t);
//       }
//    };
// };

// const throttled = throttle(console.log, 1000);
// throttled('log');
// throttled('log');

/**
 * const throttled = throttle(console.log, 100);
 * throttled("log"); // logged immediately.
 * throttled("log"); // logged at t=100ms.
 */

// function replacer(_, value) {
//    if (value && typeof value === 'object' && !Array.isArray(value)) return Object.fromEntries(Object.entries(value).sort());
//    else return value;
// }

// var areDeeplyEqual = function (o1, o2) {
//    const strO1 = JSON.stringify(o1, replacer);
//    const strO2 = JSON.stringify(o2, replacer);
//    return strO1 === strO2;
// };

// const o1 = { y: 2, x: 1 };
// const o2 = { x: 1, y: 2 };

// console.log(areDeeplyEqual(o1, o2));
