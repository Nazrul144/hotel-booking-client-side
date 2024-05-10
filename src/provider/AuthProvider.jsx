import React, { createContext, useState } from 'react';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState()
    const [loading, setLoading] = useState()

    const authInfo = {
       name:'rakib'
    }
    return (
        <AuthContext.Provider value={name}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;