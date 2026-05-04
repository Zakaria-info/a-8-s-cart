"use client";

import { Suspense } from "react";
import LoginForm from "./LoginForm";

const LoginPage = () => {
  return (
    <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-orange-200">
      <Suspense fallback={<div>Loading...</div>}>
        <LoginForm />
      </Suspense>
    </div>
  );
};

export default LoginPage;
