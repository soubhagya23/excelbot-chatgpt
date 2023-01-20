import { useContext , createContext, useEffect, useState } from 'react'
import { auth } from '../firebase-config' 
import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';

const AuthContext = createContext() ;

export const AuthProvider = ({children}) => {
    const [user , setUser] = useState({}) ;

    const googleSignIn = async () => {
        const provider = new GoogleAuthProvider() ;
        await signInWithPopup(auth , provider) ;
    }

    const logOut = () => {
        signOut(auth) ;
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth , (currentUser) => {
            setUser(currentUser) ;
            console.log(currentUser) ;
        }) ;
        return () => {
            unsubscribe() ;
        }
    }, []) ;

    return (
        <AuthContext.Provider value={{ googleSignIn, logOut, user }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext) ;
}