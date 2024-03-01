let arr=[1,2,2,3,4,4,5,6,6]

console.log(arr.filter((ele,index,arr)=>arr.indexOf(ele)===arr.lastIndexOf(ele)))