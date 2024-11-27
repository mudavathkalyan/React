import React, { useContext } from "react";
import UserContex from "../contex/UserContex";


export default function Profile() {
  
    const {user}=useContext(UserContex);
    if(!user) return <div>Please do Login</div>
    return <div>Welcome{user.username}</div>
}
