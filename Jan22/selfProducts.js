let nums = [1, 2, 3, 4];
let res=[];

for(let i=0;i<nums.length;i++){
    let pr=1;
    for(let j=0;j<nums.length;j++){
      if(j==i)
      continue;
    else
        pr=pr*nums[j]
    }
    res.push(pr)
}

console.log(res)