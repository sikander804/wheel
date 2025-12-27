import Image from "next/image";
import { KeyNumber } from "./types";

interface KeyNumbersProps {
  numbers: KeyNumber[];
}

export default function KeyNumbers({ numbers }: KeyNumbersProps) {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      {numbers.map((number) => (
        <div
          key={number.id}
          className="backdrop-blur-[15px] backdrop-filter bg-gradient-to-b from-[28.132%] from-[rgba(0,0,0,0.4)] gap-[16px] items-start p-[16px] relative rounded-[24px] shrink-0 w-full flex flex-col to-[rgba(0,0,0,0)]"
        >
          <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
            <div
              className="content-stretch flex items-center justify-center overflow-clip relative rounded-[60px] shrink-0 size-[24px]"
              style={{ backgroundColor: number.iconColor }}
            >
              <div className="overflow-clip relative shrink-0 size-[12.8px]">
                <Image
                  alt=""
                  src={number.iconUrl}
                  width={12.8}
                  height={12.8}
                  className="block max-w-none size-full"
                />
              </div>
            </div>
            <div className="flex flex-col font-['29LT_Bukra:Bold_Italic',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-white text-[22px] whitespace-nowrap">
              <p className="leading-[normal]">{number.value}</p>
            </div>
          </div>
          <p className="font-['29LT_Bukra:Regular',sans-serif] font-normal leading-[1.5] opacity-80 relative shrink-0 text-[14px] text-white w-full whitespace-pre-wrap">
            {number.description}
          </p>
        </div>
      ))}
    </div>
  );
}
