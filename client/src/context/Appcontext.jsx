export const AppContent = React.createContext();
export const AppContextProvider=(props)=>{
    const backendUrl= import.meta.env.VITE_BACKEND_URL
    const value={
  
    }
    return (
      
          <AppContent.Provider value={value}>
            {props.children}
          </AppContent.Provider>

    )
}
