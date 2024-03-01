let s="loveleetcode";
s=s.split("");


//Method 1 
let c=s.filter((ele,index,arr)=>arr.indexOf(ele)===arr.lastIndexOf(ele))
console.log(c[0])


//Method 2
let obj = {};
for(let e of s){
    if(!obj[e]){
        obj[e]=1;
    }
    else{
        obj[e]++
    }
}
let r=[];
for(let e of Object.keys(obj)){
    if(obj[e]==1){
        r.push(e)
    }
}
console.log(r[0])

