import React from "react";
import Image from "next/image";
import Utils from "@/utils";
import CustomButton from "../common/customButton";
import Product from "../common/product";

function BestSellingProducts() {
  return (
    <div className="mt-[70px] px-4 md:px-[130px]">
      <div className="flex gap-4 items-center mt-[70px]">
        <Image
          src={Utils?.images?.Title_Icon}
          alt="title-icon"
          width={20}
          height={40}
        />
        <p className="text-[16px] font-semibold">This Month</p>
      </div>
      <div className="flex justify-between pt-[24px] items-center">
        <p className="text-[28px] md:text-[36px] font-semibold">
          Browse By Category
        </p>
        <div>
          <CustomButton buttonLabel="View All" />
        </div>
      </div>
      <div className="flex gap-4 overflow-hidden justify-between pt-8">
        {[1, 2, 3, 4, 5].map((item: any, index: any) => {
          return <Product />;
        })}
      </div>
    </div>
  );
}

export default BestSellingProducts;
