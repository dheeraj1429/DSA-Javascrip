// Big o notation is a way to formalize fuzzy counting.

function addUpTo(num) {
  let total = 0;
  for (let i = 0; i <= num; i++) {
    total += i;
  }
  return total;
}

// console.log(addUpTo(100));

function addUpTo1(num) {
  return (num * (num + 1)) / 2;
}

// const t1 = performance.now();
// console.log(addUpTo(100000000));
// const t2 = performance.now();
// console.log(`Time elapsed: ${t2 - t1} seconds`);

// https://www.geeksforgeeks.org/big-o-notation-interview-questions-answers/#1-what-exactly-is-big-o-notation-why-does-it-hold-significance-in-computer-science

function printFirstItem(items) {
  console.log(items[0]);
}

// This function runs in O(1) time (or "constant time") relative to its input.
// The input array could be 1 item or 1,000 items, but this function would still
// just require one "step."

function printAllItems(items) {
  items.forEach((item) => {
    console.log(item);
  });
}

//This function runs in n is the number of items in the array.
// If the array has 10 items, we have to print 10 times. If it has 1,000 items,
// we have to print 1,000 times.

function printAllPossibleOrderedPairs(items) {
  items.forEach((firstItem) => {
    items.forEach((secondItem) => {
      console.log(firstItem, secondItem);
    });
  });
}

// Here we're nesting two loops. If the array has 10 items,
// we have to print 100 times. If it has 1,000 items, we have to print 1,000,000 times.

function sayHiNTimes(n) {
  for (let i = 0; i < n; i++) {
    console.log("hi");
  }
}

function printAllItems(items) {
  items.forEach((item) => {
    console.log(item);
  });
}

// Both of these functions have O(n) runtime,
// even though one takes an integer as its input and the other takes an array:
// So sometimes n is an actual number that's an input to our function,
// and other times n is the number of items in an input array
// (or an input map, or an input object, etc.).

function printAllItemsTwice(items) {
  items.forEach((item) => {
    console.log(item);
  });

  // Once more, with feeling
  items.forEach((item) => {
    console.log(item);
  });
}

// This is (2) O(2n), which we just call O(n).

// ----------------------------------------------------------------
// Algorithms - A process or set of steps to accomplish a certain task.

function same(ar1, ar2) {
  if (ar1.length !== ar2.length) return false;

  for (let i = 0; i < ar1.length; i++) {
    const currentIndex = ar2.indexOf(ar1[i] ** 2);
    if (currentIndex === -1) {
      return false;
    }
    ar2.splice(currentIndex, 1);
  }

  return true;
}

// console.log(same([1, 2, 3], [1, 4, 9])); O(n^2)

function same(ar1, ar2) {
  if (ar1.length !== ar2.length) return false;
  const frequencyCounter1 = {};
  const frequencyCounter2 = {};

  for (let item of ar1) {
    frequencyCounter1[item] = (frequencyCounter1[item] || 0) + 1;
  }

  for (let item of ar2) {
    frequencyCounter2[item] = (frequencyCounter2[item] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) return false;
    if (frequencyCounter1[key] !== frequencyCounter2[key ** 2]) return false;
  }

  return true;
}

// console.log(same([1, 2, 3, 5], [1, 4, 9, 25]));

function validateAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  const map1 = {};
  const map2 = {};

  for (let i = 0; i < str1.length; i++) {
    map1[str1[i]] = (map1[str1[i]] || 0) + 1;
  }
  for (let i = 0; i < str2.length; i++) {
    map2[str2[i]] = (map2[str2[i]] || 0) + 1;
  }
  for (let key in map1) {
    if (!map2[key]) return false;
    if (map2[key] !== map1[key]) return false;
  }
  return true;
}

// console.log(validateAnagram("aaz", "zaa"));

function someZero(ar) {
  for (let i = 0; i < ar.length; i++) {
    for (let j = i + 1; j < ar.length; j++) {
      if (ar[i] + ar[j] === 0) {
        return [ar[i], ar[j]];
      }
    }
  }
}

// console.log(someZero([-3, -2, -1, 0, 1, 2, 3]));

function someZero(ar) {
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
}

// console.log(someZero([-4, -2, -1, 0, 1, 2, 3, 10]));

function countUniqueValues(ar) {
  const uniqueMap = {};
  let count = 0;
  for (let item of ar) {
    uniqueMap[item] = (uniqueMap[item] || 0) + 1;
  }
  for (let _ in uniqueMap) {
    count += 1;
  }
  return count;
}

// this function works with sorted arrays
function countUniqueValues(ar) {
  let i = 0;
  for (let j = i; j < ar.length; j++) {
    if (ar[i] !== ar[j]) {
      i++;
      ar[i] = ar[j];
    }
  }
  return ar.splice(0, i + 1);
}

// console.log(
//   countUniqueValues([1, 2, 3, 4, 5, 6, 6, 6, 6, 6, 6, 7, 8, 10, 10, 11])
// );

function maxSubarraySum(arr, num) {
  if (!arr.length) return 0;
  let max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    let temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }

    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

// console.log(maxSubarraySum([2, 5, 3, 2, 8, 9, 1, 2, 10, 12, 1, 5], 3));

function maxSubarraySum(arr, num) {
  if (arr.length < num) return null;
  let maxSum = 0;
  let tempSum = 0;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

console.log(maxSubarraySum([2, 5, 3, 2, 8, 9, 1, 2, 10, 12, 1, 5], 3));
