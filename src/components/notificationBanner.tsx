import React, { createContext } from "react";

function NotificationBanner() {
  return (
    <div className="bg-black text-white h-[48px]  flex justify-center w-full  items-center ">
      <div className="flex gap-4 text-[10px] md:text-[14px] p-[12px] md:p-0">
        <p>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </p>
        <p className="font-poppins font-semibold underline cursor-pointer text-[13px] md:text-[14px] items-center">
          ShopNow
        </p>
      </div>
    </div>
  );
}

export default NotificationBanner;
