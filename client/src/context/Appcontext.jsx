import React, { useState, createContext } from "react";
import { toast } from "react-toastify";
import axios from 'axios';
// Création du contexte
export const AppContent = createContext();

export const AppContextProvider = (props) => {
    const backendUrl = process.env.VITE_BACKEND_URL; // Assurez-vous que cette variable est définie
    const [isLogin, setIsLogin] = useState(false); // Correction de la casse pour les conventions de nommage
    const [userData, setUserData] = useState(false); // `null` est plus courant que `false` pour les données utilisateur
   const getUserData =async ()=>{
    try {
        const {data} =await axios.get('http://localhost:4000/api/user/data')    
        data.success ? setUserData(data.userData):toast.error(data.message)
    } catch (error) {
        toast.error(error.message)
        
    }
   }


    const value = {
        backendUrl,
        isLogin,
        setIsLogin,
        userData,
        setUserData,
        getUserData
    };

    return (
        <AppContent.Provider value={value}>
            {props.children}
        </AppContent.Provider>
    );
};
