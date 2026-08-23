"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

// 1. Extract the logic using useSearchParams into an inner component
function PaymentSuccessContent() {
  const searchParams = useSearchParams();
  const data = searchParams.get("data");

  return (
    <div className="bg-white p-8 rounded-2xl shadow-md text-center max-w-lg">
      <h1 className="text-3xl font-bold text-green-600">
        Payment Successful 🎉
      </h1>

      <p className="mt-3 text-gray-600">
        Your eSewa payment was completed successfully.
      </p>

      {data && (
        <p className="mt-4 text-xs text-gray-400 break-all">
          eSewa response received
        </p>
      )}
    </div>
  );
}

// 2. Export the main page with a Suspense boundary wrapping the inner component
export default function PaymentSuccess() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Suspense fallback={
        <div className="bg-white p-8 rounded-2xl shadow-md text-center max-w-lg">
          <p className="text-gray-500 animate-pulse">Verifying payment details...</p>
        </div>
      }>
        <PaymentSuccessContent />
      </Suspense>
    </div>
  );
}