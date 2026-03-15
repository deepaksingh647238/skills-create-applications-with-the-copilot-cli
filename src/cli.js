#!/usr/bin/env node

const readline = require('readline');
const calculator = require('./calculator');

// Create interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Map operators to their corresponding functions
const operatorMap = {
  '+': 'add',
  'add': 'add',
  'addition': 'add',
  '-': 'subtract',
  'subtract': 'subtract',
  'subtraction': 'subtraction',
  '*': 'multiply',
  'multiply': 'multiply',
  'multiplication': 'multiplication',
  '/': 'divide',
  'divide': 'divide',
  'division': 'division'
};

function parseInput(input) {
  const parts = input.trim().split(/\s+/);
  
  if (parts.length < 3) {
    throw new Error('Usage: <operator> <number1> <number2> [number3] ...');
  }

  const operator = parts[0].toLowerCase();
  const operationKey = operatorMap[operator];

  if (!operationKey) {
    throw new Error(`Unknown operator: ${operator}. Use +, -, *, / or add, subtract, multiply, divide`);
  }

  const numbers = parts.slice(1).map(part => {
    const num = parseFloat(part);
    if (isNaN(num)) {
      throw new Error(`Invalid number: ${part}`);
    }
    return num;
  });

  return { operationKey, numbers };
}

function performCalculation(operationKey, numbers) {
  if (!calculator[operationKey]) {
    throw new Error(`Unknown operation: ${operationKey}`);
  }
  return calculator[operationKey](numbers);
}

function prompt() {
  rl.question(
    '\nEnter calculation (e.g., "add 5 10" or "+ 5 10") or "exit" to quit:\n> ',
    (input) => {
      if (input.toLowerCase() === 'exit' || input.toLowerCase() === 'quit') {
        console.log('Goodbye!');
        rl.close();
        return;
      }

      try {
        const { operationKey, numbers } = parseInput(input);
        const result = performCalculation(operationKey, numbers);
        console.log(`\nResult: ${result}`);
      } catch (error) {
        console.error(`\nError: ${error.message}`);
      }

      prompt();
    }
  );
}

console.log('='.repeat(50));
console.log('Welcome to the Node.js CLI Calculator!');
console.log('='.repeat(50));
console.log('\nSupported Operations:');
console.log('  Addition:       + or add');
console.log('  Subtraction:    - or subtract');
console.log('  Multiplication: * or multiply');
console.log('  Division:       / or divide');
console.log('\nExamples:');
console.log('  add 5 10 3       → 18');
console.log('  - 100 25         → 75');
console.log('  multiply 4 5 2   → 40');
console.log('  / 100 2 5        → 10');

prompt();
