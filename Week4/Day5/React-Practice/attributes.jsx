// Use attribute className instead of class in JSX:
function Car() {
  return (
    <h1 className="myclass">Hello World</h1>
  );
}
// Use JavaScript expressions as attribute values:
function truck(){
    const x ="myclass"
    return (
        <>
        <h1 className={x}>Hellow Truck</h1>
        </>
    )
}
// Event attributes in JSX are written in camelCase.
function Car() {
  const myfunc = () => {
    alert('Hello World');
  };
  return (
    <button onClick={myfunc}>Click me</button>
  );
}