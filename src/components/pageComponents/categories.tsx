"use client";
import React from "react";
import Image from "next/image";
import Utils from "@/utils/images";

function Categories() {
  const CategoryImages = [
    {
      ImgUrl: Utils?.PhoneCategory,
      hoveredIcon: Utils?.HoveredPhoneCategory,
      alt: "phonecategory",
      description: "Phones",
    },
    {
      ImgUrl: Utils?.Computers,
      hoveredIcon: Utils?.HoveredComputer,
      alt: "computercategory",
      description: "Computers",
    },
    {
      ImgUrl: Utils?.SmartWatch,
      hoveredIcon: Utils?.HoveredSmartWatch,
      alt: "watchcategory",
      description: "SmartWatch",
    },
    {
      ImgUrl: Utils?.Camera,
      hoveredIcon: Utils?.HoveredCamera,
      alt: "cameracategory",
      description: "Camera",
    },
    {
      ImgUrl: Utils?.HeadPhone,
      hoveredIcon: Utils?.HoveredHeadPhone,
      alt: "AudioCategory",
      description: "HeadPhones",
    },
    {
      ImgUrl: Utils?.GameWatch,
      hoveredIcon: Utils?.HoveredGamePad,
      alt: "gamingCategory",
      description: "Gaming",
    },
    {
      ImgUrl: Utils?.PhoneCategory,
      hoveredIcon: Utils?.HoveredPhoneCategory,
      alt: "phonecategory",
      description: "Phones",
    },
    {
      ImgUrl: Utils?.Computers,
      hoveredIcon: Utils?.HoveredComputer,
      alt: "computercategory",
      description: "Computers",
    },
    {
      ImgUrl: Utils?.SmartWatch,
      hoveredIcon: Utils?.HoveredSmartWatch,
      alt: "watchcategory",
      description: "SmartWatch",
    },
  ];
  const handleLeftClick = () => {
    window.scrollBy({ left: -300, behavior: "smooth" });
  };

  const handleRightClick = () => {
    window.scrollBy({ left: 300, behavior: "smooth" });
  };
  return (
    <div className=" px-4 md:px-[130px] mt-[70px]">
      <hr className="border-1 border-gray-100" />
      <div className="flex gap-4 items-center mt-[70px]">
        <Image
          src={Utils?.Title_Icon}
          alt="title-icon"
          width={20}
          height={40}
        />
        <p className="text-[16px] font-semibold">Categories</p>
      </div>
      <div className="flex justify-between pt-[24px] items-center">
        <p className="text-[28px] md:text-[36px] font-semibold">
          Browse By Category
        </p>
        <div className="flex gap-2 cursor-pointer">
          <Image
            src={Utils?.Arrow_Left}
            alt="arrow-left"
            width={24}
            height={24}
            className="rounded-full bg-gray-100 w-6 h-6 p-1 flex justify-center items-center cursor-pointer"
            onClick={handleLeftClick}
          />
          <Image
            src={Utils?.Arrow_Right_Black}
            alt="arrow-right"
            width={24}
            height={24}
            className="rounded-full bg-gray-100 w-6 h-6 p-1 flex justify-center items-center cursor-pointer"
            onClick={handleRightClick}
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 pt-6 overflow-hidden">
        {CategoryImages?.map((image: any, index: number) => {
          return (
            <div
              key={index}
              className="cursor-pointer group border-2 border-gray-200 w-[170px] h-[145px] hover:bg-red-500 flex flex-col items-center hover:text-white justify-center px-8"
            >
              <Image
                src={image?.ImgUrl}
                alt={image?.alt}
                width={56}
                height={56}
                className="flex items-center justify-center group-hover:hidden"
              />
              <Image
                src={image?.hoveredIcon}
                alt={image?.alt}
                width={56}
                height={56}
                className=" items-center justify-center hidden group-hover:block"
              />
              <p className="text-center ">{image?.description}</p>
            </div>
          );
        })}
      </div>
      <hr className="border-gray-100 border-b-2 mt-[70px]" />
    </div>
  );
}

export default Categories;
