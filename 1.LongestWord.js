
// let str = " ";

// if (str.length == 0) {
//   console.log(0);
// }
// if (str.length == 1) {
//   if (str[0] == " ") console.log(0);
// } else {
//   console.log(1);
// }

function longestWord(str) {
  let max = 0;
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] == " ") {
      count = 0;
    } else {
      count++;
    //   if (count > max) {
    //     max = count;
    //   }
    max = Math.max(max,count)//takes the max value
    }
  }
  return max;
}
function longestWordInbuilt(str){
    if(str.trim().length===0){
        return 0
    }
    return Math.max(...str.split('').map(word=> word.length))
}
let str = "A bat car in the forest below the mansion";
// console.log(str.split(' '))
let ans = longestWord(str);
let ans1 = longestWordInbuilt(str);
console.log(ans)

//Boundary Cases
console.log(longestWord(""));  // Output: 0
console.log(longestWord("A"));  // Output: 1
console.log(longestWord("   "));  // Output: 0
console.log(longestWord("A   bat"));  // Output: 3
console.log(longestWord("Abcthing"));  // Output: 8
console.log(longestWord("   hello world   "));  // Output: 5
console.log(longestWord("hello, world!"));  // Output: 6 (depending on punctuation handling)
console.log(longestWord("hello"));  // Output: 5
console.log(longestWord("Hello World"));  // Output: 5
console.log(longestWord("supercalifragilisticexpialidocious"));  // Output: 34

