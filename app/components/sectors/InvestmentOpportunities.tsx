import Image from "next/image";
import { InvestmentOpportunity } from "./types";

interface InvestmentOpportunitiesProps {
  opportunities: InvestmentOpportunity[];
  cardColors?: string[];
}

export default function InvestmentOpportunities({
  opportunities,
  cardColors,
}: InvestmentOpportunitiesProps) {
  return (
    <div className="content-stretch flex flex-col gap-2 items-start relative shrink-0 w-full">
      <div className="content-stretch grid grid-cols-1 sm:grid-cols-2 gap-2 items-stretch relative shrink-0 w-full">
        {opportunities.map((opportunity, index) => {
          const cardColor = cardColors?.[index % cardColors.length];
          return (
            <div
              key={opportunity.id}
              className={`backdrop-blur-[15px] backdrop-filter content-stretch flex flex-[1_0_0] flex-col gap-3 items-start min-h-px min-w-px overflow-clip p-3 relative rounded-xl shrink-0 h-full ${
                !cardColor ? "bg-[rgba(0,0,0,0.5)]" : ""
              }`}
              style={
                cardColor
                  ? {
                      background: `linear-gradient(180deg, rgba(0,0,0,0) 0%, ${cardColor} 100%)`,
                    }
                  : undefined
              }
            >
              <div className="content-stretch flex flex-col items-start min-w-[160px] overflow-clip relative shrink-0 w-full h-full justify-between">
                <div className="content-stretch flex flex-col gap-2 items-start relative shrink-0 w-full">
                  <div className="content-stretch flex flex-col gap-1.5 items-start relative shrink-0 w-full">
                    <div className="content-stretch flex gap-1.5 items-center relative shrink-0 w-full">
                      <div className="flex flex-[1_0_0] flex-col font-['29LT_Bukra:Bold_Italic',sans-serif] font-bold justify-center leading-[1.2] min-h-px min-w-px relative shrink-0 text-white text-xs">
                        <p className="whitespace-pre-wrap">
                          {opportunity.title}
                        </p>
                      </div>
                      {index === 0 && (
                        <div className="overflow-clip relative shrink-0 size-[16px]">
                          <div className="absolute inset-0">
                            <Image
                              alt=""
                              src={"/leaf.svg"}
                              width={16}
                              height={16}
                              className="block max-w-none size-full"
                            />
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="backdrop-blur-[10px] backdrop-filter bg-[rgba(0,0,0,0.4)] content-stretch flex gap-1 items-center justify-center px-2 py-1 relative rounded-full shrink-0">
                      <div className="relative shrink-0 size-[10px]">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Image
                            alt=""
                            src={"/location.svg"}
                            width={10}
                            height={10}
                            className="block max-w-none size-full"
                          />
                        </div>
                      </div>
                      <p className="font-['29LT_Bukra:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#00a7a2] text-[9px]">
                        {opportunity.location}
                      </p>
                    </div>
                  </div>
                  <p className="line-clamp-3 font-['29LT_Bukra:Regular',sans-serif] font-normal leading-[1.4] opacity-90 overflow-hidden relative shrink-0 text-[10px] text-white w-full">
                    {opportunity.description}
                  </p>
                  <div className="content-stretch flex items-center justify-between relative shrink-0 w-full mt-auto pt-1.5">
                    <div className="flex flex-row items-center self-stretch">
                      <div className="content-stretch flex h-full items-center relative shrink-0">
                        <div className="content-stretch flex gap-1 items-center relative shrink-0">
                          <div className="relative shrink-0 size-[12px]">
                            <div className="absolute inset-0">
                              <Image
                                alt=""
                                src={"/cash.svg"}
                                width={12}
                                height={12}
                                className="block max-w-none size-full"
                              />
                            </div>
                          </div>
                          <div className="flex flex-col">
                            <p className="font-['29LT_Bukra:Regular',sans-serif] font-normal leading-[1.2] opacity-80 relative shrink-0 text-white text-[8px]">
                              Investment Size:
                            </p>
                            <p className="font-['29LT_Bukra:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-white text-[10px]">
                              {opportunity.investmentSize}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-[rgba(0,0,0,0.3)] border border-[rgba(255,255,255,0.42)] border-solid content-stretch flex items-center justify-center relative rounded-full shrink-0 size-[24px]">
                      <div className="relative shrink-0 size-[12px]">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Image
                            alt=""
                            src={"/arrow-right-up.svg"}
                            width={12}
                            height={12}
                            className="block max-w-none size-full"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="content-stretch flex gap-3 items-center relative shrink-0 w-full mt-1">
        <div className="bg-[rgba(255,255,255,0.3)] flex-[1_0_0] h-px min-h-px min-w-px shrink-0" />
        <p className="font-['29LT_Bukra:Regular',sans-serif] font-normal leading-normal relative shrink-0 text-white text-[10px] text-center">
          View More
        </p>
        <div className="bg-[rgba(255,255,255,0.3)] flex-[1_0_0] h-px min-h-px min-w-px shrink-0" />
      </div>
    </div>
  );
}
