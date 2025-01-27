import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from './firebaseProvider/firebase.config';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)



    const auth = getAuth(app);

    // Email authentication with password:
    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
        
    }

    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () =>{
        setLoading(true)
       return signOut(auth)
    }

    //Get the currently signed-in user:
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
                 setUser(currentUser);
                 console.log('Monitoring the current user', currentUser)
                 setLoading(false)
             });
             return () =>{
                 unSubscribe();
             }
     
         }, [] )


    const authInfo = {
        user, loading, createUser, signInUser, logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;