import React, { useState, createContext } from "react";

// Création du contexte
export const AppContent = createContext();

export const AppContextProvider = (props) => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL; // Assurez-vous que cette variable est définie
    const [isLogin, setIsLogin] = useState(false); // Correction de la casse pour les conventions de nommage
    const [userData, setUserData] = useState(null); // `null` est plus courant que `false` pour les données utilisateur

    const value = {
        backendUrl,
        isLogin,
        setIsLogin,
        userData,
        setUserData,
    };

    return (
        <AppContent.Provider value={value}>
            {props.children}
        </AppContent.Provider>
    );
};
