import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import ToggleSwitch from "./ToggleSwitch"; // ✅ Working functional toggle

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleToggle = (value) => {
    setRememberMe(value);
    console.log("Remember Me:", value);
  };

  return (
    <div className="bg-white shadow-md rounded-md p-8 w-full max-w-sm min-h-[420px] flex flex-col justify-center transition-all duration-500">
      {/* 🔐 LOGIN FORM */}
      <h2 className="text-xl font-semibold text-center text-gray-800 mb-2">
        Login
      </h2>
      <p className="text-sm text-gray-500 text-center mb-6">
        Let's Get Started SECL CSR Monitoring System
      </p>

      <form className="space-y-5">
        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email / Username
          </label>
          <input
            type="text"
            placeholder="Enter Email / Username"
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-[#0b4b91] focus:border-[#0b4b91] outline-none"
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-[#0b4b91] focus:border-[#0b4b91] outline-none"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-[#0b4b91]"
            >
              {showPassword ? (
                <EyeSlashIcon className="h-5 w-5" />
              ) : (
                <EyeIcon className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Remember me + Forgot password */}
        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 cursor-pointer select-none">
            <ToggleSwitch onChange={handleToggle} />
            <span className="text-gray-600">Remember me</span>
          </label>

          <Link
            to="/forgot-password"
            className="text-[#0b4b91] hover:underline transition-colors"
          >
            Forgot password?
          </Link>
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 rounded-md transition"
        >
          <i className="fa-solid fa-right-to-bracket mr-2"></i> Login ➜
        </button>

        {/* Divider */}
        <div className="flex items-center justify-center my-2">
          <span className="text-sm text-black-500">Or</span>
        </div>

        {/* Google Login */}
        <button
          type="button"
          className="w-full bg-white border border-black rounded-full flex items-center justify-center py-2 shadow-sm hover:shadow-md transition-all duration-200"
        >
          <div className="flex items-center space-x-2">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5"
            />
            <span className="text-gray-700 font-medium text-sm">
              Continue with Google
            </span>
          </div>
        </button>
      </form>
    </div>
  );
}
