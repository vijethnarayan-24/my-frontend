import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ForgetPasswordForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    console.log("Reset link sent to:", email);
    // Optionally show toast here
  };

  return (
    <div className="bg-white shadow-xl rounded-md p-8 w-86.5 max-w-sm min-h-[480px] flex flex-col justify-center transition-all duration-500">
      {/* Title */}
      <h2 className="text-xl font-semibold text-center text-gray-800 mb-2">
        Forgot Password
      </h2>
      <p className="text-sm text-gray-500 text-center mb-6">
        Enter your registered email to reset your password
      </p>

      {/* Form */}
      <form className="space-y-5 w-full" onSubmit={handleSubmit}>
        {/* Email Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full rounded-md border border-black px-3 py-2 text-sm focus:ring-2 focus:ring-[#0b4b91] focus:border-black outline-none"
            required
          />
        </div>

        {/* Send Reset Link Button */}
        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 rounded-md transition"
        >
          Send Reset Link
        </button>

        {/* Divider */}
        <div className="flex items-center justify-center my-4">
          <span className="text-sm text-gray-500">
            Remember your password?
          </span>
        </div>

        {/* Back to Login Button (Link) */}
        <Link
          to="/login"
          className="w-full border border-black text-[#0b4b91] font-medium py-2 rounded-md hover:bg-[#0b4b91] hover:text-white transition block text-center"
        >
          Back to Login
        </Link>
      </form>
    </div>
  );
}
