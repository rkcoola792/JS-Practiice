 let words =["$easy$","$problem$"];
 let separator = "$";
 console.log(words.join(separator).split(separator).filter(ele=>ele!="") )