/**
 * Return the total sum of all even fibonacci numbers up to and including
 * the value given to you at `maxFibValue`
 *
 * @param  {Number} maxFibValue
 * @return {Number} sum
 */
function _sumFibs(maxFibValue) {
  var sum = 0;
  var a = 1, b = 0, temp;

  while (b <= maxFibValue) {
    temp = a;
    a = a + b;
    b = temp;
    if (b % 2 === 0 && b <= maxFibValue) {
      sum += b;
    }
  }
  return sum;
}

// bonus round
function _highestFibonacciNumber(maxFibValue) {
  var highest = 0;
  var a = 1, b = 0, temp;

  while (b <= maxFibValue) {
    temp = a;
    a = a + b;
    b = temp;
    if (b <= maxFibValue) {
      highest = b;
    }
  }
  return highest;
};

/**
 * Do not modify code below.
 * You must be at least level 10 to understand.
 */
module.exports = {
  sumFibs: _sumFibs,
  highestFibonacciNumber: _highestFibonacciNumber
};