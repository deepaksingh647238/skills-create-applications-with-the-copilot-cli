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
});
