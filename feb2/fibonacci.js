let k=5
let n1=0;
let n2=1;
let n3;

let arr=[]

for(let i=0;i<k;i++){
    arr.push(n1);
    n3=n1+n2;
    n1=n2;
    n2=n3
}
console.log(arr)