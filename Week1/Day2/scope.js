function a(){
    var b = 10;
    c();
    function c(){
        console.log(b);
    }
}
a();
console.log(b);


/*
| Variable Keyword | Scope Level                      | Can be Redeclared? |
|------------------|----------------------------------|--------------------|
| `var`            | **Function** (ignores `{}` blocks) | Yes              |
| `let`            | **Block** (respects `{}` blocks)   | No               |
| `const`          | **Block** (respects `{}` blocks)   | No               |
*/