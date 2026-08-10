"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import {
  signInWithEmailAndPassword,
  signInWithRedirect,
  getRedirectResult,
  GoogleAuthProvider,
} from "firebase/auth";

import { auth } from "../../lib/firebase";
import { useAuth } from "../../context/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const {
    user,
    loading: authLoading,
  } = useAuth();

  
  useEffect(() => {
    const handleRedirectResult = async () => {
      try {
        console.log("🔥 CHECKING GOOGLE REDIRECT RESULT");

        const result = await getRedirectResult(auth);

        if (result) {
          console.log(
            "🔥 GOOGLE LOGIN SUCCESS:",
            result.user
          );

          // Go to main page
          router.replace("/");
        }
      } catch (err: any) {
        console.error(
          "🔥 GOOGLE REDIRECT ERROR:",
          err
        );

        setError(
          err?.message ||
            "Google Sign-In failed."
        );
      }
    };

    handleRedirectResult();
  }, [router]);

 
  useEffect(() => {
    if (!authLoading && user) {
      console.log(
        "🔥 USER LOGGED IN → MAIN PAGE"
      );

      router.replace("/");
    }
  }, [user, authLoading, router]);



  const handleEmailLogin = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    console.log("🔥 EMAIL LOGIN CLICKED");

    setError("");
    setLoading(true);

    try {
      const result =
        await signInWithEmailAndPassword(
          auth,
          email,
          password
        );

      console.log(
        "🔥 EMAIL LOGIN SUCCESS:",
        result.user
      );

      // Go to main page
      router.replace("/");
    } catch (err: any) {
      console.error(
        " EMAIL LOGIN ERROR:",
        err
      );

      setError(
        err?.message ||
          "Email login failed."
      );

      setLoading(false);
    }
  };

  
  const handleGoogleLogin = async () => {
    console.log("GOOGLE LOGIN CLICKED");

    setError("");
    setLoading(true);

    try {
      const provider =
        new GoogleAuthProvider();

      provider.setCustomParameters({
        prompt: "select_account",
      });

      console.log(
        " REDIRECTING TO GOOGLE..."
      );

      await signInWithRedirect(
        auth,
        provider
      );

      
    } catch (err: any) {
      console.error(
        " GOOGLE LOGIN ERROR:",
        err
      );

      setError(
        err?.message ||
          "Google Sign-In failed."
      );

      setLoading(false);
    }
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-xl p-6 shadow-sm">

        <h1 className="text-2xl font-bold text-center">
          Login
        </h1>

        {/* Error */}

        {error && (
          <div className="mt-4 bg-red-100 text-red-700 p-3 rounded-lg text-sm text-center">
            {error}
          </div>
        )}

        {/* Email Login */}

        <form
          onSubmit={handleEmailLogin}
          className="space-y-5 mt-6"
        >
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium mb-2"
            >
              Email
            </label>

            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="border border-gray-300 w-full p-3 rounded-lg outline-none focus:border-black"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium mb-2"
            >
              Password
            </label>

            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="border border-gray-300 w-full p-3 rounded-lg outline-none focus:border-black"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-black text-white w-full p-3 rounded-lg hover:bg-gray-800 transition disabled:bg-gray-400 cursor-pointer"
          >
            {loading
              ? "Logging in..."
              : "Login"}
          </button>
        </form>

        {/* OR */}

        <div className="flex items-center gap-3 my-5">
          <div className="h-px bg-gray-200 flex-1" />

          <span className="text-sm text-gray-500">
            or
          </span>

          <div className="h-px bg-gray-200 flex-1" />
        </div>

        {/* Google Login */}

        <button
          type="button"
          onClick={handleGoogleLogin}
          disabled={loading}
          className="w-full p-3 rounded-lg border border-gray-300 hover:bg-gray-50 bg-white flex items-center justify-center gap-3 cursor-pointer disabled:bg-gray-100 transition"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
            alt="Google"
            className="w-5 h-5 pointer-events-none"
          />

          <span>
            {loading
              ? "Redirecting..."
              : "Continue with Google"}
          </span>
        </button>

        {/* Register */}

        <p className="text-center mt-5 text-sm text-gray-600">
          Don't have an account?

          <Link
            href="/register"
            className="text-blue-600 ml-2 hover:underline font-medium"
          >
            Register
          </Link>
        </p>

      </div>
    </div>
  );
}