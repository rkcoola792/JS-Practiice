let s = "abccbaacz";
s=s.split("")
let obj={}

for(let e of s){
   
    if(!obj[e]){
        obj[e]=1;
    }
    else{
        obj[e]++
         if (obj[e] == 2) {
           return console.log(e);
         }
    }

}

