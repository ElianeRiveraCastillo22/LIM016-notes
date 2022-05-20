import { createContext, useState } from "react"
import {createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export const UserContext =createContext()

const UserProvider=(props)=>{
    const [user, setUser] = useState("hola");


    const registerUser=(email, password)=>createUserWithEmailAndPassword(auth, email, password)

    return(
        <UserContext.Provider value={{registerUser,user,setUser}}>
            {props.children}
        </UserContext.Provider>
    )
}
export default UserProvider;