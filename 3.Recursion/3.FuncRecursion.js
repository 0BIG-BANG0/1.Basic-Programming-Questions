//Reverse an array
function reverse(arr,l,r){
    if(l>=r)return
    
    [arr[l],arr[r]] = [arr[r],arr[l]]
    reverse(arr,l+1, r-1)

}


// let arr =[1,2,3,4,5]
// reverse(arr,0,arr.length-1)
// console.log(arr)

//Optimized app

function reverseOpt(arr,i){
    if(i>=arr.length/2)return 

    [arr[i],arr[arr.length-i-1]] = [arr[arr.length-i-1],arr[i]]
    reverseOpt(arr,i+1)
}
// let arr =[1,2,3,4,5]
// reverse(arr,0,arr.length-1)
// console.log(arr)

//Check wether the arr is paindrome or not
function palindrome(arr,l,r){
    if(l>=r)return true
    
    if(arr[l] != arr[r]){
       return fasle
    }

    return palindrome(arr,l+1,r-1)

}
// let arr = [1,2,1]
// let ans = palindrome(arr,0,arr.length-1)
// console.log(ans)

function palindormeStr(str,i){
    if(i>=str.length/2)return true

    if(str[i]!=str[str.length-i-1]){
        return false
    }
    return palindormeStr(str,i+1)
}
let str = "madam"
let ans = palindormeStr(str,0)
console.log(ans)