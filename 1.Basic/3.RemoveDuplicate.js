function removeDuplicate(arr) {
    let elem = 0;
    let index;
    for (let i = 0; i < arr.length; i++) {
      let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++;
        if (count > 1) {
          elem = arr[j];
          index = j;
        }
      }
    }
  }
  let arrResult = arr.splice(index, 1);
  return arr;
}
function removeDuplicateInbuilt(arr){
    return arr.filter((item,index)=> arr.indexOf(item) === index)
}

let arr = [1, 2, 1, 3, 4, 5, 6];
// let result = removeDuplicate(arr);
let result = removeDuplicateInbuilt(arr);
console.log(result);
