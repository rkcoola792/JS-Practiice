let obj1={
    name:"Rajeev",
    age:"25",
    gender:"Male",
    f:function(){
        return this.age
    }
}
let obj2 = {
  name: "Sameer",
  age: "26",
  gender: "Male",
};


console.log(obj1.f())
console.log(obj1.f.bind(obj2)())