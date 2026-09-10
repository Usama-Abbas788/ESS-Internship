const cart = ["shoes", "pants", "shirts"];
// Before Promises
createOrder(cart, function(orderId) {
    proceedToPayment(orderId, function(paymentInfo) {
        showOrderSummary(paymentInfo, function(paymentInfo) {
            updateWallet(paymentInfo);
        })
    });
});     // Pyramid of doom here

// promise is an empty object with some data in the form of {key : value}
// When JS Engine executes the createOrder function, it returns a promise object. This promise object is an empty object with some data in the form of {key : value}. The promise object has a then method that can be used to attach callbacks to be executed when the promise is resolved or rejected.
// {data : undefined}
// After sometimes the promise will return the actual data 
// {data : orderDetails}

// After Promises
createOrder(cart)
.then(function (orderId){
    return proceedToPayment(orderId);
})
.then(function (paymentInfo){
    return showOrderSummary(paymentInfo) ;
})
.then(function (paymentInfo){
    return updateWallet(paymentInfo);
})              // No pyramid of ddom


const tempApi= "https://jsonplaceholder.typicode.com/todos/1";
// fetch function returns us a promise
const user= fetch(tempApi);
console.log(user); // Promise {<pending>} 

user.then(function (response){
    console.log(response); // Response {type: 'cors', url: 'https://jsonplaceholder.typicode.com/todos/1', redirected: false, status: 200, ok: true, …}  
})