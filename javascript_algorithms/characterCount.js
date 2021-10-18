function characterCount(str) {
   let character = {}
   for(let i = 0; i< str.length; i++) {
       let element = str[i].toLowerCase()
       if(element !== ' ' & character[element] > 0) {
           character[element] += 1 
       }else if(element !== " ") {
           character[element] = 1
       }
   }
   return character
}

console.log(characterCount('HeLlo everyOne how are you?'))