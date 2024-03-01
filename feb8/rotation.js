// // // let arr=[2,3,4,5,7]

// // // let temp=[];
// // // let k=3;

// // // for(let i=0;i<arr.length;i++){
// // //     temp[(i+k)%arr.length]=arr[i]
// // // }

// // // console.log(temp)


// // var firstWord = "Deepak";
// // var secondWord = "Aman";



// // callbacks


// cart=["red","shirt","pants","jeans"]

// api.createOrder(cart, function (orderId) {

//   api.placeOrder(orderId, function (placeOrderId) {
   
//     api.updateCart(placeOrderId, function (updateCartId) {
      
//         api.fetchWallet();
//     });
//   });
// });

// createOrder(orderId)
// .then(function(orderId){
//     return placeOrder(orderId )
// })
// .then(function(walletId){
// return walletapit()
// })


let obj={
    name:"rajeev",
    age:"25",
    getName:function(){ console.log(this)}
    
}
console.log(this)
obj.getName()

