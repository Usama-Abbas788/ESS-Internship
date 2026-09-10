"use strict"
// this in global space
console.log(this);
// this inside a function
function x(){
    console.log(this);// output: global object(window) in non-strict mode
}
// this in non-strict mode - (this substitution)

// this value depends on how this is called (window)
x();// output: in strict mode value will be undefined
window.x(); // output: global object(window)
// this inside an object's method
const student = {
    name: "Usama",
    printName: function(){
        console.log(this);
        console.log(this.name);
    }

}
student.printName() ; // output: student {name: "Usama", x: ƒ} "Usama"
const student2 = {
    name: "Ali",
}
student.printName.call(student2); // output: student2 {name: "Ali"} "Ali"
// call apply bind methods (sharing methods)

// this inside arrow function 
const obj = {
    a: 10,
    x: () => {
        console.log(obj.a); // arrow functions don't have thier own this keyword binding, they inherit it from their parents
        console.log(this); // output: global object(window) in strict/non-strict mode
    }
}
obj.x(); // output: global object(window) in strict/non-strict mode
// this inside nested arrow function
const obj2 = {
    a: 20,
    x : function(){
        const y = () => {
            console.log(this.a); // output: 20, inherit this keyword from it's parent
            console.log(this); // output: object2 {a: 20, x: ƒ}
        }
        y();
    },
};
obj2.x(); //
// this inside DOM => refernce to HTML element