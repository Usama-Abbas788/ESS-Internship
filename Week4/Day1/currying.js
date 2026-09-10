// first way to do currying
let multiply = function(x, y){
    console.log(x * y);
}
let multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(5); // output: 

// second way to do currying => by closures
function greet(greeting){
    return function(name){
        console.log(greeting + " " + name);
    }
}
let sayHello = greet("Hello");
sayHello("Ali"); // output: Hello John