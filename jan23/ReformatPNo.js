let n = "123 4-5678";

n=n.split("").filter(ele=>ele!=" "&& ele!="-")
for(let i=3;i<n.length;i+=4){

    n.splice(i,0,"-")

}
console.log(n.join(""))