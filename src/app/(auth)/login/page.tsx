import CustomButton from "@/components/common/customButton";
import Link from "next/link";
import React from "react";

function Login() {
  return (
    <div className="flex flex-col">
      <h1>LogIn to Exclusive</h1>
      <p>Enter your details below</p>
      <div className="flex flex-col">
        <input type="text" placeholder="Email or Phone Number" />
        <input type="password" placeholder="Password" />
      </div>
      <div className="flex justify-between">
        <CustomButton buttonLabel="LogIn" />
        <Link href="#" className="text-red-500">
          Forgot Password ?
        </Link>
        d
      </div>
    </div>
  );
}

export default Login;
