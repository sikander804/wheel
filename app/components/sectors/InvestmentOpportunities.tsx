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
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <div className="content-stretch grid grid-cols-1 md:grid-cols-2 gap-[12px] items-stretch relative shrink-0 w-full">
        {opportunities.map((opportunity, index) => {
          const cardColor = cardColors?.[index % cardColors.length];
          return (
            <div
              key={opportunity.id}
              className={`backdrop-blur-[15px] backdrop-filter content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-px overflow-clip p-[20px] relative rounded-[24px] shrink-0 h-full ${
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
              <div className="absolute flex h-[1204.078px] items-center justify-center right-[-776.63px] top-[0.13px] w-[1392.128px]">
                <div className="flex-none rotate-[25.562deg] scale-y-[-100%]">
                  <div className="h-[773.591px] relative w-[1173.163px]">
                    {/* <div className="absolute inset-[-25.85%_-17.05%]">
                    <Image
                      alt=""
                      src={index === 0 ? "/leaf.svg" : "/leaf.svg"}
                      width={20.163}
                      height={20.591}
                      objectFit="contain"
                      className="block max-w-none size-full"
                    />
                  </div> */}
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start min-w-[240px] overflow-clip relative shrink-0 w-full h-full justify-between">
                <div className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0 w-full">
                  <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full">
                    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
                      <div className="flex flex-[1_0_0] flex-col font-['29LT_Bukra:Bold_Italic',sans-serif] font-bold justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-white text-[16px]">
                        <p className="leading-[1.5] whitespace-pre-wrap">
                          {opportunity.title}
                        </p>
                      </div>
                      {index === 0 && (
                        <div className="overflow-clip relative shrink-0 size-[26px]">
                          <div className="absolute inset-[21.67%_1.65%_23.33%_1.66%]">
                            <Image
                              alt=""
                              src={"/leaf.svg"}
                              width={26}
                              height={26}
                              className="block max-w-none size-full"
                            />
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="backdrop-blur-[10px] backdrop-filter bg-[rgba(0,0,0,0.4)] content-stretch flex gap-[6px] items-center justify-center px-[8px] py-[5px] relative rounded-[50px] shrink-0">
                      <div className="relative shrink-0 size-[14px]">
                        <div className="absolute inset-[5.21%_9.38%]">
                          <Image
                            alt=""
                            src={"/location.svg"}
                            width={14}
                            height={14}
                            className="block max-w-none size-full"
                          />
                        </div>
                      </div>
                      <p className="font-['29LT_Bukra:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#00a7a2] text-[12px]">
                        {opportunity.location}
                      </p>
                    </div>
                  </div>
                  <p className="line-clamp-2 font-['29LT_Bukra:Regular',sans-serif] font-normal leading-[1.5] opacity-90 overflow-hidden relative shrink-0 text-[14px] text-white w-full">
                    {opportunity.description}
                  </p>
                  <div className="content-stretch flex items-center justify-between relative shrink-0 w-full mt-auto">
                    <div className="flex flex-row items-center self-stretch">
                      <div className="content-stretch flex h-full items-center relative shrink-0">
                        <div className="content-stretch flex gap-[9px] items-center relative shrink-0">
                          <div className="relative shrink-0 size-[17px]">
                            <div className="absolute inset-[5.21%]">
                              <Image
                                alt=""
                                src={"/cash.svg"}
                                width={17}
                                height={17}
                                className="block max-w-none size-full"
                              />
                            </div>
                          </div>
                          <p className="font-['29LT_Bukra:Regular',sans-serif] font-normal leading-[1.5] opacity-80 relative shrink-0 text-white text-[12px]">
                            Investment Size:
                          </p>
                          <p className="font-['29LT_Bukra:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-white text-[14px]">
                            {opportunity.investmentSize}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-[rgba(0,0,0,0.3)] border border-[rgba(255,255,255,0.42)] border-solid content-stretch flex items-center justify-center relative rounded-[28.923px] shrink-0 size-[32px]">
                      <div className="relative shrink-0 size-[20.143px]">
                        <div className="absolute inset-[21.86%_21.88%_21.87%_21.87%]">
                          <Image
                            alt=""
                            src={"/arrow-right-up.svg"}
                            width={20.143}
                            height={20.143}
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
      <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
        <div className="bg-[rgba(255,255,255,0.3)] flex-[1_0_0] h-px min-h-px min-w-px shrink-0" />
        <p className="font-['29LT_Bukra:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-white text-[16px] text-center">
          View More
        </p>
        <div className="bg-[rgba(255,255,255,0.3)] flex-[1_0_0] h-px min-h-px min-w-px shrink-0" />
      </div>
    </div>
  );
}
