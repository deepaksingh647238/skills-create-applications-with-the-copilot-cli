/**
 * Node.js CLI Calculator
 * 
 * Supported Operations:
 * - addition (+)         : Add two or more numbers
 * - subtraction (-)      : Subtract numbers from an initial value
 * - multiplication (*)   : Multiply two or more numbers
 * - division (/)         : Divide numbers sequentially
 * - modulo (%)           : Return remainder of division
 * - power/exponent (^)   : Raise base to the power of exponent
 * - squareRoot (√)       : Return square root of a number
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
  },
  modulo: (numbers) => {
    if (numbers.length < 2) {
      throw new Error('Modulo requires at least two numbers');
    }
    if (numbers[1] === 0) {
      throw new Error('Modulo by zero is not allowed');
    }
    return numbers[0] % numbers[1];
  },
  power: (numbers) => {
    if (numbers.length < 2) {
      throw new Error('Power requires a base and an exponent');
    }
    return Math.pow(numbers[0], numbers[1]);
  },
  squareRoot: (numbers) => {
    if (numbers.length !== 1) {
      throw new Error('Square root requires exactly one number');
    }
    if (numbers[0] < 0) {
      throw new Error('Square root of negative numbers is not allowed');
    }
    return Math.sqrt(numbers[0]);
  }
};

// Export functions for testing
module.exports = calculator;
