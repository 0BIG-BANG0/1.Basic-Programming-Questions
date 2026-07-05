//Multiple Recursion calls
//Fibonacci

function fibo(n){
    if(n<=1)return n

    let last = fibo(n-1)
    let secLast = fibo(n-2)

    return last + secLast
}
let ans = fibo(4)
console.log(ans)