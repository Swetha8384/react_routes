import React from 'react'
import { useNavigate } from "react-router-dom";
const Employee = () => {
  let navigate = useNavigate();
  return (
    <div>
      <h1>Employee details</h1>
      <button onClick={()=>navigate('/About')}>gotohome</button>
    </div>
  )
}

export default Employee;
