// Sum all the prime numbers up to and including the provided number.

// A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.

function TotalOfPrime(num) {
    let primeTotal = 0
    for (var i = 2; i < num; i++) {
        for(var j = 2; j < num; j++) {
            if(i === j) {
                primeTotal += i
            }
            if(i % j == 0) {
                break
            }
        }
    }
    return primeTotal
}

console.log(TotalOfPrime(10))
console.log(TotalOfPrime(100))