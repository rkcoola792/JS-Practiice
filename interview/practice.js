// let arr=[1,5,2,5,7,8,90,4,5,7]
// let k = 6

// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr.length-1-i;j++){
//         if(arr[j]>arr[j+1]){
//             [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
//         }
//     }
// }
// arr=arr.filter((ele,index,arr1)=>arr1.indexOf(ele)===index)

// console.log(arr)

// let proceedToPayment=new Promise((resolve,reject)=>{
// resolve("success")
// })


// createOrder.then(data1=>checkout.then(data2))

let name="Ivanna"
const obj = {
    "Jacobs": ["Emiel", "Svjetlana", "Ivanna"],
    "Ivanna": ["Michael", "Lawson"],
    "Lawson": [],
    "Michael": ["Lindsay", "Ferguson"],
    "Ferguson": []
}
let res=[]
for(let ele of Object.keys(obj)){
    if(ele==name){
        res.push(...obj[ele])
        
    }
    if(res.includes(ele)){
        res.push(...obj[ele])
    }
 }
 console.log(res)
// let a = [["Emiel", "Svjetlana", "Ivanna"]];
// console.log(a.includes("Ivanna"));
// console.log(res)

// let arr=[4, [2, 3], [5, [5, 6, 2]], [9, 8, [23, 5]]];

// console.log(arr.join(","))
// console.log(arr)

let a = 0

for(let i=1;i<5;i++){
    setTimeout(()=>{
        console.log(i)
    })
}

while(a<5){
    setTimeout(() => {
     console.log(a)   
    });
    a++
}


