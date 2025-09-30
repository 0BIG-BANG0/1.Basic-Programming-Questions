const isPrimeOpt = (num) => {
  if (num <= 1) return false; // 0, 1, negatives are not prime
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const firstPrimeWithDigit = (digit) => {
  const start = Math.pow(10, digit - 1); //ex=> digit = 2 =>>> 10^2-1  = 10 so we get 2 digit number
  let num = start;

  while (true) {
    if (isPrimeOpt(num)) return num;
    num++;
  }
};

const ans = firstPrimeWithDigit(5);
console.log(ans);
