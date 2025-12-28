import Image from "next/image";
import KeyNumbers from "./KeyNumbers";
import InvestmentOpportunities from "./InvestmentOpportunities";
import { SectorData } from "./types";

interface SectorInfoPanelProps {
  data: SectorData;
}

export default function SectorInfoPanel({ data }: SectorInfoPanelProps) {
  return (
    <div className="z-100 bg-[rgba(0,0,0,0.4)] border border-[#009893] border-solid flex flex-col items-start relative rounded-xl shrink-0 w-full lg:max-w-[580px] h-[700px]">
      <div className="backdrop-blur-[15px] overflow-hidden content-stretch flex flex-col items-start rounded-xl pb-4 pt-6 px-5 relative shrink-0 w-full flex-1">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full h-full">
          <div className="content-stretch flex flex-col gap-5 items-start relative shrink-0 w-full h-full">
            <div className="content-stretch flex flex-col gap-2 items-start leading-tight relative shrink-0 text-white w-full">
              <p className="font-['29LT_Bukra:Bold_Italic',sans-serif] font-bold relative shrink-0 text-base text-center">
                {data.name}
              </p>
              <p className="font-['29LT_Bukra:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-xs text-shadow-[0px_1px_2px_rgba(0,0,0,0.32)] w-[min-content] whitespace-pre-wrap line-clamp-2">
                {data.description}
              </p>
            </div>
            <div className="content-stretch flex flex-col gap-4 items-start overflow-y-auto relative shrink-0 w-full flex-1">
              <div className="content-stretch flex gap-3 items-start relative shrink-0 w-full">
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-2 items-start min-h-px min-w-px relative shrink-0">
                  <p className="font-['29LT_Bukra:Bold_Italic',sans-serif] font-bold leading-tight relative shrink-0 text-white text-xs text-center">
                    National Industrial Strategy
                  </p>
                  <div className="backdrop-blur-[5px] backdrop-filter bg-gradient-to-b content-stretch flex flex-col from-[28.132%] from-[rgba(0,0,0,0.4)] items-start p-3 relative rounded-xl shrink-0 to-[rgba(0,0,0,0)] w-full">
                    <div className="content-stretch flex flex-col gap-3 items-start relative shrink-0 w-full">
                      <div className="content-stretch flex items-center relative shrink-0 w-full">
                        <div className="h-10 relative shrink-0 w-[38px]">
                          <Image
                            alt=""
                            src={"/logo.svg"}
                            width={38}
                            height={40}
                            unoptimized
                            className="block max-w-none size-full"
                          />
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full flex-1">
                        <p className="font-['29LT_Bukra:Regular',sans-serif] font-normal opacity-80 relative shrink-0 text-[0.7rem] text-white w-full whitespace-pre-wrap line-clamp-4">
                          {/* {data.strategyDescription} */}
                          In late 2022, the Saudi government revealed details of
                          the country&apos;s latest National Industrial Strategy
                          (NIS). The NIS is Saudi Arabia&apos;s comprehensive
                          roadmap for accelerating the diversification of its
                          industrial base to increase non-oil exports, encourage
                          privatization, attract more foreign investment,
                        </p>
                      </div>
                      <div className="bg-[#00a7a2] content-stretch flex gap-1.5 items-center justify-center px-4 py-2 relative rounded-full shadow-[0px_2px_29.9px_0px_rgba(0,0,0,0.25)] shrink-0">
                        <p className="font-['29LT_Bukra:Medium',sans-serif] font-medium leading-tight relative shrink-0 text-white text-xs">
                          Download Strategy
                        </p>
                        <div className="relative shrink-0 size-3">
                          <div className="absolute inset-[15.63%_13.54%]">
                            <Image
                              alt=""
                              src={"/download.svg"}
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
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-2 items-start min-h-px min-w-px relative self-stretch shrink-0">
                  <p className="font-['29LT_Bukra:Bold_Italic',sans-serif] font-bold leading-tight relative shrink-0 text-white text-xs text-center">
                    Key Numbers
                  </p>
                  <KeyNumbers numbers={data.keyNumbers} />
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-2 items-start relative shrink-0 w-full">
                <p className="font-['29LT_Bukra:Bold_Italic',sans-serif] font-bold leading-tight relative shrink-0 text-white text-xs text-center">
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
      <div className="border-[rgba(255,255,255,0.1)] border-b-0 border-l-0 border-r-0 border-solid border-t content-stretch flex items-center justify-between pb-4 pt-3 px-5 relative shrink-0 w-full">
        <div className="content-stretch flex flex-[1_0_0] gap-2 items-center min-h-px min-w-px relative shrink-0 flex-wrap lg:flex-nowrap">
          <div className="border border-[rgba(255,255,255,0.3)] border-solid content-stretch flex items-center justify-center relative rounded-full shrink-0 size-8">
            <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-4">
              <p className="font-['29LT_Bukra:Regular',sans-serif] font-normal leading-tight relative shrink-0 text-white text-sm">
                ←
              </p>
            </div>
          </div>
          <div className="border border-[rgba(255,255,255,0.3)] border-solid content-stretch flex items-center justify-center relative rounded-full shrink-0 size-8">
            <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-4">
              <p className="font-['29LT_Bukra:Regular',sans-serif] font-normal leading-tight relative shrink-0 text-white text-sm">
                →
              </p>
            </div>
          </div>
          <div className="border border-[rgba(255,255,255,0.3)] border-solid content-stretch flex gap-1.5 items-center justify-center px-4 py-2 relative rounded-full shrink-0 w-full lg:w-auto">
            <p className="font-['29LT_Bukra:Bold_Italic',sans-serif] font-bold leading-normal relative shrink-0 text-white text-xs">
              Explore Opportunities
            </p>
            <div className="relative shrink-0 size-3">
              <div className="absolute inset-[21.86%_21.88%_21.87%_21.87%]">
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
          <div className="bg-[#00a7a2] content-stretch flex gap-1.5 items-center justify-center px-4 py-2 relative rounded-full shrink-0 w-full lg:w-auto">
            <p className="font-['29LT_Bukra:Bold_Italic',sans-serif] font-bold leading-normal relative shrink-0 text-white text-xs">
              Explore Sectors
            </p>
            <div className="relative shrink-0 size-3">
              <div className="absolute inset-[21.86%_21.88%_21.87%_21.87%]">
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
  );
}
