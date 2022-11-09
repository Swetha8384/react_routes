//import logo from './logo.svg';
import './App.css';
//import test from './Component/Test'
//import { Link,useLocation } from "react-router-dom";
import Navbar from './Component/Navbar'
import Home from './Component/Home'
import About from './Component/About'
import Student from './Component/Student'
import Employee from './Component/Employee'
import Login from './Component/Login'
import Register from './Component/Register'
import Dashboard from './Component/Dashboard'

import { BrowserRouter as Router,  Route,Routes } from "react-router-dom";
import Protectedroute from './Component/Protectedroute';
function App() {
  // const {location}=useLocation();
  // console.log(location)
  return (
    <div className="App">
      <h1>Welcome</h1>
      {/* <test /> */}
      <Router>
      <Navbar/>
   <Routes>
     {/* <Route path="/" element={<App />} /> */}
    
     
       <Route element={<Protectedroute/>}>
            <Route path='/Dashboard' element={<Dashboard/>} /> 
       </Route>
       <Route path="/home" element={<Home />} />
     <Route path="/about" element={<About />} />  
     <Route path="/Student" element={<Student />}/>
       <Route path='/Student/Login' element={<Login/>}/>
       <Route  exact path='/' element={<Register/>}/>
     <Route path="/Employee" element={<Employee />} />
   </Routes>
   
 </Router>
      {/* <Router>
        <Navbar />
        <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/About" element={<About/>} />
        <Route path="/Student" element={<Student />} />
        <Route path="/Employee" element={<Employee/>} />
        </Routes>
      </Router> */}
     
    </div>
  );
}

export default App;
