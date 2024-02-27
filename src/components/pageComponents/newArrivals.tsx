"use client";
import React from "react";
import Image from "next/image";
import Images from "@/utils/images";
import Services from "./services";
import "@/styles/globals.css";

function NewArrivals() {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="mt-[120px] px-4 md:px-[130px]">
      <div className="flex gap-4 items-center">
        <Image
          src={Images.Title_Icon}
          alt="title-icon"
          width={20}
          height={40}
        />
        <p className="text-[16px] font-semibold">Featured</p>
      </div>
      <div className=" pt-[24px] items-center">
        <p className="text-[36px] font-semibold">New Arrival</p>
      </div>
      <div className="flex flex-col md:flex-row gap-4 pt-[28px]">
        <div className=" text-white">
          <Image
            src={Images.NewArrivalOne}
            alt="newarrivalProductOne"
            width={770}
            height={700}
            className="bg-black h-[614px]"
            priority
          />
          <div className=" pl-[47px] relative bottom-[12rem]">
            <h2 className="text-[24px] text-white font-semibold">
              PlayStation 5
            </h2>
            <p className="text-[14px] text-white pt-[12px]">
              Black and White version of the PS5 coming out on sale.
            </p>
            <p className="underline text-[16px] text-white pt-[12px] cursor-pointer">
              Shop Now
            </p>{" "}
          </div>
        </div>
        <div className="flex flex-col gap-4 text-white mb-8 md:mb-0 -mt-24 md:mt-0">
          {/* <div className="flex gap-4 bg-black text-white h-[281px]">
            <div className="pl-[24px] flex flex-col relative bottom-8 justify-end">
              <h2 className="text-[24px] font-semibold">Women's Collections</h2>
              <p className="text-[14px] pt-[12px]">
                Featured woman collections that give you another vibe.{" "}
              </p>
              <p className="underline text-[16px] pt-[12px] cursor-pointer">
                Shop Now
              </p>
            </div>
            <Image
              src={Images.NewArrivalTwo}
              alt="newarrivalProductTwo"
              width={770}
              height={84}
              className="hidden md:block"
            />
          </div> */}
          <div className="flex gap-4 text-white">
            <div className="setImage">
              <Image
                src={Images.NewArrivalThree}
                alt="newarrivalProductThree"
                width={470}
                height={284}
                className="bg-black setImage"
              />
              <div className="flex flex-col justify-end items-center relative bottom-[10rem]">
                <h2 className="text-[24px] text-white font-semibold">
                  Speakers
                </h2>
                <p className="text-[14px] text-center md:text-start text-white pt-[12px]">
                  Amazon wireless speakers.
                </p>
                <p className="underline text-[16px] text-white pt-[12px] cursor-pointer">
                  Shop Now
                </p>{" "}
              </div>
            </div>
            <div className="setImage">
              <Image
                src={Images.NewArrivalFour}
                alt="newarrivalProductFour"
                width={470}
                height={284}
                className="bg-black setImage"
              />
              <div className=" flex flex-col justify-end items-center relative bottom-[10rem]">
                <h2 className="text-[24px] text-white font-semibold">
                  Perfume
                </h2>
                <p className="text-[14px] text-white pt-[12px] text-center md:text-start">
                  GUCCI INTENSE OUD EDP
                </p>
                <p className="underline text-[16px] text-white pt-[12px] cursor-pointer">
                  Shop Now
                </p>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Services /> */}
      <Image
        src={Images?.ArrowUpIcon}
        alt="arrowUpIcon"
        width={46}
        height={46}
        className="float-right mb-6 cursor-pointer"
        onClick={handleClick}
      />
    </div>
  );
}

export default NewArrivals;
