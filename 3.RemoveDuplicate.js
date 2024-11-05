function removeDuplicate(arr) {
  let count = 0;
  let elem = 0;
  let index;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        count++;
        if (count > 1) {
          elem = arr[i];
          index = i;
        }
      }
    }
  }
  let arrResult = arr.splice(index, 1);
  return arr;
}

let arr = [1, 2, 1, 3, 4, 5, 6];
let result = removeDuplicate(arr);
console.log(result);
