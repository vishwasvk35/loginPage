// src/components/AccountSettings.tsx
import React from "react";
import { CameraIcon } from "@heroicons/react/24/solid";

const AccountsPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <div className="w-full max-w-sm h-screen bg-white shadow-sm ">
        {/* Header */}
        <div className="px-4 py-3 shadow-md">
          <h2 className="text-gray-700 font-semibold">Account Settings</h2>
        </div>

        {/* Profile Section */}
        <div className="px-4 pt-4 pb-2 flex items-start space-x-4 border-gray-300">
          {/* Avatar */}
          <div className="relative">
            <img
              src="/image.png"
              alt="Profile"
              className="w-14 h-14 rounded-full object-cover"
            />

            <button className="absolute bottom-0 right-1 bg-purple-600 p-1 rounded-full shadow-md hover:bg-purple-700 transition">
              <CameraIcon className="w-2 h-2 text-white" />
            </button>
          </div>

          {/* User Info */}
          <div className="flex-1">
            <h3 className="text-gray-900 font-bold">Marry Doe</h3>
            <p className="text-gray-500 text-sm font-semibold">
              Marry@Gmail.Com
            </p>
          </div>
        </div>

        <p className="text-gray-900 text-sm mt-2 p-4 border-b border-dashed border-gray-300">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
          Sed Diam
        </p>
      </div>
    </div>
  );
};

export default AccountsPage;
