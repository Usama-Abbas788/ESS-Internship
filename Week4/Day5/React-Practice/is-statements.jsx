// Option 1:
// Write if statements outside of the JSX code:
function check() {
  const x = 10;
  let y = "Apple";
  if (x < 20) {
    y = "Orange";
  }
  return (
    <>
      <h1>{y}</h1>
    </>
  );
}

// Option 2:
// Use ternary expressions instead:
function checkGreaterOrEqual() {
  const x = 10;
  return (
    <>
      <h1>{(x) > 10 ? "x is greater than 10" : "x is equal to 10"}</h1>
    </>
  );
}
