function addUpTo(n) {
    let total = 0
    for(let i = 0; i< n; i++) {
        total += i
    }
    return total
}

let time1 = performance.now()
console.log(addUpTo(1000000000))
let time2 = performance.now()

console.log(`your performance time ${(time2 - time1)/1000}`)


// another approach
function addUpTo(n) {
    return n * (n+1) /2
}

let time1 = performance.now()
console.log(addUpTo(1000000000))
let time2 = performance.now()

console.log(`your performance time ${(time2 - time1)/1000}`)