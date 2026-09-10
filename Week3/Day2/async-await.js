// What is async?
// What is await?
// How async await work behind the scenes?
// Examples of async and await in JavaScript
// Error handling in async await
// Interviews
// Async await vs Promise.then/.catch

// async always returns a promise. If the function returns a value, the promise will be resolved with that value. If the function throws an error, the promise will be rejected with that error.
// if we don't return a value from async it will always return a promise automatically
const p = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("Promise executed"), 10000);
});
const p1 = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("Promise 1 executed"), 5000);
});
const p2 = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("Promise 2 executed"), 20000);
});
// Difference between normally handling promises and handling using async/await
// handling promises normally or without async/await
function myFunction() {
  // JS engine will not wait for promise to be resolved
  p.then((res) => console.log(res));
  console.log("Hello"); // output will be Hello first and then Promise executed after 10 second because the promise is asynchronous and will be resolved after 5 second.
}
// handling promises with async/await
async function handlePromise1() {
  console.log("Usama"); // this line will execute immediately before the 10 sec completion of Promise P.
  // JS engine will wait for 10 sec for promise P to be resolved
  const val1 = await p;
  console.log("JavaScript Here 1"); // output will be "JavaScript Here 1 and Promise executed" here after 10 second because the promise P is asynchronous and will be resolved after 10 second.
  console.log(val1);

  const val2 = await p;
  console.log("JavaScript Here 2");
  console.log(val2);
}

async function handlePromise2() {
  console.log("Usama");

  const val1 = await p1;
  console.log("JavaScript Here 1");
  console.log(val1);

  const val2 = await p2;
  confirm.log("JavaScript Here 2");
  console.log(val2);
}

const dataPromise = p;
console.log(dataPromise); // Promise {<resolved>: "Welcome"}, will return a promise object.
dataPromise.then((res) => console.log(res)); // Welcome

// real world scenario of async/await
const GitHub_API = "https://api.github.com/users/Usama-Abbas788";
async function handlePromise() {
  // for error handling we use try{} and catch{} in async functions
  try {
    const data = await fetch(GitHub_API);
    const jsonData = await data.json();
    console.log(jsonData); // will return the json data of the user Usama-Abbas788
  } catch (error) {
    console.log(error.message); // will return the error message if the API is not working or the user is not found
  }

  // fetech() => Response.json() => jsonValue
}
