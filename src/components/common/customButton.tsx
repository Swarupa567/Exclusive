import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  buttonLabel: string;
}

const CustomButton = ({ buttonLabel, ...props }: ButtonProps) => {
  return (
    <div className="flex items-center justify-center">
      <div
        className={cn(
          "text-white bg-red-500 p-4 px-10 rounded-md mx-auto text-[16px] font-semibold cursor-pointer"
        )}
      >
        {buttonLabel}
      </div>
    </div>
  );
};

export default CustomButton;
