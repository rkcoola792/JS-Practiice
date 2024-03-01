function sum(a){
    return function(b){
        return function (c){
            console.log(a+b+c)
        }
    }
}
sum(3)(4)(5)

//infite currying
function sum2(a){
    return function(b){
        if(b){
            return sum2(a+b)
        }
        else
        return a
    }
}

let res= sum2(1)(2)(3)(4)(5)()
console.log(res)