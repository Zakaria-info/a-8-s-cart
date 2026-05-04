"use client";

import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

const LoginPage = () => {

     const {
    register,
    handleSubmit, formState: { errors }
  } = useForm()



  const handleLogin = (data) => {
    console.log(data, "data");
  };

  return (
    <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-orange-200">
      <div className="p-4 rounded-xl bg-white">
        <h2 className="font-bold text-3xl text-center mb-8">
          Login Your Account
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit(handleLogin)}>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email</legend>
            <input
              
              type="email"
              className="input"
              placeholder="Type here email"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (<p className="text-red-500 mt-1">{errors.email.message}</p>
            )}
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Password</legend>
            <input
              
              type="password"
              className="input"
              placeholder="Type here password"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && (<p className="text-red-500 mt-1">{errors.password.message}</p>
            )}
          </fieldset>
          <button className="btn w-full bg-orange-400 text-white">Login</button>
        </form>
        <p className="text-center mt-4">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="text-orange-500 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
