'use client'
import React, { useState } from "react";

export default function CounterAppAdvanced() {
    const [counter, setCounter] = useState(0);
    const decrement = (howmuch=1) => {
        setCounter(counter-howmuch)
    }
    const increment = (howmuch=1) => {
        setCounter(counter +howmuch)
    }
    
    
    
    return (
        <>
        <button onClick={()=>decrement(3)}>Deccrement by 3</button>
        <button onClick={()=>decrement(2)}>Decrement by 2</button>
        <button onClick={()=>decrement()}>Decrement</button>
        {counter}
        <button onClick={()=>increment()}>Increment</button>
        <button onClick={()=>increment(2)}>Increment by 2</button>
        <button onClick={()=>increment(3)}>Increment by 3</button>
        </>
    
    )
}
  