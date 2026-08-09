"use client"
import React, { useState } from "react";
import Link from "next/link";


 const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
     

   

  return (
    <div className="min-h-screen pt-40">

    <div className=" bg-white rounded-xl p-6 shadow-md mx-auto max-w-md ">
      <div className="text-center text-2xl font-medium">
        <h1>Register</h1>
      </div>

      <form className="flex flex-col gap-5 mt-4">
        <div className="relative">
          <label htmlFor="name" className="absolute -my-3 mx-2.5 bg-white">
            Name:
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            className="border p-3 rounded w-full"
            value={name}
            onChange={(e) => setName(e.target.value)} 
            />
        </div>

        <div className="relative">
          <label htmlFor="email" className="absolute -my-3 mx-2.5 bg-white">
            Email:
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="border p-3 rounded w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
        </div>

        <div className="relative">
          <label htmlFor="password" className="absolute -my-3 mx-2.5 bg-white">
            Password:
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            className="border p-3 rounded w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
        </div>

        <div className="text-center">
          <button
            type="submit"
            
            className="w-full bg-black text-white py-2 cursor-pointer rounded-lg hover:bg-gray-800 transition disabled:opacity-50"
            >
            Register
          </button>
        </div>
      </form>

      <div className="text-center text-gray-500 my-2">or</div>

      <div>
        <button
          type="button"
          className="flex items-center justify-center gap-2 w-full p-2 cursor-pointer rounded-lg border border-gray-300 hover:bg-gray-100 transition disabled:opacity-50">
          <img
            alt="Google"
            className="w-5 h-5"
            src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
          />
          Continue with google
        </button>
      </div>

      <div className="flex items-center justify-center gap-1 mt-3">
        <span>Already have an account?</span>
        <ul>
          <li className="text-blue-700">
            <Link href="#" className="text-blue">Login</Link>
          </li>
        </ul>
      </div>
    </div>
          </div>
  );
};
export default Register