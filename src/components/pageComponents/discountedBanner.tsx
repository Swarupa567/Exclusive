import React from "react";
import Image from "next/image";
import Utils from "@/utils";
import CustomButton from "../common/customButton";

function DiscountedBanner() {
  return (
    <div className="flex gap-4 justify-between bg-black mt-[120px] md:mx-[130px] md:pr-[90px]">
      <div></div>
      <div className="flex flex-col items-center py-[70px] gap-y-[30px] md:pr-[310px]">
        <p className="text-green-500 text-[16px] font-semibold">Categories</p>
        <h1 className="font-bold text-white text-start md:text-center text-[30px] md:text-[48px] line-clamp-2 inline-block">
          <p>Enhance Your</p>
          <p>Music Experience</p>
        </h1>
        <Image
          src={Utils?.images?.BannerTimer}
          alt="Timer"
          width={320}
          height={62}
        />
        <div className=" flex align-start">
          <CustomButton
            buttonLabel="Buy Now"
            className="text-white bg-green-400"
          />
        </div>
      </div>
      <div className="py-[80px]">
        <Image
          src={Utils?.images?.JBLCategory}
          alt="JBLCategoryIcon"
          width={600}
          height={420}
          className="hidden md:block"
        />
      </div>
    </div>
  );
}

export default DiscountedBanner;
