let arr=[1,2,4,4,6,7,8,8,9]

console.log(arr.filter((ele,index,arr)=>arr.indexOf(ele)==arr.lastIndexOf(ele)))
