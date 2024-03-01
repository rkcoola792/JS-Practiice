let word = "abcdefd" 
let ch = "d";

let splitIndex = word.indexOf(ch);
console.log(word.indexOf(ch))

let firstHalf=word.slice(0,splitIndex+1)
let secondHalf=word.slice(splitIndex+1,word.length)

console.log(firstHalf)
firstHalf=firstHalf.split("").reverse().join("");
let res=firstHalf+secondHalf
console.log(res)
