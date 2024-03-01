let word1 = ["ab", "c"]
let word2 = ["a", "bc"]

word1=word1.reduce((acc,curr)=>acc=acc.concat(curr))
word2=word2.reduce((acc,curr)=>acc=acc.concat(curr))

console.log(word1==word2)