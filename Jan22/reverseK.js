let s = "abcdefghijklmnop"
let k = 3

s=s.split("")
for(let start=0;start<s.length;start+=2*k){
let i=start;
let j=start+k-1;
while(i<j){
    // let tmp = s[i];
    // s[i] = s[j];
    // s[j] = tmp;
    [s[i],s[j]]=[s[j],s[i]]
    i++;j--;
}

}
console.log(s.join(""))