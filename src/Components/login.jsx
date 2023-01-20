import React from 'react'
import { useAuth } from '../fireBase/authContext'

const Login = () => {

    const { googleSignIn , user , logOut } = useAuth() ;

    const handleSignIn = async () => {
        try {
            await googleSignIn() ;
        } catch (error) {
            console.log(error.message) ;
        }
    }

    const handleSignOut = async () => {
        try {
            await logOut() ;
        } catch (error) {
            console.log(error.message) ;
        }
    }

  return (
    <>
      {user?.displayName ? <button onClick={handleSignOut}>SignOut</button> : <button onClick={handleSignIn}>SignIn with Google</button>}
    </>
  )
}

export default Login

