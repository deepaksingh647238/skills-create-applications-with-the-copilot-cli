/**
 * Node.js CLI Calculator
 * 
 * Supported Operations:
 * - addition (+)      : Add two or more numbers
 * - subtraction (-)   : Subtract numbers from an initial value
 * - multiplication (*): Multiply two or more numbers
 * - division (/)      : Divide numbers sequentially
 */

// Calculator functions for each operation
const calculator = {
  add: (numbers) => numbers.reduce((acc, num) => acc + num, 0),
  subtract: (numbers) => numbers.reduce((acc, num) => acc - num),
  multiply: (numbers) => numbers.reduce((acc, num) => acc * num, 1),
  divide: (numbers) => {
    if (numbers.some(num => num === 0 && numbers.indexOf(num) > 0)) {
      throw new Error('Division by zero is not allowed');
    }
    return numbers.reduce((acc, num) => acc / num);
  }
};

// Export functions for testing
module.exports = calculator;
