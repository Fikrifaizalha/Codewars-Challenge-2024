// Fikri Faizal Hamzah Alfa'iz //

// Codewars challenge 2024 //

// https : https://www.codewars.com/kata/53da3dbb4a5168369a0000fe

// CARA KE 1
function evenOrOdd(number) {
  return number % 2 ? "Odd" : "Even";
}

console.log(evenOrOdd(0));

// CARA KE 2
function checkOddOrEven(n) {
  if (n & (1 == 1)) {
    return "Number is odd";
  }
  return "Number is even";
}

console.log(checkOddOrEven(12));
console.log(checkOddOrEven(121));
