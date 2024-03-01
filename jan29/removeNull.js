let obj={
    a:1,
    b:null,
    c:undefined,
    d:"hello"
}

let a=Object.entries(obj).filter(([_,val])=>val!=null)
console.log(Object.fromEntries(a))