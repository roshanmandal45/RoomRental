"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { auth } from "../../lib/firebase";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      // 1. Create account in Firebase
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // 2. Set profile display name
     await updateProfile(result.user, {
  displayName: name.trim(),
  photoURL: "https://ui-avatars.com/api/?name=" + name.trim(),
});

      // 3. Navigate to home ONLY after explicit creation
      router.replace("/");
    } catch (err: any) {
      console.error("REGISTER ERROR:", err);

      if (err?.code === "auth/email-already-in-use") {
        setError("An account with this email already exists.");
      } else if (err?.code === "auth/weak-password") {
        setError("Password should be at least 6 characters.");
      } else if (err?.code === "auth/invalid-email") {
        setError("Please enter a valid email address.");
      } else {
        setError(err?.message || "Registration failed.");
      }
      setLoading(false);
    }
  };

 
  const handleGoogleRegister = async () => {
    setError("");
    setLoading(true);

    try {
      const provider = new GoogleAuthProvider();
      provider.setCustomParameters({
        prompt: "select_account",
      });

      await signInWithPopup(auth, provider);

      router.replace("/");
    } catch (err: any) {
      console.error("GOOGLE REGISTER ERROR:", err);

      if (err?.code === "auth/popup-blocked") {
        setError("Pop-up blocked by browser. Please allow pop-ups for this site.");
      } else if (err?.code === "auth/popup-closed-by-user") {
        setError("Registration popup was closed before completing.");
      } else {
        setError("Google registration failed.");
      }
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white rounded-xl p-6 shadow-md mx-auto w-full max-w-md">
        {/* Title */}
        <div className="text-center text-2xl font-medium">
          <h1>Register</h1>
        </div>

        {/* Error */}
        {error && (
          <div className="mt-4 bg-red-100 text-red-700 p-3 rounded-lg text-sm text-center">
            {error}
          </div>
        )}

        {/* Form */}
        <form className="flex flex-col gap-5 mt-6" onSubmit={handleRegister}>
          {/* Name */}
          <div className="relative">
            <label
              htmlFor="name"
              className="absolute -my-3 mx-2.5 bg-white px-1 text-sm"
            >
              Name:
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              className="border p-3 rounded w-full outline-none focus:border-black"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {/* Email */}
          <div className="relative">
            <label
              htmlFor="email"
              className="absolute -my-3 mx-2.5 bg-white px-1 text-sm"
            >
              Email:
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="border p-3 rounded w-full outline-none focus:border-black"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password */}
          <div className="relative">
            <label
              htmlFor="password"
              className="absolute -my-3 mx-2.5 bg-white px-1 text-sm"
            >
              Password:
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="border p-3 rounded w-full outline-none focus:border-black"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
            />
          </div>

          {/* Submit */}
          <div className="text-center">
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-black text-white py-2 cursor-pointer rounded-lg hover:bg-gray-800 transition disabled:bg-gray-400"
            >
              {loading ? "Creating account..." : "Register"}
            </button>
          </div>
        </form>

        <div className="text-center text-gray-500 my-4">or</div>

        <div>
          <button
            type="button"
            onClick={handleGoogleRegister}
            disabled={loading}
            className="flex items-center justify-center gap-2 w-full p-3 cursor-pointer rounded-lg border border-gray-300 hover:bg-gray-100 transition disabled:bg-gray-100"
          >
            <img
              alt="Google"
              className="w-5 h-5 pointer-events-none"
              src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
            />
            <span>
              {loading ? "Connecting..." : "Continue with Google"}
            </span>
          </button>
        </div>

        {/* Login Link */}
        <div className="flex items-center justify-center gap-1 mt-4 text-sm">
          <span>Already have an account?</span>
          <Link
            href="/login"
            className="text-blue-700 hover:underline font-medium"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;