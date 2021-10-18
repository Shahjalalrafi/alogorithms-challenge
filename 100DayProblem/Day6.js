function isPrime(num) {
    if(num < 2) return false
    for(let i = 2; i<num; i++) {
        if(num % i == 0 ) {
            return false
        }
    }
    return true
}

// console.log(isPrime(11))
// console.log(isPrime(10))
// console.log(isPrime(127))
// console.log(isPrime(126))

function countLetters(str) {
    let tempArr = str.split('')
    let count = 1
    let letters = []
    for(let i = 0; i< tempArr.length; i++) {
        if(tempArr[i] === tempArr[i+1]) {
            count
        }else {
            let value = `${count}${tempArr[i]}`
            letters = [...letters, value]
            count = 1
        }
    }
    return letters.join('')
}

// console.log(countLetters('hello h'))

function checkPalindrome(str) {
    let string = str.toLowerCase()

    let firstStr = []
    let secondStr = []
    for(let i = 0; i < string.length; i++) {
        if(string[i] !== " ") {
            firstStr.push(string[i])
        }
    }
    for(let j = string.length; j >= 0 ; j--) {
        if(string[j] !== " ") {
            secondStr.push(string[j])
        }
    }
    return firstStr.join("") == secondStr.join("")


    // with build in method
    //  let initialString = string.split(" ").join('')
    // let reverseString = initialString.split("").reverse().join("")

    // return initialString == reverseString
}

console.log(checkPalindrome('was it a car or a cat i Saw'))