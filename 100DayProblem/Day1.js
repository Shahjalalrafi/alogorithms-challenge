// array input element will be change like substractionElement. if any of my element match with elementToReplace

function arrayReplace (inputArray, elementToReplace, substractionElement) {
    let replacedArray = []
    for(let i = 0; i< inputArray.length; i++) {
        if(inputArray[i] === elementToReplace) {
            replacedArray.push(substractionElement)
        }else {
            replacedArray.push(inputArray[i])
        }
    }
    return replacedArray
}

console.log(arrayReplace([1,2,1], 1, 3))
