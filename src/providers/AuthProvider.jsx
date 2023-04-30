/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext } from 'react';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const user = {
        name: "emon",
    }

    return (
       <AuthContext.Provider value={user}>
            {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;