//Parameterised and Functional Recursion

// Parameterised Recursion:
//   In parameterised recursion, we pass the current state as parameters to the recursive function.
//   Example: calculating factorial by passing the current product and the current number.

// Functional Recursion:
//   In functional recursion, the function calls itself without passing the current state as parameters,
//   but instead uses the return value of the recursive call to build the solution.
//   Example: calculating factorial by returning n * factorial(n-1).


//parameterized 
// ex 1: sum of n numbers

function sum(n,currSum){
    if(n<1){
        console.log(currSum)
        return
    }
    sum(n-1, currSum+n)
}
// sum(3,0)

// ex 2: fac of n numbers

function fact(n,ans){
    if(n<1){
        console.log("FACT ans",ans)
        return
    }
    fact(n-1, ans*n)
}
// fact(3,1)

//Functional 
// ex 1:sum of n numbers

function sum1(n){
    if(n<1){
        return 0
    }
   return n+sum1(n-1)
}
// console.log(sum1(3))

// ex 2: fac of n numbers
function fact1(n){
    if(n<1){
        return 1
    }
    return n*fact1(n-1)
}
console.log("FACT1 ",fact1(3))