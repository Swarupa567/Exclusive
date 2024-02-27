import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../ui/accordion";
import { Header } from "@/types/site";

const AccordionMenu = ({ className }: { className?: string }) => {
  return (
    <div className="border-r-2 border-gray-100 pr-[53px] hidden lg:block">
      {Header?.Accordion?.map((item: any, index: any) => (
        <Accordion key={index} type="multiple">
          <AccordionItem value={index}>
            <AccordionTrigger>{item?.title}</AccordionTrigger>
            <AccordionContent>{item?.title}</AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </div>
  );
};

export default AccordionMenu;
