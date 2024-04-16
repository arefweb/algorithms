function reverse(x) {
  const num = String(x);
  let numsArr = [];
  for (i = 0; i < num.length; i++) {
    if(numsArr.length === 0 && num[i] === 0) continue;
    numsArr.unshift(num[i]);
  }
  return numsArr.join("");
}

console.log("-123 should retrun -321", reverse(-123));

module.exports = reverse;
