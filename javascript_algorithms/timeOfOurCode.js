


// function addUpTo(n) {
//     let total = 0
//     for(let i = 0; i< n; i++) {
//         total += i
//     }
//     return total
// }

// console.log(addUpTo(1000000000))



// let time1 = performance.now()
// let time2 = performance.now()

// console.log(`your performance time ${(time2 - time1)/1000}`)


// another approach


function addUpTo(n) {
    return n * (n + 1) / 2
}
console.log(addUpTo(1000000000))


console.log(`your performance time ${(time2 - time1) / 1000}`)




function printAllPairs(n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            console.log(i, j)
        }
    }
}

printAllPairs(3)