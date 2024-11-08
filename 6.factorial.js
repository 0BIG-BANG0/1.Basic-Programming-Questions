function factorial(num) {
  let mul = 1;
  for (let i = num; i >= 1; i--) {
    mul = mul * i;
    // console.log(mul)
  }
  return mul;
}
function factorialRecurcive(num){
    if(num==0 || num==1){
        return 1;
    }
    return factorialRecurcive(num-1)*num;
}
let num =4;
// const result = factorial(num);
const result = factorialRecurcive(num);
console.log(result);
