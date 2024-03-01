let sentence = "Leetcode is cool";
sentence=sentence.split(" ")

let c="leetcode"

for(let i=0;i<sentence.length-1;i++){
    if(sentence[i].substring(sentence[i].length-1)!==sentence[i+1].charAt(0)){
     return console.log("false")
    }
}
sentence=sentence.join(" ")
if(sentence.charAt(0)==sentence.charAt(sentence.length-1)){
return console.log("true")
}
else{
    return console.log("false")
}