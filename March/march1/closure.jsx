closure
function a(){
let a=1;
    function b(){
        console.log(a)
    }
    return b;
}
let res=a()
res()
