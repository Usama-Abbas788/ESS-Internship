let name1 = {
    firstName: "Usama",
    lastName: "Abbas",
    printFullName: function(){
        console.log(this.firstName + " " + this.lastName);
    }
}
name1.printFullName(); // output: Usama Abbas
let name2 = {
    firstName: "Ali",
    lastName: "Khan",
}
let name3 = {
    firstName: "Ahmed",
    lastName: "Ali",
}
let reusablePrintFullName = function(hometown, state){
    console.log(this.firstName + " " + this.lastName  + " from " + hometown + " , " + state  );
}

// This concept is function borrowing
// we can borrow functions form other objects and use it with the data of some other objects 
name1.printFullName.call(name2); // output: Ali Khan 
reusablePrintFullName.call(name2, "Lahore", "Punjab");
reusablePrintFullName.call(name3, "Karachi", "Sindh");
// the difference between call and apply is that we can pass array of arguments in appl() method
reusablePrintFullName.apply(name2, ["VEhari", "Punjab"]);
// bind method
let myName = reusablePrintFullName.bind(name3, "Islamabad", "Punjab");
myName();