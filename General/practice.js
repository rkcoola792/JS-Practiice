let d = "abccccdd";
d = d.split("").filter((ele, index, arr) => arr.indexOf(ele)!==index);
console.log(d)