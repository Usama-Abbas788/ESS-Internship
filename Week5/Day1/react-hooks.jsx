import { useState } from "react";

function MyComponent(){
    const [count, setCount] = useState(0);
      const changeState=()=>{
        setCount(count+=1)
      }
    return (
        <div>
            <p>count is {count}</p>
            <button onClick={changeState}>Increase Count</button>
        </div>
    )
}