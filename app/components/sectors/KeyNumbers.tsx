import Image from "next/image";
import { KeyNumber } from "./types";

interface KeyNumbersProps {
  numbers: KeyNumber[];
}

export default function KeyNumbers({ numbers }: KeyNumbersProps) {
  return (
    <div className="content-stretch flex flex-col gap-1 items-start relative shrink-0 w-full h-full">
      {numbers.map((number) => (
        <div
          key={number.id}
          className="backdrop-blur-[15px] backdrop-filter bg-gradient-to-b from-[28.132%] from-[rgba(0,0,0,0.4)] gap-1 items-start p-3 relative rounded-xl shrink-0 w-full flex flex-col to-[rgba(0,0,0,0)]"
        >
          <div className="content-stretch flex gap-2 items-center relative shrink-0 w-full">
            <div
              className="content-stretch flex items-center justify-center overflow-clip relative rounded-full shrink-0 size-5"
              style={{ backgroundColor: number.iconColor }}
            >
              <div className="overflow-clip relative shrink-0 size-2.5">
                <Image
                  alt=""
                  src={number.iconUrl}
                  width={10}
                  height={10}
                  className="block max-w-none size-full"
                />
              </div>
            </div>
            <div className="flex flex-col font-['29LT_Bukra:Bold_Italic',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-white text-sm whitespace-nowrap">
              <p className="leading-[normal]">{number.value}</p>
            </div>
          </div>
          <p className="font-['29LT_Bukra:Regular',sans-serif] font-normal leading-tight opacity-80 relative shrink-0 text-[0.7rem] text-white w-full whitespace-pre-wrap">
            {number.description}
          </p>
        </div>
      ))}
    </div>
  );
}
