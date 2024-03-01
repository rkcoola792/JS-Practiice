let s = "catsandog";
let wordDict = ["cats", "dog", "sand", "and", "cat"];

    for(let ele of wordDict){
        if(s.indexOf(ele)==-1){
            return console.log("false")
        }
        else{
          s=s.split("")
          s.splice(s.indexOf(ele.charAt(0)),ele.length)
          s=s.join("")
        }
    }

return console.log("true")