import { useRef } from "react"

function App(){
    const count = useRef(0);
    function handleIncrease(){
        count.current =  count.current+1;
        console.log(count.current)
    }
    return (
        <div>
            <p>Count is {count.current}</p>
            <button onClick={handleIncrease}>Increase count</button>
        </div>
    )
}