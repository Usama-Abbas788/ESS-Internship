console.log("Start");
setTimeout(function cbt() {
    console.log("CB Timeout");
}, 5000);
fetch("https://jsonplaceholder.typicode.com/todos/1").then(function cbf() {
    console.log("CB Fetch");
});
//........ thousand lines of code.
console.log("End");