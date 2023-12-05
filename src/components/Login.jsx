import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [clientCardNumber, setClientCardNumber] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (clientCardNumber === "123456789" && password === "1234") {
      navigate("/dashboard");
      console.log("Login successful");
    } else {
      console.log("Login failed");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center  bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500">
      <div className="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">
        <div className="font-bold text-xl sm:text-2xl uppercase text-center text-gray-800">
          Welcome to FCM Online Banking
        </div>

        <div className="mt-10">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col mb-6">
              <div className="flex items-start justify-between">
                <label
                  htmlFor="cardNumber"
                  className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                >
                  Card Number: (123456789)
                </label>
              </div>
              <input
                type="text"
                name="cardNumber"
                value={clientCardNumber}
                onChange={(e) => setClientCardNumber(e.target.value)}
                className="text-sm sm:text-base placeholder-gray-500 pl-4 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                placeholder="XXXX-XXXX-XXXX-XXXX"
              />
            </div>

            <div className="flex flex-col mb-6">
              <div className="flex items-start justify-between">
                <label
                  htmlFor="password"
                  className="m-1 text-xs sm:text-sm tracking-wide text-gray-600"
                >
                  Password: (1234)
                </label>
              </div>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name="password"
                className="text-sm sm:text-base placeholder-gray-500 pl-4 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                placeholder="***********"
              />
            </div>
            <div className="flex items-center mb-6 -mt-4">
              <div className="flex ml-auto">
                <a
                  href="#"
                  className="inline-flex text-sm font-medium sm:text-md text-blue-600 hover:text-blue-800"
                >
                  Forgot Your Password?
                </a>
              </div>
            </div>
            <div className="flex w-full">
              <button
                type="submit"
                className="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded py-2 w-full transition duration-150 ease-in"
              >
                <span className="mr-2 uppercase">Login</span>
              </button>
            </div>
          </form>
        </div>
        <div className="relative mt-10 h-px bg-gray-300">
          <div className="absolute left-0 top-0 flex justify-center w-full -mt-2">
            <span className="bg-white px-4 text-xs text-gray-500 uppercase">
              Or
            </span>
          </div>
        </div>
        <button className="relative mt-6 border rounded-md py-2 text-sm text-gray-800 bg-gray-100 hover:bg-gray-200">
          <span className="absolute left-0 top-0 flex items-center justify-center h-full w-10 text-blue-500">
            <i className="fab fa-facebook-f"></i>
          </span>
          <span>Sign-In with Google</span>
        </button>
        <div className="flex justify-center items-center mt-6">
          <span className="ml-2">Don&apos;t have an account? </span>
          <a
            href="#"
            target="_blank"
            className="ml-1 inline-flex items-center font-bold text-blue-600 hover:text-blue-800 text-sm text-center"
          >
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
