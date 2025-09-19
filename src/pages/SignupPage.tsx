import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SignUpPage = () => {
  const navigator = useNavigate();

  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    isAgency: "yes",
  });

  const isFormValid =
    form.fullName.trim() !== "" &&
    form.phone.trim() !== "" &&
    form.email.trim() !== "" &&
    form.password.trim() !== ""

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-md w-full min-h-screen bg-white rounded-lg shadow-sm mx-auto p-8">
      {/* Heading */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2 leading-tight">
          Create your
          <br />
          PopX account
        </h1>
      </div>

      {/* Form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          navigator("/account");
        }}
        className="grid gap-6"
      >
        {/* Full Name */}
        <div className="relative w-full">
          <label
            htmlFor="fullName"
            className="absolute -top-2 left-3 bg-white px-1 text-sm font-medium text-purple-600"
          >
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Marry Doe"
            value={form.fullName}
            onChange={handleChange}
            required
            className="block w-full h-12 rounded-md border border-gray-300 px-3 py-2 focus:border-purple-500 focus:ring-purple-500 sm:text-sm"
          />
        </div>

        {/* Phone Number */}
        <div className="relative w-full">
          <label
            htmlFor="phone"
            className="absolute -top-2 left-3 bg-white px-1 text-sm font-medium text-purple-600"
          >
            Phone number<span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Marry Doe"
            value={form.phone}
            onChange={handleChange}
            required
            className="block w-full h-12 rounded-md border border-gray-300 px-3 py-2 focus:border-purple-500 focus:ring-purple-500 sm:text-sm"
          />
        </div>

        {/* Email */}
        <div className="relative w-full">
          <label
            htmlFor="email"
            className="absolute -top-2 left-3 bg-white px-1 text-sm font-medium text-purple-600"
          >
            Email address<span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Marry Doe"
            value={form.email}
            onChange={handleChange}
            required
            className="block w-full h-12 rounded-md border border-gray-300 px-3 py-2 focus:border-purple-500 focus:ring-purple-500 sm:text-sm"
          />
        </div>

        {/* Password */}
        <div className="relative w-full">
          <label
            htmlFor="password"
            className="absolute -top-2 left-3 bg-white px-1 text-sm font-medium text-purple-600"
          >
            Password <span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Marry Doe"
            value={form.password}
            onChange={handleChange}
            required
            className="block w-full h-12 rounded-md border border-gray-300 px-3 py-2 focus:border-purple-500 focus:ring-purple-500 sm:text-sm"
          />
        </div>

        {/* Company Name */}
        <div className="relative w-full">
          <label
            htmlFor="company"
            className="absolute -top-2 left-3 bg-white px-1 text-sm font-medium text-purple-600"
          >
            Company name
          </label>
          <input
            type="text"
            id="company"
            name="company"
            placeholder="Marry Doe"
            value={form.company}
            onChange={handleChange}
            className="block w-full h-12 rounded-md border border-gray-300 px-3 py-2 focus:border-purple-500 focus:ring-purple-500 sm:text-sm"
          />
        </div>

        {/* Radio Buttons */}
        <div>
          <p className="text-sm font-medium text-gray-700 mb-2">
            Are you an Agency?<span className="text-red-500">*</span>
          </p>
          <div className="flex items-center gap-6">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="isAgency"
                value="yes"
                checked={form.isAgency === "yes"}
                onChange={handleChange}
                className="text-purple-600 focus:ring-purple-500"
              />
              Yes
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="isAgency"
                value="no"
                checked={form.isAgency === "no"}
                onChange={handleChange}
                className="text-purple-600 focus:ring-purple-500"
              />
              No
            </label>
          </div>
        </div>

        {/* Button */}
        <button
          type="submit"
          disabled={!isFormValid}
          className={`w-full h-12 rounded-md font-medium transition-colors ${
            isFormValid
              ? "bg-purple-600 text-white hover:bg-purple-700 cursor-pointer"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignUpPage;
