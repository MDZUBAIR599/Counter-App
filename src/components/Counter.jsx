// import { colors } from 'prompt';
import React from 'react'
// import styled from 'styled-components';
// import {useState} from "react";
const Counter = ()=>{

    let [count, setCount]=React.useState(0)
    const incrementCount=()=>{
        console.log(count)
        setCount(count+1)
        console.log(count)
    };
    const dicrementCount=()=>{
        
        setCount(count-1)
    }

    const doubleclickI =()=>{
        setCount(count*2)
    }


    
    const doubleclickD =()=>{
        setCount(count*2)
    }
    // let isOdd=false;
    let colors=[];
    if(count%2===1){
        colors.push('textred')
    }
    else{
        colors.push('textgreen')
    }
    return (
        <div>
            <h1 className={colors}>Counter App: {  count}</h1>
            <button onClick={incrementCount} onDoubleClick={doubleclickI}>Increment</button>
            <button onClick={dicrementCount} onDoubleClick={doubleclickD}>Decrement</button>
        </div>
    )

}
export default Counter;