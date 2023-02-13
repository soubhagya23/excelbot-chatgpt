import React, { useState } from "react";
import { useAuth } from "../../fireBase/authContext";
import { useNavigate } from "react-router-dom";

const EmailSignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const { signUpWithEmail } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUpWithEmail(email, password);
      navigate("/dashboard");
    } catch (error) {
      if (error.message === "The password is invalid or the user does not have a password.") {
        setError("The password is incorrect.");
      } else {
        setError(error.message);
      }
    }
  };
  return (
    <>
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
        <div className="flex justify-between" style={{ marginTop: 15 }}>
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                defaultValue
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
              />
            </div>
            <label
              htmlFor="remember"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Remember me
            </label>
          </div>
          <a
            href="#"
            className="text-sm text-blue-700 hover:underline dark:text-blue-500"
          >
            Lost Password?
          </a>
        </div>
        <button
          style={{ marginTop: 15 }}
          type="submit"
          className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Sign In
        </button>
        {error && <p>{error}</p>}
      </form>
      
      <div
        className="text-sm font-medium text-gray-500 dark:text-gray-300"
        style={{ marginTop: 15 }}
      >
        Not registered?{" "}
        <a
          href="#"
          className="text-blue-700 hover:underline dark:text-blue-500"
        >
          Create account
        </a>
      </div>
    </>
  );
};

export default EmailSignUp;
