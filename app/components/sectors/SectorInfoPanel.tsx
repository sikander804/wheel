import Image from "next/image";
import KeyNumbers from "./KeyNumbers";
import InvestmentOpportunities from "./InvestmentOpportunities";
import { SectorData } from "./types";

interface SectorInfoPanelProps {
  data: SectorData;
}

export default function SectorInfoPanel({ data }: SectorInfoPanelProps) {
  return (
    <div className="z-100 bg-[rgba(0,0,0,0.4)] border-2 border-[#009893] border-solid flex flex-col items-start relative rounded-[24px] shrink-0 w-full lg:max-w-[693px]">
      <div className="backdrop-blur-[15px] overflow-hidden  content-stretch flex flex-col items-start rounded-[24px] pb-[20px] pt-[40px] px-[40px] relative shrink-0 w-full">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-[30px] items-start relative shrink-0 w-full">
            <div className="content-stretch flex flex-col gap-[12px] items-start leading-[1.5] relative shrink-0 text-white w-full">
              <p className="font-['29LT_Bukra:Bold_Italic',sans-serif] font-bold relative shrink-0 text-[24px] text-center">
                {data.name}
              </p>
              <p className="font-['29LT_Bukra:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[16px] text-shadow-[0px_1px_2px_rgba(0,0,0,0.32)] w-[min-content] whitespace-pre-wrap">
                {data.description}
              </p>
            </div>
            <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0 w-full">
              <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative shrink-0">
                  <p className="font-['29LT_Bukra:Bold_Italic',sans-serif] font-bold leading-[1.5] relative shrink-0 text-white text-[18px] text-center">
                    National Industrial Strategy
                  </p>
                  <div className="backdrop-blur-[5px] backdrop-filter bg-gradient-to-b content-stretch flex flex-col from-[28.132%] from-[rgba(0,0,0,0.4)] items-start p-[16px] relative rounded-[24px] shrink-0 to-[rgba(0,0,0,0)] w-full">
                    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                      <div className="content-stretch flex items-center relative shrink-0 w-full">
                        <div className="h-[75.8px] relative shrink-0 w-[73.232px]">
                          <Image
                            alt=""
                            src={"/logo.svg"}
                            width={73.232}
                            height={75.8}
                            unoptimized
                            className="block max-w-none size-full"
                          />
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full">
                        <p className="font-['29LT_Bukra:Regular',sans-serif] font-normal leading-[1.5] opacity-80 relative shrink-0 text-[14px] text-white w-full whitespace-pre-wrap">
                          {data.strategyDescription}
                        </p>
                      </div>
                      <div className="bg-[#00a7a2] content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[12px] relative rounded-[32px] shadow-[0px_2px_29.9px_0px_rgba(0,0,0,0.25)] shrink-0">
                        <p className="font-['29LT_Bukra:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-white text-[14px]">
                          Download Strategy
                        </p>
                        <div className="relative shrink-0 size-[21.895px]">
                          <div className="absolute inset-[15.63%_13.54%]">
                            <Image
                              alt=""
                              src={"/download.svg"}
                              width={21.895}
                              height={21.895}
                              className="block max-w-none size-full"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative self-stretch shrink-0">
                  <p className="font-['29LT_Bukra:Bold_Italic',sans-serif] font-bold leading-[1.5] relative shrink-0 text-white text-[18px] text-center">
                    Key Numbers
                  </p>
                  <KeyNumbers numbers={data.keyNumbers} />
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                <p className="font-['29LT_Bukra:Bold_Italic',sans-serif] font-bold leading-[1.5] relative shrink-0 text-white text-[18px] text-center">
                  Investment Opportunities
                </p>
                <InvestmentOpportunities
                  opportunities={data.investmentOpportunities}
                  cardColors={["#00A7A2", "#814A98"]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-[rgba(255,255,255,0.1)] border-b-0 border-l-0 border-r-0 border-solid border-t content-stretch flex items-center justify-between pb-[40px] pt-[20px] px-[40px] relative shrink-0 w-full">
        <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative shrink-0 flex-wrap lg:flex-nowrap">
          <div className="border border-[rgba(255,255,255,0.3)] border-solid content-stretch flex items-center justify-center relative rounded-[28.923px] shrink-0 size-[47px]">
            <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[28.923px]">
              <p className="font-['29LT_Bukra:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-white text-[22px]">
                ←
              </p>
            </div>
          </div>
          <div className="border border-[rgba(255,255,255,0.3)] border-solid content-stretch flex items-center justify-center relative rounded-[28.923px] shrink-0 size-[47px]">
            <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[28.923px]">
              <p className="font-['29LT_Bukra:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-white text-[22px]">
                →
              </p>
            </div>
          </div>
          <div className="border border-[rgba(255,255,255,0.3)] border-solid content-stretch flex gap-[6.714px] items-center justify-center px-[25.179px] py-[13.429px] relative rounded-[58.75px] shrink-0 w-full lg:w-auto">
            <p className="font-['29LT_Bukra:Bold_Italic',sans-serif] font-bold leading-[normal] relative shrink-0 text-white text-[14px]">
              Explore Opportunities
            </p>
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
          <div className="bg-[#00a7a2] content-stretch flex gap-[6.714px] items-center justify-center px-[25.179px] py-[13.429px] relative rounded-[83.929px] shrink-0 w-full lg:w-auto">
            <p className="font-['29LT_Bukra:Bold_Italic',sans-serif] font-bold leading-[normal] relative shrink-0 text-white text-[14px]">
              Explore Sectors
            </p>
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
  );
}
