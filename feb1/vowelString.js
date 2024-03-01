let words = ["are","amy","u"]
let vowels=["a","e","i","o","u"]
let count=0
for(let i=0;i<words.length;i++){
    if (
      vowels.includes(words[i].charAt(0)) &&
      vowels.includes(words[i].charAt(words[i].length-1))
    ) {
      count++;
    }
}
console.log(count)