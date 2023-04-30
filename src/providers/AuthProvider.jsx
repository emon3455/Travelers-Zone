/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from 'react';
import { app } from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { FacebookAuthProvider } from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const fbProvider = new  FacebookAuthProvider();

const AuthProvider = ({children}) => {

    const [ user , setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser =(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signInUser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut=()=>{
      return  signOut(auth)
    }

    const resetPass =(email)=>{
        return sendPasswordResetEmail(auth,email)
    }

    const signInWithGoogle=()=>{
        return signInWithPopup(auth,googleProvider)
    }

    const signInWithFB = () =>{
        return signInWithPopup(auth, fbProvider)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser=>{
            setLoading(false);
            setUser(currentUser);
        });
        
        return ()=>{
            unsubscribe();
        }

    },[])

    const authInfo ={
        user,
        createUser,
        signInUser,
        logOut,
        loading,
        resetPass,
        signInWithGoogle,
        signInWithFB
    }

    return (
       <AuthContext.Provider value={authInfo}>
            {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;