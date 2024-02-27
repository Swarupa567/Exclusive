import React from "react";
import Images from "@/utils/images";
import Image from "next/image";

function Services() {
  const Services = [
    {
      ImgUrl: Images?.ServiceOne,
      header: "FREE AND FAST DELIVERY",
      description: "Free delivery for all orders over $140",
    },
    {
      ImgUrl: Images?.ServiceTwo,
      header: "24/7 CUSTOMER SERVICE",
      description: "Friendly 24/7 customer support",
    },
    {
      ImgUrl: Images?.ServiceThree,
      header: "MONEY BACK GUARANTEE",
      description: "We return money within 30 days",
    },
  ];
  return (
    <div className="px-4 md:px-[248px] mt-[40px] mb-[25px] md:mt-[50px] flex md:gap-[88px]">
      {Services?.map((service: any, index: number) => {
        return (
          <div key={index} className="flex flex-col items-center">
            <Image
              src={service?.ImgUrl}
              alt="serviceImage"
              width={80}
              height={80}
            />
            <h2 className="pt-[24px] font-semibold text-center text-[15px] md:text-[20px]">
              {service?.header}
            </h2>
            <p className="pt-3 text-center">{service?.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Services;
