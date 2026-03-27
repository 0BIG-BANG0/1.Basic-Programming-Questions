const isPrimeOpt = (num) => {
  if (num <= 1) return false; // 0, 1, negatives are not prime
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const nthPrimeWithDigit = (digit, count) => {
  const start = Math.pow(10, digit - 1); //ex=> digit = 2 =>>> 10^2-1  = 10 so we get 2 digit number
  let num = start;
  let n = 0;
  while (true) {
    if (isPrimeOpt(num)) {
      n++;
      if (n === count) {
        return num;
      }
    }

    num++;
  }
};

const ans = nthPrimeWithDigit(1, 5);
console.log(ans);
