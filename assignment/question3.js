
// Q3. Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.
// toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
// notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".

// Example 1
// Input: func = () => expect(5).toBe(5)
// Output:  true

let a=(val)=>{
    let obj={
        toBe:(val2)=>{
            if(val==val2)
            return true;
            else
            return new Error("Not eqaul")
        },
        notToBe:(val3)=>{
            if(val!==val3)
            return true
            else
            return new Error("Equal")
        }

    }
    return obj
}

console.log(a(5).toBe(6))