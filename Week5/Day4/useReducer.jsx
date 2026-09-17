import { useReducer } from "react";
function reducer(state, action) {
  switch (action.type) {
    case "Increase":
        // logic
        return state + 1
    case "Decrease":
        //logic
        return state - 1
    default:
      return state;
  }
}
function App() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
        <p>Count is {count}</p>
      <button onClick={() => dispatch({ type: "Increase" })}>Increase</button>
      <button onClick={() => dispatch({ type: "Decrease" })}>Decrease</button>
    </div>
  );
}
