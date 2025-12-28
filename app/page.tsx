"use client";
import SectorInfoPanel from "./components/sectors/SectorInfoPanel";
import { SECTOR_NAMES, sectorDataByName } from "./components/sectors/data";
import SpinningWheel from "./components/sectors/spinning-wheel";
import { useEffect, useState } from "react";

const imgSection =
  "https://www.figma.com/api/mcp/asset/5100ec06-9c3a-457c-b4a5-24c844b04248";

export default function Home() {
  const [wheelSize, setWheelSize] = useState(600);
  const [selectedSectorName, setSelectedSectorName] = useState(SECTOR_NAMES[0]);

  useEffect(() => {
    const handleResize = () => {
      setWheelSize(window.innerWidth < 1024 ? 500 : 600);
    };
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const selectedSectorData =
    sectorDataByName[selectedSectorName] ?? sectorDataByName[SECTOR_NAMES[0]];

  return (
    <div
      className="flex flex-col items-start justify-center px-[10px] py-8 relative min-h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${imgSection})`,
      }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.90) 97.12%), linear-gradient(0deg, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%)",
        }}
      />
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
    </div>
  );
}
