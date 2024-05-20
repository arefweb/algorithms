function isPalindrome(x) {
  const originalNum = String(x);
  const reversedNum = Array.from(originalNum).reverse().join('');
  if (originalNum === reversedNum) {
    return true;
  }
  return false;
}

console.log(isPalindrome(56265));

module.exports = isPalindrome;
