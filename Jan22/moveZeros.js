var moveZeroes = function (nums) {
  let zeroArray = nums.filter((ele) => ele == 0);
  nums = nums.filter((ele) => ele != 0);
  nums = [...nums, ...zeroArray];
  return nums;
};
let nums = [0, 1, 0, 3, 12];
console.log(moveZeroes(nums))

