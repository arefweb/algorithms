function divide(dividend, divisor) {
  let n = 0;
  let t = 0;
  let minus = false;
  if (dividend < 0 && divisor < 0) {
    dividend = dividend * -1;
    divisor = divisor * -1;
  }
  if (dividend < 0) {
    dividend = dividend * -1;
    minus = true;
  }
  if (divisor < 0) {
    divisor = divisor * -1;
    minus = true;
  }
  while (n <= dividend) {
    n = n + divisor;
    t = t + 1;
  }
  if (minus) {
    return (t - 1) * -1;
  }
  return t - 1;
}

// completed in 0.5 hours 

console.log('result: ', divide(700, 3));

module.exports = divide;
