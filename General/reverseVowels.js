let s="leetcode";

s=s.split("")
console.log(s)

for(let i=0,j=s.length-1;i<j;){

    if((s[i]=="a"||s[i]=="e"||s[i]=="i"||s[i]=="o"||s[i]=="u")&&(s[j]=="a"||s[j]=="e"||s[j]=="i"||s[j]=="o"||s[i]=="u")){
        [s[i],s[j]]=[s[j],s[i]];
        i++;j--
    }
   else if(s[i]!="a"||s[i]!="e"||s[i]!="i"||s[i]!="o"||s[i]!="u"){
        i++;
    }
    else {
      j--;
    }

}

console.log(s.join(""))