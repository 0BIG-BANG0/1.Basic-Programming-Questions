function consecutiveOne(arr) {
  let maxCount = 0;  // Maximum consecutive 1s
  let count = 0;     // Current streak of consecutive 1s

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      // If we encounter a 1, increase the current streak count
      count++;
      maxCount = Math.max(maxCount, count);
    } else {
      // If it's not a 1, reset the current streak count
      count = 0;
    }
  }

  return maxCount;
}

let arr = [1, 1, 2, 3, 1, 1, 1, 1, 4, 5];
const result = concecutiveOne(arr);
console.log(result)
