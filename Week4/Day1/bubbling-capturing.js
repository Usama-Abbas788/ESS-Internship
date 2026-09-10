document.querySelector("#grandparent")
.addEventListener("click", function () {
    console.log("Grandparent clicked");
}, true);//captuirng here

document.querySelector("#parent")
.addEventListener("click", function (e) {
    console.log("Parent clicked");
    e.stopPropagation();
}, false)//bubbling here

document.querySelector("#child")
.addEventListener("click", function () {
    console.log("Child clicked");
}, true);//capturing here