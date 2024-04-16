function reverse(x) {
  let num = String(x);
  let result = "";
  let isSigned = false;
  if (x < 0) {
    num = String(Math.abs(x));
    isSigned = true;
  }
  for (i = 0; i < num.length; i++) {
    result = num[i] + result;
  }
  if (isSigned) {
    result = "-" + result;
  }
  return Number(result);
}

console.log("-12300 should retrun -321", reverse(-12300));

module.exports = reverse;
