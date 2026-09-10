const p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("P1 executed"), 3000);
    setTimeout(() => reject("P1 failed"), 3000);
})
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("P2 executed"), 1000);
    // setTimeout(() => reject("P2 failed"), 1000);
})
const p3 = new Promise((resolve, reject) => {
    // setTimeout(() => resolve("P3 executed"), 2000);
    setTimeout(() => reject("P3 failed"), 2000);
})
Promise.all([p1, p2, p3]).then((res) => {console.log(res)}).catch((err) => {console.log(err)})
.catch((err) => {
    console.log(err)
    // in case of prmise.any() to see errors we have to do:
    console.log(err.errors);
})

