import { cn } from "@/utils/utils";
import React from "react";

interface SectionHeadingProps {
  title: React.ReactNode;
  subtitle: string;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

const SectionHeading = ({ title, subtitle, titleClassName, subtitleClassName, className }: SectionHeadingProps) => {
  return (
    <div className={cn("flex flex-col items-center my-12 ", className)}>
      <h1 className={cn("font-serif text-[2.5rem] md:text-[4rem] leading-none font-bold text-orange-600", titleClassName)} style={{lineHeight:1}}>
        {title}
      </h1>
      <h2 className={cn("text-base md:text-md font-medium text-gray-500 mt-4 max-w-xl", subtitleClassName)}>
        {subtitle}
      </h2>
    </div>
  );
};

export default SectionHeading;
