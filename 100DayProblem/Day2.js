// Write a function that returns the sum of two numbers.
// Write a function that returns the sum of all numbers regardless of # of params.

// EXAMPLE: For param1 = 1 and param2 = 2, the output should be add(param1, param2) = 3.

function sumOfAllNumber(...args) {
    let total = 0
    args.forEach(number => total += number )
    return total
}

console.log(sumOfAllNumber(1, 3, 5))