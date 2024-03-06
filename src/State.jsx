import React, { useState } from 'react'
import { array } from './Arrayobject';

const State = () => {
    const [index,setIndex]=useState(0);
    let arrayIndex=array[index];
    function handle()
    {
        setIndex(index+1);
    }


    return (
        <>
        <h1>This is an Example of State</h1>
         <button onClick={handle}>next</button>
         <p>{arrayIndex.id}</p>
         <p>{arrayIndex.name}</p>
        </>
       )
}


export default State