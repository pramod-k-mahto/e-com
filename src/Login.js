import React, { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length === 0) {
      // Handle form submission logic here (e.g., API call)
      console.log("Form data:", formData);
      // Reset form after successful submission
      setFormData({
        email: "",
        password: "",
      });
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = (data) => {
    let errors = {};

    if (!data.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "Email address is invalid";
    }

    if (!data.password) {
      errors.password = "Password is required";
    }

    return errors;
  };

  return (
    <div className="max-w-md mx-auto mt-8 shadow-md p-6 bg-white rounded-lg">
      <h2 className="text-2xl font-bold mb-8 text-center">Login</h2>
      <form onSubmit={handleSubmit}>
        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`border ${
              errors.email ? "border-red-500" : "border-gray-300"
            } w-full px-3 py-2 rounded focus:outline-none focus:border-blue-500`}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>

        {/* Password */}
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={`border ${
              errors.password ? "border-red-500" : "border-gray-300"
            } w-full px-3 py-2 rounded focus:outline-none focus:border-blue-500`}
          />
          {errors.password && (
            <p className="text-red-500 text-xs mt-1">{errors.password}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-black hover:bg-slate-400 text-white font-bold py-2 px-4 rounded w-full"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
