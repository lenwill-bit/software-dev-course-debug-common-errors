/*

Overview
In this activity, you will receive three short JavaScript programs,
each containing a different type of error (syntax, runtime, and logic)
along with a brief explanation of what the program is supposed to do.
Your task is to identify the error, correct it, and verify the fix.

Instructions
Debugging Steps:
  - Identify the error type (syntax, runtime, or logic).
  - Use Debugging Techniques such as reading error messages, using console.log(), or testing in small steps.
  - Propose a Fix that addresses the error.
  - Verify the Solution by running the code again to ensure the program works as intended.

Reflection:
Think about which debugging methods you found most useful and how you might apply them in future projects.

*/

// Programs and Solutions

// Program A
// Description:
// This program is intended to display a simple prompt in the console but fails to run.

console.log("Welcome to the bootcamp");

// What’s Wrong?
//Syntax Error: The string is not properly closed with a quotation mark. The closing quotation mark is missing, which causes a syntax error.

// Program B
// Description:
// This code attempts to multiply each number in an array by 2 and display the results. However, it crashes at runtime.

let numbers = [2, 4, "eight"];
for (let i = 0; i < numbers.length; i++) {
  if (typeof numbers[i] === "number") {
    let doubled = numbers[i] * 2;
    console.log(doubled);
  } else {
    console.log(numbers[i] + " is not a number.");
  }
}

// What’s Wrong?
//Runtime Error: The array contains the string "eight", which cannot be multiplied by 2. When the loop reaches it, "eight" * 2 evaluates to NaN (Not a Number), so the program prints NaN instead of 16. Fix: replace "eight" with the number 8, or check that each value is a number before multiplying.


// Program C (Logic Error)
// Description:
// This snippet of code is supposed to check if a given number is prime (i.e., divisible only by 1 and itself). However, it incorrectly marks some numbers as prime or not prime.

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false; // num is NOT prime
    }
  }
  return true; // num IS prime
}

console.log(isPrime(7)); // true

// What’s Wrong?
//Logic Error: The function incorrectly returns true when it finds a divisor, which should indicate that the number is not prime. The return values are reversed. Fix: Change the return statements to correctly reflect the logic of prime checking. Return false when a divisor is found and true when no divisors are found. After the fix, isPrime(7) returns true and isPrime(8) returns false.