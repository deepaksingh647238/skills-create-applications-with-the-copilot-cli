const calculator = require('../calculator');

describe('Calculator Functions', () => {
  
  describe('Addition', () => {
    test('should add two numbers', () => {
      expect(calculator.add([2, 3])).toBe(5);
    });

    test('should add three numbers', () => {
      expect(calculator.add([5, 10, 3])).toBe(18);
    });

    test('should add multiple numbers', () => {
      expect(calculator.add([1, 2, 3, 4, 5])).toBe(15);
    });

    test('should add negative numbers', () => {
      expect(calculator.add([10, -5])).toBe(5);
    });

    test('should add decimal numbers', () => {
      expect(calculator.add([2.5, 3.5])).toBe(6);
    });

    test('should return 0 for empty array', () => {
      expect(calculator.add([])).toBe(0);
    });

    test('should add zero', () => {
      expect(calculator.add([0, 0])).toBe(0);
    });
  });

  describe('Subtraction', () => {
    test('should subtract two numbers', () => {
      expect(calculator.subtract([10, 4])).toBe(6);
    });

    test('should subtract multiple numbers', () => {
      expect(calculator.subtract([100, 25, 10])).toBe(65);
    });

    test('should handle negative results', () => {
      expect(calculator.subtract([5, 10])).toBe(-5);
    });

    test('should subtract negative numbers', () => {
      expect(calculator.subtract([10, -5])).toBe(15);
    });

    test('should subtract decimal numbers', () => {
      expect(calculator.subtract([10.5, 2.5])).toBe(8);
    });

    test('should subtract from zero', () => {
      expect(calculator.subtract([0, 5])).toBe(-5);
    });
  });

  describe('Multiplication', () => {
    test('should multiply two numbers', () => {
      expect(calculator.multiply([45, 2])).toBe(90);
    });

    test('should multiply three numbers', () => {
      expect(calculator.multiply([4, 5, 2])).toBe(40);
    });

    test('should multiply multiple numbers', () => {
      expect(calculator.multiply([2, 3, 4])).toBe(24);
    });

    test('should multiply by zero', () => {
      expect(calculator.multiply([5, 0])).toBe(0);
    });

    test('should multiply negative numbers', () => {
      expect(calculator.multiply([5, -2])).toBe(-10);
    });

    test('should multiply two negative numbers', () => {
      expect(calculator.multiply([-5, -2])).toBe(10);
    });

    test('should multiply decimal numbers', () => {
      expect(calculator.multiply([2.5, 4])).toBe(10);
    });

    test('should return 1 for empty array', () => {
      expect(calculator.multiply([])).toBe(1);
    });
  });

  describe('Division', () => {
    test('should divide two numbers', () => {
      expect(calculator.divide([20, 5])).toBe(4);
    });

    test('should divide multiple numbers sequentially', () => {
      expect(calculator.divide([100, 2, 5])).toBe(10);
    });

    test('should handle decimal results', () => {
      expect(calculator.divide([10, 4])).toBe(2.5);
    });

    test('should divide negative numbers', () => {
      expect(calculator.divide([10, -2])).toBe(-5);
    });

    test('should divide two negative numbers', () => {
      expect(calculator.divide([-10, -2])).toBe(5);
    });

    test('should divide decimal numbers', () => {
      expect(calculator.divide([10.5, 2])).toBeCloseTo(5.25);
    });

    test('should throw error for division by zero', () => {
      expect(() => calculator.divide([20, 0])).toThrow('Division by zero is not allowed');
    });

    test('should throw error when dividing by zero in sequence', () => {
      expect(() => calculator.divide([100, 2, 0])).toThrow('Division by zero is not allowed');
    });

    test('should not throw error when first number is zero', () => {
      expect(calculator.divide([0, 5])).toBe(0);
    });
  });

  describe('Edge Cases and Special Scenarios', () => {
    test('should handle very large numbers in addition', () => {
      expect(calculator.add([1000000, 2000000])).toBe(3000000);
    });

    test('should handle very large numbers in multiplication', () => {
      expect(calculator.multiply([1000, 2000])).toBe(2000000);
    });

    test('should handle very small decimal numbers', () => {
      expect(calculator.add([0.0001, 0.0002])).toBeCloseTo(0.0003);
    });

    test('should handle single number addition', () => {
      expect(calculator.add([42])).toBe(42);
    });

    test('should handle single number subtraction', () => {
      expect(calculator.subtract([42])).toBe(42);
    });

    test('should handle single number multiplication', () => {
      expect(calculator.multiply([42])).toBe(42);
    });

    test('should handle single number division', () => {
      expect(calculator.divide([42])).toBe(42);
    });
  });

  describe('Image Examples (calc-basic-operations.png)', () => {
    test('should calculate 2 + 3 = 5', () => {
      expect(calculator.add([2, 3])).toBe(5);
    });

    test('should calculate 10 - 4 = 6', () => {
      expect(calculator.subtract([10, 4])).toBe(6);
    });

    test('should calculate 45 * 2 = 90', () => {
      expect(calculator.multiply([45, 2])).toBe(90);
    });

    test('should calculate 20 / 5 = 4', () => {
      expect(calculator.divide([20, 5])).toBe(4);
    });
  });

  describe('Modulo', () => {
    test('should calculate modulo of two numbers', () => {
      expect(calculator.modulo([10, 3])).toBe(1);
    });

    test('should calculate modulo with different values', () => {
      expect(calculator.modulo([20, 7])).toBe(6);
    });

    test('should handle modulo with negative numbers', () => {
      expect(calculator.modulo([-10, 3])).toBe(-1);
    });

    test('should return 0 for numbers divisible by divisor', () => {
      expect(calculator.modulo([15, 3])).toBe(0);
    });

    test('should throw error for modulo by zero', () => {
      expect(() => calculator.modulo([10, 0])).toThrow('Modulo by zero is not allowed');
    });

    test('should throw error when less than two numbers', () => {
      expect(() => calculator.modulo([5])).toThrow('Modulo requires at least two numbers');
    });
  });

  describe('Power/Exponentiation', () => {
    test('should calculate 2^8 = 256', () => {
      expect(calculator.power([2, 8])).toBe(256);
    });

    test('should calculate 5^2 = 25', () => {
      expect(calculator.power([5, 2])).toBe(25);
    });

    test('should calculate 3^3 = 27', () => {
      expect(calculator.power([3, 3])).toBe(27);
    });

    test('should handle exponent of 0', () => {
      expect(calculator.power([5, 0])).toBe(1);
    });

    test('should handle negative exponents', () => {
      expect(calculator.power([2, -2])).toBe(0.25);
    });

    test('should handle decimal bases', () => {
      expect(calculator.power([2.5, 2])).toBe(6.25);
    });

    test('should handle negative bases', () => {
      expect(calculator.power([-2, 3])).toBe(-8);
    });

    test('should throw error when less than two numbers', () => {
      expect(() => calculator.power([5])).toThrow('Power requires a base and an exponent');
    });
  });

  describe('Square Root', () => {
    test('should calculate √16 = 4', () => {
      expect(calculator.squareRoot([16])).toBe(4);
    });

    test('should calculate √25 = 5', () => {
      expect(calculator.squareRoot([25])).toBe(5);
    });

    test('should calculate √2 ≈ 1.414', () => {
      expect(calculator.squareRoot([2])).toBeCloseTo(1.414, 2);
    });

    test('should calculate √0 = 0', () => {
      expect(calculator.squareRoot([0])).toBe(0);
    });

    test('should handle decimal inputs', () => {
      expect(calculator.squareRoot([6.25])).toBe(2.5);
    });

    test('should throw error for negative numbers', () => {
      expect(() => calculator.squareRoot([-4])).toThrow('Square root of negative numbers is not allowed');
    });

    test('should throw error when not exactly one number', () => {
      expect(() => calculator.squareRoot([16, 25])).toThrow('Square root requires exactly one number');
    });

    test('should throw error when no numbers provided', () => {
      expect(() => calculator.squareRoot([])).toThrow('Square root requires exactly one number');
    });
  });

  describe('Extended Operations Examples (calc-extended-operations.png)', () => {
    test('should calculate modulo with 5 % 2 = 1', () => {
      expect(calculator.modulo([5, 2])).toBe(1);
    });

    test('should calculate power with 2 ^ 3 = 8', () => {
      expect(calculator.power([2, 3])).toBe(8);
    });

    test('should calculate square root with √16 = 4', () => {
      expect(calculator.squareRoot([16])).toBe(4);
    });
  });

  describe('Extended Operations - Comprehensive Edge Cases', () => {
    describe('Modulo edge cases', () => {
      test('should handle large numbers modulo', () => {
        expect(calculator.modulo([1000, 7])).toBe(6);
      });

      test('should handle decimal modulo', () => {
        expect(calculator.modulo([10.5, 3])).toBeCloseTo(1.5);
      });

      test('should handle modulo with 1 as divisor', () => {
        expect(calculator.modulo([100, 1])).toBe(0);
      });

      test('should handle negative dividend modulo', () => {
        expect(calculator.modulo([-20, 6])).toBe(-2);
      });

      test('should handle both negative numbers modulo', () => {
        expect(calculator.modulo([-10, -3])).toBe(-1);
      });
    });

    describe('Power edge cases', () => {
      test('should calculate 10^0 = 1', () => {
        expect(calculator.power([10, 0])).toBe(1);
      });

      test('should calculate 0^5 = 0', () => {
        expect(calculator.power([0, 5])).toBe(0);
      });

      test('should calculate 1^100 = 1', () => {
        expect(calculator.power([1, 100])).toBe(1);
      });

      test('should calculate 2^10 = 1024', () => {
        expect(calculator.power([2, 10])).toBe(1024);
      });

      test('should calculate fractional power: 4^0.5 = 2', () => {
        expect(calculator.power([4, 0.5])).toBe(2);
      });

      test('should calculate negative base with even exponent', () => {
        expect(calculator.power([-3, 2])).toBe(9);
      });

      test('should calculate negative base with odd exponent', () => {
        expect(calculator.power([-3, 3])).toBe(-27);
      });

      test('should handle very large exponents (2^20)', () => {
        expect(calculator.power([2, 20])).toBe(1048576);
      });
    });

    describe('Square root edge cases', () => {
      test('should calculate √1 = 1', () => {
        expect(calculator.squareRoot([1])).toBe(1);
      });

      test('should calculate √100 = 10', () => {
        expect(calculator.squareRoot([100])).toBe(10);
      });

      test('should calculate √0.25 = 0.5', () => {
        expect(calculator.squareRoot([0.25])).toBe(0.5);
      });

      test('should calculate √144 = 12', () => {
        expect(calculator.squareRoot([144])).toBe(12);
      });

      test('should handle very large numbers', () => {
        expect(calculator.squareRoot([1000000])).toBe(1000);
      });

      test('should handle very small decimal numbers', () => {
        expect(calculator.squareRoot([0.0001])).toBe(0.01);
      });

      test('should throw error for √(-1)', () => {
        expect(() => calculator.squareRoot([-1])).toThrow('Square root of negative numbers is not allowed');
      });

      test('should throw error for √(-100)', () => {
        expect(() => calculator.squareRoot([-100])).toThrow('Square root of negative numbers is not allowed');
      });

      test('should throw error for √(-0.5)', () => {
        expect(() => calculator.squareRoot([-0.5])).toThrow('Square root of negative numbers is not allowed');
      });
    });
  });
});
