// const isPrime = (num)=>{
//     if(num<1)return false //0, 1, negatives are not priem
//     for(let i=2;i<num;i++){
//         if(num%i===0){
//             return false
//         }
//     }
//     return true
// }

// const ans = isPrime(12)
// console.log(ans)

//Optimised O(root n)
const isPrimeOpt = (num)=>{
    for(let i=2;i<=Math.sqrt(num);i++){
        if(num%i===0){
            return false
        }
    }
    return true
}

const ans = isPrimeOpt(101)
console.log(ans)