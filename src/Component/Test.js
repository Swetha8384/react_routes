import React, { useEffect, useState } from 'react';


const Test = (e) => {
    const [a,setAb]=useState("");
    useEffect(()=>{
        console.log(a)
    },[a])
  return (
    <div>
       <h1>useEffect1  </h1>
       <input type="text" value="text" onChange={(e)=>e.target.value}/>
    </div>
  )
}

export default Test;
 