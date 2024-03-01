// Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.
// The first time the returned function is called, it should return the same result as fn.
// Every subsequent time it is called, it should return undefined.

// Example 1:
// Input: fn = (a,b,c) => (a + b + c), calls = [[1,2,3],[2,3,6]]
// Output: 6
// Explanation:
// const onceFn = once(fn);
// onceFn(1, 2, 3); // 6
// onceFn(2, 3, 6); // undefined, fn was not called

let flag = "true";
let oneFunc = (a, b, c) => {
  
  let funcB=(a,b,c)=>{
  if (flag == "true") {
    flag = "false";
    return a + b + c;
  }
  }
  funcB(a,b,c)
  return funcB
};

console.log(oneFunc(1, 2, 3)());
console.log(oneFunc(1, 2, 3)());
