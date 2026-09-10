document.getElementById("ClickMe").addEventListener("click", function() {
    document.getElementById("demo").innerHTML = "Hello World";
})
document.getElementById("ClickMe").addEventListener("dblclick", function() {
    document.getElementById("demo").style.display = "none";
})