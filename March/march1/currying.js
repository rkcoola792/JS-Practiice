//currying

// function sum(a) {
//   return function (b) {
//     return function (c) {
//       console.log(a + b + c);
//     };
//   };
// }

//infinite currying
function sum(a){
    return function(b){
        if(!b){
            return a
        }
        return sum(a+b)
    }
}

let res=sum(1)(3)(3)(2)()
console.log(res)