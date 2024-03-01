// let a="7+33-3-6*2"

// console.log(eval(a))


// let k=5
// let s=1
// for(let i=k;i>0;i--){
// s*=i
// }
// console.log(s)

// let a=6;
// for(let i=2;i*i<a;i++){;
//     if(a%i==0);
//     return console.log("false");
// };
// return console.log("true");

// let a="qwertyuiopasdfghjklzxcvbnm"

// console.log(a.split("").sort().join(""))


// let a=[1,3,5,7]
// let b=[2,4,6,8]
// let res=[];
// let flag=true;

// for(let i=0;i<a.length;i++){
//     res.push(a[i])
//     res.push(b[i])
// }

// console.log(res)

for(let i=1;i<=30;i++){
    if(i%3==0 && i%5==0){
    console.log(i,"fizzBuzz")
     continue
}
    else if(i%3==0){
    console.log(i,"fizz")
c ontinue
}
    else if(i%5==0){
    console.log(i,"Buzz")
continue}
}