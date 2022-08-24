import React, { createContext, useState } from 'react'
 
export const AppContext= createContext();
const AppContextProvider = ({children}) => {
    const [authState,setAuthState]=useState({
        isAuth:false,
        token:null
    });
    const userLogin = (token) => {
        setAuthState({ isAuth: true, token: token });
      };

  return (
    <AppContext.Provider value={{authState,setAuthState,userLogin}}>
        {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider