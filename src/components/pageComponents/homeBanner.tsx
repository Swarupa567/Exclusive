import Image from "next/image";
import React from "react";
import images from "@/utils/images";
import AccordionMenu from "./accordionMenu";
function HomeBanner() {
  return (
    <div className="flex justify-between w-full mt-8 md:px-[130px]">
      <AccordionMenu />
      <div className="text-white bg-black flex justify-around py-[64px] px-0 md:px-[58px] w-[1236px]">
        <div className="gap-y-[20px] flex flex-col pt-[50px]">
          <div className="flex items-center gap-4">
            <Image
              src={images.Apple_Icon}
              alt="apple-icon"
              width={40}
              height={49}
            />
            <p>Iphone 14 Series</p>
          </div>
          <div className="inline-block">
            <p className="md:text-[48px] text-[30px] font-semibold line-clamp-2">
              Up to 10%
            </p>
            <p className="md:text-[48px] text-[30px] font-semibold line-clamp-2">
              {" "}
              off Voucher
            </p>
          </div>
          <div className="flex gap-2 cursor-pointer">
            <p className="underline">Shop Now</p>

            <Image
              src={images.Arrow_Right}
              alt="apple-icon"
              width={24}
              height={24}
            />
          </div>
        </div>
        {/* <Image
          src={images.Iphone}
          alt="phone"
          width={496}
          height={352}
          className="hidden md:block"
          priority
        /> */}
      </div>
    </div>
  );
}

export default HomeBanner;
