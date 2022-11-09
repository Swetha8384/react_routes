import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

export const dashboard= () => {
  return((sessionStorage.getItem("istrue"))==="true"?true:false)
}
const Login = () => {
  let navigate = useNavigate();
   
   const l= localStorage.getItem("details");
const l1 = JSON.parse(l);
  const [email,setEmail]=useState(" ");
    const [password,setPassword]=useState(" ");
   console.log(l1,"in l1")
    const submit=(e)=>{
       e.preventDefault();
      // setUpdate({email:email,password:password})
      var flag=false;
       for(var i=0;i<l1.length;i++)
       {
       if(l1[i].mail===email)
       {
        if(l1[i].password===password)
        {
         flag=true;
         break;
        }
      }
    }
    if(flag===false)
      {
        alert("fail")
      }
      else{
        alert("success")
        sessionStorage.setItem("istrue",true)
        navigate('/App')
      }
    }
    // console.log(update,"updateddata")
    
    // console.log(update.email,'email')
    //console.log(d,'local')
    // const success=()=>{
       
    //    alert("success")
    // }
  return (
    <div>
      <h1>Login</h1>
      <form  onSubmit={submit}> 
      <p>Enter your login details</p>
      <label>Email:</label>
       <input type="text" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/><br></br><br></br> 
         <label>Password:</label>
         <input type="text" name="email" value={password} onChange={(e)=>setPassword(e.target.value)}/><br></br><br></br> 
         <input type="submit" value="Login" /> <br></br>
         
      </form>
    </div>
  )
}

 export default Login
