// Functions that call be called inside other functions

setTimeout(function(){
    console.log("Hello after 3 seconds");
},3000);

function x(y){
    console.log("x called");
    y();
}
x(function y(){
    console.log("y called");
});