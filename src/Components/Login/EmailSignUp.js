import React, { useState } from "react";
import { useAuth } from "../../fireBase/authContext";
import { useNavigate } from "react-router-dom";

const EmailSignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const { signUpWithEmail } = useAuth();
  const navigate = useNavigate();
  const [showSignUp, setShowSignUp] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUpWithEmail(email, password);
      navigate("/dashboard");
    } catch (error) {
      if (
        error.message ===
        "The password is invalid or the user does not have a password."
      ) {
        setError("The password is incorrect.");
      } else {
        setError(error.message);
      }
    }
  };

  const toggleSignUp = () => {
    setShowSignUp(!showSignUp);
  };

  return (
    <>
      {showSignUp ? (
        <>
          <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
            Create a new account
          </h3>
          <form onSubmit={handleSubmit}>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ borderRadius: "13px" }}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            />
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your password
            </label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ borderRadius: "13px" }}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            />
            <div
              className="flex justify-between items-center"
              style={{ marginTop: 15 }}
            >
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    defaultValue
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                  />
                </div>

                <span className="text-sm text-gray-500 ml-1">Remember me</span>
              </div>
              <button
                className="text-sm font-medium text-blue-600 hover:text-blue-500 dark:hover:text-blue-400"
                type="button"
                onClick={toggleSignUp}
              >
                Already have an account?
              </button>
            </div>
            <div className="mt-6">
              <button
                type="submit"
                style={{ borderRadius: "13px" }}
                className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-500 dark:focus:ring-offset-gray-800"
              >
                Sign Up
              </button>
            </div>
            {error && <p className="mt-4 text-red-500 text-center">{error}</p>}
          </form>
        </>
      ) : (
        <>
          <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
            Sign In to our platform
          </h3>
          <form onSubmit={handleSubmit}>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ borderRadius: "13px" }}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            />
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your password
            </label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ borderRadius: "13px" }}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            />
            <div
              className="flex justify-between items-center"
              style={{ marginTop: 15 }}
            >
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    defaultValue
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                  />
                </div>

                <span className="text-sm text-gray-500 ml-1">Remember me</span>
              </div>
              <button
                className="text-sm font-medium text-blue-600 hover:text-blue-500 dark:hover:text-blue-400"
                type="button"
                onClick={toggleSignUp}
              >
                Don't have an account?
              </button>
            </div>
            <div className="mt-6">
              <button
                type="submit"
               
                style={{ borderRadius: "13px" }}
                className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-500 dark:focus:ring-offset-gray-800"
              >
                Sign in
              </button>
            </div>
            {error && <p className="mt-4 text-red-500 text-center">{error}</p>}
          </form>
        </>
      )}
    </>
  );
};
export default EmailSignIn;
