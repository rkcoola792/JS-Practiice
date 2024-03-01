let s="abcde"
let g="cdedab"
s=s.split("")
g=g.split("")


for(let i=0;i<s.length;i++){
   s.push(s.shift());
   

   if(s.join("")===g.join("")){
    return console.log(true)
    
   }
   if(i==s.length-1)
   return console.log( false)
}