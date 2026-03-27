function checkPalindrome(str) {
  let ans = "";
  for (let i = 0; i < str.length; i++) {
    ans = str[i] + ans;
  }
  if (ans == str) {
    return true;
  } else {
    return false;
  }
}
function checkPalindrome2PointerApproach(str) {
  let i = 0;
  let j = str.length - 1;
  while (i <= j) {
    if (str[i] !== str[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
}
function checkPalindromeInbuiltMethod(str) {
  return str === str.split("").reverse().join("");
}
let str = "abdus";
// let result = checkPalindrome(str);
let result = checkPalindrome2PointerApproach(str);
console.log(result);

console.log(str.split("").reverse().join(''))