import React, { createContext, useContext, useState } from 'react'
// import Cookies from 'js-cookie'
export const Authcontext = createContext()
 export const Authprovider = ({children}) => {
        const initialUserState = localStorage.getItem("instantmeal")
        const [AuthUser, setAuthUser] = useState(initialUserState ? JSON.parse(initialUserState) : undefined)
  return (
    <Authcontext.Provider value={[AuthUser,setAuthUser]}>
      {children}
    </Authcontext.Provider>
  )
}

export const useAuth = () => useContext(Authcontext)
