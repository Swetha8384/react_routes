import React from 'react';
import {Link} from 'react-router-dom';
function navbar()
{
    return(
        <div class='navbar'>
            {/* <nav>
                <Link to="/home">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/student">Student</Link>
                <Link to="/employee">Employee</Link>
            </nav> */}
          
         <nav>
         <li>
                <Link to="/home">Home</Link>
            </li>
            <li>
                <Link to="/about">About </Link>
            </li>
             <li>
              <Link to="/Student">Student info</Link>
             </li>
             <li>
               <Link to="/Employee">Employee info</Link>
             </li>
             <li>
               <Link to="/Dashboard">Dashboard</Link>
             </li>
         </nav>
        </div>
    )
}
export default navbar;