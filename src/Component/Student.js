import React from 'react'
import { Link, Outlet} from "react-router-dom";
//const Student_img=new URL('./clgstd.jpg',import.meta.url)
const Student = () => {
  
  return (
    
    <div>
      <div >
        
        {/* <img src={Student_img} alt="Student_img" /> */}
         <h3>Student details</h3><br></br>
        
         <li>
         <Link to="/Student/Login">login</Link>
         </li>
         <li>
         <Link to="/">Register</Link>
         </li>
    </div>
    <Outlet/>
    </div>
  )
}

export default Student;
