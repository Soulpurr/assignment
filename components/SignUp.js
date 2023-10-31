"use client";
import React, { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function SignUp({ open, close }) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePasswordLength = (password) => {
    return password.length >= 8; // Minimum password length of 8 characters
  };

  const handleSubmit = () => {
    const errors = {};

    if (!validateEmail(email)) {
      errors.email = "Please enter a valid email address.";
      toast("Please enter a valid email address.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }

    if (!validatePasswordLength(password)) {
      errors.password = "Password should be at least 8 characters long.";
      toast("Password should be at least 8 characters long.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }

    if (password !== confirmPassword) {
      errors.confirmPassword = "Passwords do not match.";
      toast("Passwords do not match.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }

    if (Object.keys(errors).length === 0) {
      // Form submission logic here if all validations pass
      // For example, you might want to submit the form data
      console.log("Form submitted:", { email, username, password });
      toast("Success,Account created", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      close(!open)
    } else {
      setErrors(errors);
      console.log(errors);
    }
  };
  return (
    <section
      className={`${
        open ? "block" : "hidden"
      } items-start shadow-sm bg-white flex flex-col px-5 rounded-3xl sm:w-[30%] `}
    >
      <div
        className="flex justify-end w-full cursor-pointer "
        onClick={() => close(!open)}
      >
        <AiOutlineCloseCircle size={30} />
      </div>
      <header className="items-start self-center flex w-[396px] max-w-full flex-col mt-8">
        <h1 className="text-neutral-700 text-4xl self-stretch">
          Registration Form
        </h1>
        <p className="text-neutral-500 text-base mt-2.5">
          Register your account here
        </p>
      </header>
      <div className="items-start self-center flex w-[396px] max-w-full gap-1.5 mt-5 max-md:justify-center">
        <div className="bg-stone-300 self-center flex w-[187px] h-px flex-col my-auto" />
        <span className="text-neutral-700 text-base self-stretch">O</span>
        <div className="bg-stone-300 self-center flex w-[186px] h-px flex-col my-auto" />
      </div>
      <div className="items-start self-center flex w-[396px] max-w-full flex-col mt-5">
        <label
          htmlFor="email"
          className="text-neutral-700 text-sm self-start whitespace-nowrap"
        >
          Email
        </label>
        <input
          type="email"
          className="text-neutral-500 text-base justify-end items-center rounded border border-[color:var(--neutral-900,#292929)] bg-white w-full mt-1.5 px-4 py-3.5 border-solid self-start"
          placeholder="Email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label
          htmlFor="username"
          className="text-neutral-700 text-sm mt-6 self-start whitespace-nowrap"
        >
          Username
        </label>
        <input
          type="text"
          id="username"
          onChange={(e) => setUsername(e.target.value)}
          className="text-neutral-500 text-base justify-end items-center rounded border border-[color:var(--neutral-900,#292929)] bg-white w-full grow mt-2.5 px-4 py-3.5 border-solid self-start"
          placeholder="Username"
        />
      </div>
      <div className="items-start self-center flex w-[396px] max-w-full flex-col mt-5">
        <label
          htmlFor="password"
          className="text-neutral-700 text-sm self-start whitespace-nowrap"
        >
          Password
        </label>
        <div className="justify-end items-start rounded border border-[color:var(--neutral-900,#292929)] bg-white flex w-full gap-2.5 mt-2 px-4 py-3 border-solid self-start">
          <input
            
            id="password"
            type={`${showPassword?"text":"password"}`}
            onChange={(e) => setPassword(e.target.value)}
            className="text-neutral-500 text-base self-stretch outline-none max-w-[355px] grow shrink-0 basis-auto"
            placeholder="Password"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3f4831c6-8db7-480b-81f6-16ecfe6a1813?apiKey=e74082b80b2042a383841c0a6d125528&"
            className="aspect-square cursor-pointer object-contain object-center w-6 overflow-hidden self-stretch max-w-full"
            alt=""
            onClick={()=>{setShowPassword(!showPassword)}}
          />
        </div>
        <label
          htmlFor="confirmPassword"
          className="text-neutral-700 text-sm mt-6 self-start whitespace-nowrap"
        >
          Confirm Password
        </label>
        <div className="justify-end items-start rounded border border-[color:var(--neutral-900,#292929)] bg-white flex w-full gap-2.5 mt-3 px-4 py-3 border-solid self-start">
          <input
            id="confirmPassword"
            type={`${showPassword?"text":"password"}`}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="text-neutral-500 cursor-pointer text-base self-stretch outline-none max-w-[355px] grow shrink-0 basis-auto"
            placeholder="Confirm Password"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ac583126-af36-4c0c-a8c9-60b36ffe0913?apiKey=e74082b80b2042a383841c0a6d125528&"
            className="aspect-square object-contain object-center w-6 overflow-hidden self-stretch max-w-full"
            alt=""
            onClick={()=>{setShowPassword(!showPassword)}}
          />
        </div>
      </div>
      <div className="items-start self-center flex w-[396px] max-w-full flex-col mt-5">
        <button
          className="justify-center items-center self-stretch rounded bg-rose-700 hover:bg-rose-600 flex w-full flex-col px-5 py-3"
          onClick={handleSubmit}
        >
          <span className="text-white text-base self-center whitespace-nowrap">
            Iniciar sesión
          </span>
        </button>
        <a
          href="#"
          className="text-rose-700 text-center text-base underline mt-5 "
        >
          Olvidé mi contraseña
        </a>
      </div>
      <div className="items-start self-center flex w-[396px] max-w-full gap-1.5 mt-5 max-md:justify-center">
        <div className="bg-stone-300 self-center flex w-[188px] h-px flex-col my-auto" />
        <span className="text-neutral-700 text-base self-stretch">o</span>
        <div className="bg-stone-300 self-center flex w-[187px] h-px flex-col my-auto" />
      </div>
      <div className="items-center self-center flex w-[206px] max-w-full flex-col mt-5 mb-8">
        <p className="text-neutral-700 text-base self-stretch whitespace-nowrap">
          ¿Aún no tienes una cuenta?
        </p>
        <a
          href="#"
          className="text-rose-700 text-base underline self-center mt-2.5 whitespace-nowrap"
        >
          Crea una aquí
        </a>
      </div>
    </section>
  );
}

export default SignUp;
