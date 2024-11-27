import React,{useState,useContext} from 'react'

import UserContex from '../contex/UserContex'

export default function Login() {
  const [username,setUsername]=useState('');
  const [password,setPassword]=useState('');

  const {setUser}=useContext(UserContex);//


  const handleSubmit=(e)=>{
    e.preventDefault();
    setUser({username,password})

  }
  return (
    <div>
        <h2>Login</h2>
        <input type="text" placeholder='Username' 
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
        />
        {" "}
        <input type="password" placeholder='Password'
         value={password}
         onChange={(e)=>setPassword(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}
