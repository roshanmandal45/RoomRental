"use client";

import { useSearchParams } from "next/navigation";

export default function PaymentSuccess() {
  const searchParams = useSearchParams();

  const data = searchParams.get("data");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
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
    </div>
  );
}