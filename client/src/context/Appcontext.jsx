import { useState } from "react";

export const AppContent = React.createContext();
export const AppContextProvider=(props)=>{
    const backendUrl= import.meta.env.VITE_BACKEND_URL
    const [islogin,setislogin]=useState(false)
    const [userData,setuserData]=useState(false)
    const value={
        backendUrl,
        islogin,setislogin,
  
    }
    return (
      
          <AppContent.Provider value={value}>
            {props.children}
          </AppContent.Provider>

    )
}
