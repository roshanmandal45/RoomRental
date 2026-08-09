"use client"
import React, { useState } from 'react'
import Link from 'next/link'

 const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
 

   
   
 

  return (
    <div className='min-h-screen pt-40'>

    <div className='max-w-md m-auto bg-white rounded-xl p-6 shadow-md w-full'>
      <div className='text-center text-2xl font-medium'>
      <h1>Login</h1>
      </div>
        <form className='flex flex-col gap-5 mt-4' >
          <div className='relative'>
            <label htmlFor="email" className='absolute -my-3 mx-2.5 bg-white'>Email:</label>
            <input type="email" placeholder='Enter your email' className='border p-3 rounded w-full' value={email}onChange={(e)=>setEmail(e.target.value)}/>
          </div>

           <div className='relative'>
            <label htmlFor="password" className='absolute -my-3 mx-2.5 bg-white'>Password:</label>
            <input type="password" placeholder='Enter your password' className='border p-3 rounded w-full' value={password}onChange={(e)=>setPassword(e.target.value)}/>
          </div>

          <div className='text-center'>
            <button className='w-full bg-black cursor-pointer text-white py-2 rounded-lg hover:bg-gray-800 transition'>Login</button>
          </div>

          <div className='text-center text-gray-500'>
          <span>or</span>
          </div>

          <div className=''>
            <button type='button' className='flex cursor-pointer items-center justify-center gap-2 w-full p-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition'>
          <img alt="Google" className="w-5 h-5" src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"></img>
              Sign in with Google
              </button>
          </div>

          <div className='flex items-center justify-center gap-1'>
            <span>Dont have an account?</span>
            <ul>
              <li className='text-blue-700' ><Link href="#" className='text-blue'>
             Register
            </Link></li>
            </ul>
            
          </div>
        </form>
    </div>
    </div>
  )
}
export default Login