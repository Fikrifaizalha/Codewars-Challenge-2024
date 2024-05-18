// Fikri Faizal Hamzah Alfa'iz //

// Codewars Challenge 2024 //

// https : https://www.codewars.com/kata/57356c55867b9b7a60000bd7

// CARA KE 1 //
function basicOp(operation, value1, value2) {
  if (operation === "+") {
    return value1 + value2;
  } else if (operation === "-") {
    return value1 - value2;
  } else if (operation === "*") {
    return value1 * value2;
  } else if (operation === "/") {
    return value1 / value2;
  }
  return 0;
}

console.log(basicOp("+", 4, 7));

// CARA KE 2 //

function basicOp(operation, value1, value2) {
  switch (operation) {
    case "+":
      return value1 + value2;
    case "-":
      return value1 - value2;
    case "*":
      return value1 * value2;
    case "/":
      return value1 / value2;
    default:
      return 0;
  }
}

console.log(basicOp("+", 4, 7));
