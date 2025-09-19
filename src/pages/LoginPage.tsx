import { useNavigate } from "react-router-dom";
import { useState } from "react";

const LoginPage = () => {
  const navigator = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isFormValid = email.trim() !== "" && password.trim() !== "";

  return (
    <div className="max-w-md w-full h-screen bg-white rounded-lg shadow-sm algin-center mx-auto p-8">
        <div className="mb-8 mt-15">
          <h1 className="text-3xl font-bold text-gray-900 mb-3 leading-tight">
            Signin to your
            <br />
            PopX account
          </h1>
          <p className="text-gray-500 font-medium leading-relaxed">
            Lorem ipsum dolor sit amet,
            <br />
            consectetur adipiscing elit.
          </p>
        </div>
        
        <form
          action=""
          className="grid gap-5"
          onSubmit={() => {
            navigator("/account");
          }}
        >
          <div className="relative w-full">
            <label
              htmlFor="email"
              className="absolute -top-2 left-3 bg-white px-1 text-sm font-medium text-purple-600"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              required
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full h-10 rounded-md border border-gray-300 px-3 py-2 focus:border-purple-500 focus:ring-purple-500 sm:text-sm"
            />
          </div>

          <div className="relative w-full">
            <label
              htmlFor="password"
              className="absolute -top-2 left-3 bg-white px-1 text-sm font-medium text-purple-600"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              required
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full h-10 rounded-md border border-gray-300 px-3 py-2 focus:border-purple-500 focus:ring-purple-500 sm:text-sm"
            />
          </div>

          <button
            type="submit"
            className={`h-10 rounded-md font-medium transition-colors ${
              isFormValid
                ? "bg-purple-600 h-12 text-white hover:bg-purple-700 cursor-pointer"
                : "bg-gray-300 h-12 text-white cursor-not-allowed"
            }`}
          >
            Login
          </button>
        </form>
      </div>
  );
};

export default LoginPage;
