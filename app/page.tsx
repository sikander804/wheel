"use client";
import Image from "next/image";
import SectorInfoPanel from "./components/sectors/SectorInfoPanel";
import { SECTOR_NAMES, sectorDataByName } from "./components/sectors/data";
import SpinningWheel from "./components/sectors/spinning-wheel";
import { useEffect, useState } from "react";

const imgSection =
  "https://www.figma.com/api/mcp/asset/5100ec06-9c3a-457c-b4a5-24c844b04248";

export default function Home() {
  const [wheelSize, setWheelSize] = useState(700);
  const [selectedSectorName, setSelectedSectorName] = useState(SECTOR_NAMES[0]);

  useEffect(() => {
    const handleResize = () => {
      setWheelSize(window.innerWidth < 1024 ? 600 : 700);
    };
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const selectedSectorData =
    sectorDataByName[selectedSectorName] ?? sectorDataByName[SECTOR_NAMES[0]];

  return (
    <div className="flex flex-col items-start justify-center px-[10px] py-[96px] relative min-h-screen w-full">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <Image
          alt=""
          src={imgSection}
          fill
          className="absolute max-w-none object-50%-50% object-cover"
          unoptimized
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(180.0000000000003deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 97.121%), linear-gradient(90deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.3) 100%)",
          }}
        />
      </div>
      <div className="flex flex-col items-start justify-center relative shrink-0 w-full">
        <div className="flex items-center justify-center relative w-full flex-col md:flex-col lg:flex-row">
          <SpinningWheel
            size={wheelSize}
            items={SECTOR_NAMES}
            onSelect={(item) => setSelectedSectorName(item)}
          />
          <SectorInfoPanel data={selectedSectorData} />
        </div>
      </div>

      {/* spining wheel */}
      {/* <SpinningWheel />
      <SpinningWheel2 /> */}
    </div>
  );
}
