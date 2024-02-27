import React from "react";
import Image from "next/image";
import Images from "@/utils/images";
import Product from "@/components/common/product";
import CustomButton from "@/components/common/customButton";

function FlashSales() {
  return (
    <div className="px-4 md:px-[130px] mt-[150px]">
      <div className="flex gap-4 items-center">
        <Image
          src={Images.Title_Icon}
          alt="title-icon"
          width={20}
          height={40}
        />
        <p className="text-[16px] font-semibold">Today's</p>
      </div>
      <div className="flex justify-between pt-[24px] items-center">
        <p className="text-[28px] md:text-[36px] font-semibold">Flash Sales</p>
        <div className="flex gap-2 cursor-pointer">
          <Image
            src={Images.Arrow_Left}
            alt="arrow-left"
            width={24}
            height={24}
            className="rounded-full bg-gray-100 w-6 h-6 p-1 flex justify-center items-center cursor-pointer"
          />
          <Image
            src={Images.Arrow_Right_Black}
            alt="arrow-right"
            width={24}
            height={24}
            className="rounded-full bg-gray-100 w-6 h-6 p-1 flex justify-center items-center cursor-pointer"
          />
        </div>
      </div>
      <div className="flex gap-[30px] overflow-hidden pt-[24px] pb-[60px]">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item: any, index: any) => {
          return <Product />;
        })}
      </div>
      <CustomButton
        buttonLabel="View All Products"
        className=" text-center pt-[60px]"
      />
    </div>
  );
}

export default FlashSales;
