let s = "lGaWqAkfVIFhqBzRs3 l2 bwKhelcNiyNBpjGUN1";
let res=[];
s=s.split(" ")
for(let e of s){
    let n=e.charAt(e.length-1)
    res[n-1]=e;
}

for(let i=0;i<res.length;i++){
res[i] = res[i]
  .split("")
  .filter((ele) => (ele >= "a" && ele <= "z") || (ele >= "A" && ele <= "Z"))
  .join("");
}


console.log(res.join(" "))