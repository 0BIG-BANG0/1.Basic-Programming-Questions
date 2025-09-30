const isPrimeOpt = (num) => {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const lastPrimeWithDigit = (digit) => {
  const start = Math.pow(10, digit) - 1; //ex=> digit = 2 =>>> 10^2-1  = 10 so we get 2 digit number
  let num = start;

  while (true) {
    if (isPrimeOpt(num)) return num;
    num--;
  }
};

const ans = lastPrimeWithDigit(1);
console.log(ans);
