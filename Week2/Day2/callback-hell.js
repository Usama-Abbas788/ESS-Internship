// callback hell
const cart = ["shoes", "pants", "shirts"];
api.createOrder(cart, function () {

  api.proceedToPayment(function () {

    api.showOrderSummary(

        function () {
            api.updateWallet();

        }
    );

  });

});
 