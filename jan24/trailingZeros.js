let num = "51230100";
num=num.split("").reverse()
let i=0;
while(num[i]==0){
    num.splice(0,1)
}
console.log(num.reverse().join(""))