let arr=[1,1,2,3,3,4,5,6,6,7,7,8]

//method 1
console.log([...new Set(arr)])

//method 2
console.log(arr.filter((ele,index,arr)=>arr.indexOf(ele)===index))

//geting duplicates
console.log(arr.filter((ele, index, arr) => arr.indexOf(ele) !== index));