import React from "react";

export const AuthContext = React.createContext();

export function AuthContextProvider({children}){
    const[isAuth , setIsAuth] = React.useState(false);

    const toggleAuth = () => {
          setIsAuth(!isAuth);
    }
   
    return (
          <AuthContext.Provider value = {{isAuth , setIsAuth , toggleAuth}}>
             {children}
          </AuthContext.Provider>
    )
}