function reverseString(str){
    let n = str.length
    let ans = ""
    for(let i=0;i<n;i++){
         ans = str[i]+ans;
    }
    return ans
}
function reverseStringInbilt(str){
    return str.reverse().join('')
}
let str = "Batman"
// const result = reverseString(str)
// const result = reverseStringInbilt(str)
// console.log(result)

console.log(str.split('').reverse().join(''))
