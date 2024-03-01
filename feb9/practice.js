// let arr=[4,2,7,9,4,5,6,2,1,0,3]
// console.log([...new Set(arr)])

// console.log(arr.filter((ele,index,arr)=>arr.indexOf(ele)===index))
// console.log(arr.filter((ele,index,arr)=>arr.indexOf(ele)!==index))
// console.log(arr.filter((ele,index,arr)=>arr.indexOf(ele)==arr.lastIndexOf(ele)))

// let res=arr.reduce((acc,curr,index,arr)=>{
//     acc=acc+curr
//     if(index==arr.length-1){
//         return acc/arr.length
//     }
//     return acc
// })

// console.log(res)

// for(let i=0;i<arr.length-1;i++){
//     for(let j=0;j<arr.length-1-i;j++){
//         if(arr[j]>arr[j+1])
//         [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
//     }
// }

// console.log(arr)

// let str1="cat"
// let str2="atc"

// console.log(str1.split("").sort().join("")===str2.split("").sort().join(""))

// let k=5;
// let n1=0;let n2=1;let n3;

// let arr1=[]
// for(let i=0;i<k;i++){
//     arr1.push(n1);
//     n3=n1+n2;
//     n1=n2;
//     n2=n3
// }

// console.log(arr1)


// let arr="aaaaaacccdcvggggbhtree"

// arr=arr.split("")
// let obj={}
// for(let ele of arr){
//     if(!obj[ele])
//     obj[ele]=1
// else
// obj[ele]++
// }
// console.log(obj)

let obj={
    a:1,
    b:null,
    c:undefined,
    d:"hello"
}
console.log(Object.fromEntries(Object.entries(obj).filter(([_,ele])=>ele!=null)))