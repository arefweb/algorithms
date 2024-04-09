/* Check if a given number is prime */

function checkPrime(num) {
  return num % 2 === 0 ? false : true;
}

console.log(checkPrime(4));

module.exports = checkPrime;
