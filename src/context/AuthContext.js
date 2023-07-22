import React,{createContext,useState} from "react";
export const AuthContext=createContext();

export  const AuthProvider=({children})=>{

const [isLoading,setIsLoading]=useState(false);
const [userInfo,setUserInfor]=useState(null);
const [isLoggedIn,setIsLoggedIn]=useState(null);

const login=(email,password)=>{
setIsLoggedIn(true);
}


const register=(email,password)=>{
}
  return(
    <AuthContext.Provider value={{register,login,isLoggedIn}}>{children}</AuthContext.Provider>
    )

};




