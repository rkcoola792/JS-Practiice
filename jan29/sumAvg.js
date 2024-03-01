let arr=[1,2,3,4,5,6,7,8,9,10]

//sum using reduce
console.log(arr.reduce((acc,curr)=>{
    acc+=curr;
    return acc
},0))

//avg using reduce
console.log(arr.reduce((acc,curr,index,arr)=>{
    acc+=curr;

    if(index==arr.length-1){
        return acc/arr.length
    }

    return acc
},0))