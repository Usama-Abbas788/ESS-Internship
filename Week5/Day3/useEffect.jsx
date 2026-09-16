import { useEffect, useState } from "react";

function MyComponent(){
    const [count, setCount] = useState(0);
    useEffect(()=>{
        let timer = setTimeout(()=>{
            setCount((count)=>count +1);
        },1000)
        return ()=> clearTimeout(timer);
    },[])
    return (
        <div>
            <p>I have rendered {count} times!</p>
        </div>
    )
}