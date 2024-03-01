let s = "a good   example";

console.log(s.trim().split(" ").reverse().filter(ele=>ele!="").join(" "))