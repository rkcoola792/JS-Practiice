let nums = [20, 100, 10, 12, 5, 13];

for(let i=0;i<nums.length-2;i++){
    if(nums[i]<nums[i+1]&&nums[i+1]<nums[i+2]){
        return console.log("true")
    }
}
return console.log("false")