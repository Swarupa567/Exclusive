import React from "react";
import CustomButton from "../common/customButton";
import Link from "next/link";

function SignUp() {
  return (
    <div className="flex flex-col gap-8 items-center justify-center">
      <h1 className="text-[36px] font-medium">Create an Account</h1>
      <p className="pt-[24px]">Enter your details below</p>
      <div className="flex flex-col gap-4">
        <input placeholder="Name" type="text" />
        <input placeholder="Email or Phone Number" type="text" />
        <input placeholder="Password" type="password" />
      </div>
      <CustomButton buttonLabel="Create an account" />

      <p>Already have an account</p>
      <Link href="#" className="underline">
        LogIn
      </Link>
    </div>
  );
}

export default SignUp;
