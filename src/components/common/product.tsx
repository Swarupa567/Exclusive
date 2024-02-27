import React from "react";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Utils from "@/utils";

const Product = () => {
  return (
    <div>
      <div>
        <Card>
          <div className="flex justify-between">
            <p className="bg-red-600 text-white w-[20%] rounded-md m-3 text-center h-[27px]">
              -40%
            </p>
            <div className="flex flex-col gap-2 m-1">
              <Image
                src={Utils?.images?.wishlist}
                alt="wishlistIcon"
                width={34}
                height={34}
                className="cursor-pointer"
              />
              <Image
                src={Utils?.images?.showIcon}
                alt="wishlistIcon"
                width={34}
                height={34}
                className="cursor-pointer"
              />
            </div>
          </div>
          <Image
            src={Utils?.images?.ProductOne}
            alt="productImage"
            width={170}
            height={180}
            className="relative left-10 bottom-10"
          />
          <div className="group relative">
            <div className="text-white bg-black text-center relative bottom-6 rounded-md p-2 text-[16px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Add To Cart
            </div>
          </div>
        </Card>
        <p className="font-bold text-[16px] pt-6">HAVIT HV-G92 Gamepad</p>
        <div className="flex gap-4 pt-4">
          <p className="text-red-600 font-semibold ">$120</p>
          <p className="line-through text-gray-400">$160</p>
        </div>
        <div className="flex pt-3 gap-2">
          <Image
            src={Utils?.images?.FilledRating}
            alt="ratings"
            width={100}
            height={20}
          />{" "}
          <p className="text-gray-400">(88)</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
