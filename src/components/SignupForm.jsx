import React, { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const SignupForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConPassword, setShowConPassword] = useState(false);
  const [accountType, setAccountType] = useState("student");

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    if (formData.password != formData.confirmPassword) {
      console.log(formData.password, formData.confirmPassword);
      toast.error("Passwords do not match");
      return;
    }
    setIsLoggedIn(true);
    toast.success("Account created Successfully");
    navigate("/dashboard");
    console.log(formData);
  }

  return (
    <div>
      {/* student- Instructor tab */}
      <div className="flex bg-richblack-800 p-1 my-6 gap-x-1 rounded-full max-w-max">
        <button
          onclick={() => setAccountType("student")}
          className={`${
            accountType === "student"
              ? "bg-richblack-900 text-richblack-5"
              : "bg-transparent text-richblack-200"
          } py-2 px-5 rounded-full transition-all duration-200`}
        >
          Student
        </button>
        <button
          
          onclick={() => setAccountType("instructor")}
          className={`${
            accountType === "instructor"
              ? "bg-richblack-900 text-richblack-5"
              : "bg-transparent text-richblack-200 "
          } py-2 px-5 rounded-full transition-all duration-200`}
        >
          Instructor
        </button>
      </div>

      <form onSubmit={submitHandler}>
        {/* First name and Last name */}
        <div className="flex gap-x-4 my-4">
          <label className="w-full">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              First Name<sup className="text-pink-200">*</sup>
            </p>
            <input
              type="text"
              required
              name="firstname"
              onChange={changeHandler}
              value={FormData.firstname}
              placeholder="Enter first name"
              className="bg-richblack-800 rounded-[0.5rem] w-full p-[12px] text-richblack-5"
            />
          </label>

          <label className="w-full">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Last name <sup className="text-pink-200">*</sup>
            </p>
            <input
              type="text"
              required
              name="lastname"
              onChange={changeHandler}
              value={formData.lastname}
              placeholder="Enter last name"
              className="bg-richblack-800 rounded-[0.5rem] w-full p-[12px] text-richblack-5"
            />
          </label>
        </div>

        {/* email */}
        <label className="w-full mt-4">
          <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
            Email Adress <sup className="text-pink-200">*</sup>
          </p>
          <input
            type="email"
            required
            name="email"
            onChange={changeHandler}
            value={formData.email}
            placeholder="Enter email address"
            className="bg-richblack-800 rounded-[0.5rem] w-full p-[12px] text-richblack-5"
          />
        </label>

        {/* create password and confirm password */}
        <div className="flex gap-x-4 mt-4">
          <label className="w-full relative">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Create Password
              <sup className="text-pink-200">*</sup>
            </p>

            <input
              type={showPassword ? "text" : "password"}
              required
              placeholder="Enter Password"
              onChange={changeHandler}
              value={formData.password}
              name="password"
              className="bg-richblack-800 rounded-[0.5rem] w-full p-[12px] text-richblack-5"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-[38px] cursor-pointer z-10"
            >
              {showPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>

          <label htmlFor="" className="w-full relative">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Confirm Password
              <sup className="text-pink-200">*</sup>
            </p>

            <input
              type={showConPassword ? "text" : "password"}
              required
              placeholder="Confirm Password"
              onChange={changeHandler} 
              value={formData.confirmPassword}
              name="confirmPassword"
              className="bg-richblack-800 rounded-[0.5rem] w-full p-[12px] text-richblack-5"
            />

            <span
              onClick={() => setShowConPassword(!showConPassword)}
              className="absolute right-3 top-[38px] cursor-pointer z-10"
            >
              {showConPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>
        </div>

        <button className="bg-yellow-50 py-[8px] px-[12px] rounded-[8px] mt-10 font-medium text-richblack-900 w-full">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
