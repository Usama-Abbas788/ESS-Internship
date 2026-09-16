import { createContext, useContext, useState } from "react";
// without useContext Hook
// passing props through nested components => cause props drilling
function Component1() {
  const [user, setUser] = useState("Usama");
  return (
    <div>
      <h1>Hello {user}!</h1>
      <Component2 user={user} />
    </div>
  );
}
function Component2({ user }) {
  return (
    <div>
      <h1>Component 2</h1>
      <Component3 user={user} />
    </div>
  );
}
function Component3({ user }) {
  return (
    <div>
      <h1>Component 3</h1>
      <h2>Hello {user}! again</h2>
    </div>
  );
}
// using useContext Hook
const RoleContext = createContext();
function MyComponent1() {
  const [role, setRole] = useState("Developer");
  return (
    <RoleContext.Provider value={role}>
      <div>
        <h1>I'm {role}</h1>
        <MyComponent2 />
      </div>
    </RoleContext.Provider>
  );
}
function MyComponent2() {
  return (
    <div>
      <h1>Component 2</h1>
      <MyComponent3 />
    </div>
  );
}
function MyComponent3() {
    const role = useContext(RoleContext);
  return (
    <div>
        <h1>Component 3</h1>
        <h2>I'm {role}! again</h2>
        <button onClick={()=> setRole('Tester')}>Change role</button>
    </div>
  )
  
}
