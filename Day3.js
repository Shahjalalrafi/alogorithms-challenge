// Give a rectangular matrix of characters, add a border of asterisks(*) to it. 

// EXAMPLE: 

// picture = [“abc”, “ded”]

// The output should be-
// addBorder(picture) = [“*****”, “*abc*”, “*ded*”, “*****”]


function addBorder(picture) {
    const border = ("*").repeat(picture[0].length + 2)
    let pictureArray = []
    for(let i = 0; i< picture.length; i++) {
        pictureArray.push("*".concat(picture[i] + "*")) 
    }
    
    pictureArray.push(border)
    pictureArray.unshift(border)
    return pictureArray  
}

console.log(addBorder(['abc', 'ded']))