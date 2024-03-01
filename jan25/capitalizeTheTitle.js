let title = "First leTTeR of EACH Word";
title=title.toLocaleLowerCase();
title=title.split(" ")

for(let i=0;i<title.length;i++){
    if(title[i].length>2)
    title[i]=title[i].charAt(0).toUpperCase()+title[i].substring(1);
}
console.log(title.join(" "))