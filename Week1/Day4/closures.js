function x(){
    var a = 7;
    function y(){
        console.log(a);
    }
    return y;
}
var z = x();
z();
// var c = function i(){

// }
// var v = () => {
    
// }