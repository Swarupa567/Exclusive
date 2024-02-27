import React from "react";
import { FooterData } from "@/types/site";
import Image from "next/image";
import Utils from "@/utils";
import Link from "next/link";

function Footer() {
  return (
    <React.Fragment>
      <div className="bg-black text-white md:px-[135px] pt-[80px] pb-[30px] flex text-center md:text-start items-center md:items-start md:flex-row flex-col gap-4 justify-between">
        {FooterData?.Footer?.map((item: any, index: number) => {
          const storeItems = item?.StoreItems;
          const hasStoreItems = storeItems && storeItems.length > 0;
          const firstItemImage = hasStoreItems ? storeItems[0] : null;
          const remainingImages = hasStoreItems ? storeItems.slice(1) : [];
          const hasSocialIcons = item?.Icons && item?.Icons.length > 0;
          const SocialIcons = hasSocialIcons ? item?.Icons : null;
          const hasEmail = item?.Email && item?.Email.length > 0;
          const emailInput = hasEmail ? item?.Email[0] : null;

          return (
            <div className="flex flex-col" key={index}>
              <p className="text-[20px] font-medium">{item?.title}</p>
              <div className="flex flex-col gap-y-[16px] pt-[24px] ">
                {item?.items?.map((footerItem: any, itemIndex: number) => (
                  <div key={itemIndex}>
                    <Link href={footerItem?.link}>
                      <p className="text-[16px]" key={itemIndex}>
                        {footerItem?.title}
                      </p>
                    </Link>
                  </div>
                ))}

                <div className="flex">
                  {firstItemImage && (
                    <img
                      key={0}
                      src={firstItemImage.ImgUrl}
                      alt="PlayStoreIcons"
                      width={80}
                      height={80}
                    />
                  )}
                  <div className="flex flex-col gap-[10px]">
                    {remainingImages.map(
                      (storeItem: any, storeIndex: number) => (
                        <img
                          key={storeIndex}
                          src={storeItem.ImgUrl}
                          alt="PlayStoreIcons"
                          width={0}
                          height={0}
                          className="w-full h-auto ml-2"
                        />
                      )
                    )}
                  </div>
                </div>
                {/* <div className="flex gap-[24px]">
                  {SocialIcons &&
                    SocialIcons.map((icon: any, iconIndex: number) => (
                      <img
                        key={iconIndex}
                        src={icon.ImgUrl}
                        alt="SocialIcon"
                        width={24}
                        height={24}
                      />
                    ))}
                </div> */}
                {hasEmail && (
                  <div className="flex relative -mt-10">
                    <input
                      type="text"
                      placeholder={emailInput.placeholder}
                      className="w-full h-auto mt-4 px-2 py-3 border border-gray-300 text-[16px] rounded-md bg-black text-gray-100"
                    />
                    <img
                      src={emailInput?.ImgUrl}
                      alt="SendIcon"
                      width={24}
                      height={24}
                      className="relative right-8 top-[6px]"
                    />
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <hr className="border-1 border-gray-300" />
      <div className="flex gap-2 pt-[30px] bg-black items-center text-gray-100 justify-center pb-[26px]">
        <Image
          src={Utils?.images?.CopyRightIcon}
          alt="copyrightIcon"
          width={20}
          height={20}
        />
        <p>Copyright Exclusive 2024. All right reserved</p>
      </div>
    </React.Fragment>
  );
}

export default Footer;
