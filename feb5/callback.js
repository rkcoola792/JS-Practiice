cart=["shoes","milk","shirts"]


api.createOrder(cart,function () { 

  api.proceedToPayment(function () {

    api.checkOut(function () {
        
      api.updateWallet();
    });
  });
});




 
 
 
 