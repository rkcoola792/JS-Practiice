let a = [1, 2, 4,5, 6, 7, 8];
for(let i=0;i<a.length-1;i++){
    if(a[i]+1!==a[i+1]){
     return console.log(a[i]+1)
    }
}