import { useContext , createContext, useEffect, useState } from 'react'
import { auth } from '../firebase-config' 
import { GoogleAuthProvider, signInWithPopup, signOut, createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';

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

    const signUpWithEmail = async (email, password) => {
        try {
          await createUserWithEmailAndPassword(auth, email, password);
        } catch (error) {
          console.error(error.message);
        }
    };

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
        <AuthContext.Provider value={{ googleSignIn, logOut, user, signUpWithEmail }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext) ;
}
