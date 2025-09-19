// src/components/WelcomeCard.tsx
import React from "react";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
    const navigator = useNavigate();
  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-sm flex flex-col justify-end h-screen">
        {/* Content */}
        <div>
          <h1 className="text-xl font-semibold text-gray-900">
            Welcome to PopX
          </h1>
          <p className="text-gray-500 font-medium mt-1">
            Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit,
          </p>

          <div className="mt-6 space-y-3">
            <button onClick={()=>{navigator('/signup')}} className="w-full py-3 rounded-md bg-purple-700 text-white font-medium hover:bg-purple-700 transition cursor-pointer">
              Create Account
            </button>
            <button onClick={()=>{navigator('/login')}} className="w-full py-3 rounded-md bg-purple-200 text-purple-800 font-medium hover:bg-purple-300 transition cursor-pointer">
              Already Registered? Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
