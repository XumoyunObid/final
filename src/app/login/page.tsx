import React from 'react'
import { GoogleSignInButton } from '../_components/Buttons/authButton'

const Login = () => {
  return (
      <div className="h-[300px] w-full z-30 bg-black  flex items-center justify-center">
    <div>
      <h1 className="text-white text-3xl text-center">Sign In</h1>
    <GoogleSignInButton/>
    </div>
    </div>
  )
}

export default Login
