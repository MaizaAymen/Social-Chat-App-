export const AppContent = React.createContext();
export const AppContextProvider=(props)=>{
    return (
          <AppContent.Provider value={}>
            {props.children}
          </AppContent.Provider>

    )
}
