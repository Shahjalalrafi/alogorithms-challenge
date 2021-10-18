// Give a sequence of integer to an array, determine whether it is possible to obtain a strictly increasing sequence by removing not more than one element from the array.


function almostIncreasingSequence(array) {
    // for(let i = 0; i < array.length; i++) {
    //     if(array[i] < array[i-1]) {
    //         return false
    //     }
    // }
    // return true

    for(let i = 0; i < array.length; i++) {
        if(array[i] < array[i - 1]) {
            return false
        }
    }
    return true
}


console.log(almostIncreasingSequence([1, 2, 3]))
console.log(almostIncreasingSequence([1, 2, 1]))
