import React from 'react'
//import Navbar from './Component/Navbar'
//import {Link} from 'react-router-dom';
const Dashboard = () => {
    const l= localStorage.getItem("details");
    const l1 = JSON.parse(l);
    
  return (
    <div>
          {
          l1.map((value,index) =>{
                return <p key={index}>{value.firstname}<br></br>
                       {value.lastname}<br></br>
                       {value.mail}<br></br>
                       {value.mobile}</p>})}
    </div>
  )
}

export default Dashboard

