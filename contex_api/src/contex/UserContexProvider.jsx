import React from "react";
import userContex from "./UserContex";

//provider
const UserContexProvider=({children})=>{
    const [user,setUser]=React.useState(null);
    return (
        <userContex.Provider value={{user,setUser}}>
        {children}
        </userContex.Provider>
    )
}
export default UserContexProvider;