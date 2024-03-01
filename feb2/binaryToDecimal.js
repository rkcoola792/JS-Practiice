let a = "101010";

a=a.split("").reverse()
let sum =0;
for(let i=0;i<a.length;i++){
    sum+=2**i*a[i]
}

console.log(sum)