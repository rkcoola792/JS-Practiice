let s = "ck077";

s = s.split("").filter((ele) => ele >= "0" && ele <= "9");
s=[...new Set(s)].sort()

if(s.length>1)
console.log(s[s.length-2])
else
console.log("-1")

console.log(s)