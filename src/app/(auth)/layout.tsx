import React from "react";
import images from "@/utils/images";

interface AuthLayoutProps {
  children: React.ReactNode;
}

function Authlayout({ children }: AuthLayoutProps) {
  return (
    <div className="flex gap-4 items-center justify-between">
      <img
        src={images?.layoutImage}
        alt="layoutimage"
        width={805}
        height={781}
      />
      {children}
    </div>
  );
}

export default Authlayout;
