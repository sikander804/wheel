"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const SECTORS = [
  "Advanced Manufacturing",
  "Energy",
  "Biotechnology & Pharma",
  "Environment - Recycling",
  "Automotive",
  "Transport & Logistics",
  "Tourism & Quality of Life",
  "Media",
  "Human Capital & Innovation",
  "Culture",
  "Environment Services",
  "Mining & Metals",
  "Education & Training",
  "Entertainment",
  "ICT",
  "Environment - Water",
  "Healthcare & Devices",
  "Real Estate & Construction",
  "Defense & Space",
  "Cybersecurity",
  "Petrochemicals & Conversion",
  "Agriculture & Food",
  "Financial Services",
  "Mining & Metals",
];

interface SpinningWheelProps {
  items?: string[];
  size?: number;
  onSelect?: (item: string, index: number) => void;
  className?: string;
}

export default function SpinningWheel({
  items = SECTORS,
  size = 600,
  onSelect,
  className = "",
}: SpinningWheelProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [highlightOffset, setHighlightOffset] = useState(280);
  const [targetAngle, setTargetAngle] = useState(-45);

  useEffect(() => {
    const handleResize = () => {
      setHighlightOffset(window.innerWidth < 1024 ? 120 : 280);
      setTargetAngle(window.innerWidth < 1024 ? -90 : -45);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const numSectors = items.length;
  const anglePerSector = 360 / numSectors;

  const currentRotation = targetAngle - selectedIndex * anglePerSector;

  const createSectorPath = (
    index: number,
    total: number,
    innerRadius: number,
    outerRadius: number
  ) => {
    const angle = 360 / total;
    const startAngle = index * angle - angle / 2;
    const endAngle = startAngle + angle;

    const startRad = (startAngle * Math.PI) / 180;
    const endRad = (endAngle * Math.PI) / 180;

    const x1 = Math.cos(startRad) * outerRadius;
    const y1 = Math.sin(startRad) * outerRadius;
    const x2 = Math.cos(endRad) * outerRadius;
    const y2 = Math.sin(endRad) * outerRadius;

    const x3 = Math.cos(endRad) * innerRadius;
    const y3 = Math.sin(endRad) * innerRadius;
    const x4 = Math.cos(startRad) * innerRadius;
    const y4 = Math.sin(startRad) * innerRadius;

    return `M ${x4} ${y4} L ${x1} ${y1} A ${outerRadius} ${outerRadius} 0 0 1 ${x2} ${y2} L ${x3} ${y3} A ${innerRadius} ${innerRadius} 0 0 0 ${x4} ${y4} Z`;
  };

  const createHighlightPath = (
    index: number,
    total: number,
    innerRadius: number,
    outerRadius: number
  ) => {
    const angle = 360 / total;

    const extraWidth = 4;
    const startAngle = index * angle - angle / 2 - extraWidth;
    const endAngle = startAngle + angle + extraWidth * 2;

    const startRad = (startAngle * Math.PI) / 180;
    const endRad = (endAngle * Math.PI) / 180;

    const x1 = Math.cos(startRad) * outerRadius + highlightOffset;
    const x2 = Math.cos(endRad) * outerRadius + highlightOffset;
    const y1 = Math.sin(startRad) * outerRadius + 0;
    const y2 = Math.sin(endRad) * outerRadius + 30;

    const x3 = Math.cos(endRad) * innerRadius;
    const y3 = Math.sin(endRad) * innerRadius;
    const x4 = Math.cos(startRad) * innerRadius;
    const y4 = Math.sin(startRad) * innerRadius;

    return `M ${x4} ${y4} L ${x1} ${y1} A ${outerRadius} ${outerRadius} 0 0 1 ${x2} ${y2} L ${x3} ${y3} A ${innerRadius} ${innerRadius} 0 0 0 ${x4} ${y4} Z`;
  };

  const outerRadius = size / 2 - 20;
  const innerRadius = size / 12;

  const handleSectorClick = (index: number) => {
    setSelectedIndex(index);
    if (onSelect) {
      onSelect(items[index], index);
    }
  };

  return (
    <div
      className={`relative flex items-center justify-center ${className}`}
      style={{
        width: "100%",
        maxWidth: size,
        aspectRatio: "1/1",
      }}
    >
      <div
        className="absolute inset-0 transition-transform duration-1000 ease-out z-10"
        style={{
          transform: `rotate(${currentRotation}deg)`,
        }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox={`-${size / 2 + 80} -${size / 2 + 80} ${size + 160} ${
            size + 160
          }`}
          className="overflow-visible"
        >
          <g>
            {items.map((_, index) => (
              <path
                key={`bg-${index}`}
                d={createSectorPath(
                  index,
                  numSectors,
                  innerRadius,
                  outerRadius
                )}
                fill="rgba(0,0,0,0.4)"
                stroke="#333"
                strokeWidth="1"
                className="transition-colors duration-300 hover:fill-gray-800 cursor-pointer backdrop-blur-sm"
                onClick={() => handleSectorClick(index)}
              />
            ))}
          </g>
        </svg>
      </div>

      <svg
        width="100%"
        height="100%"
        viewBox={`-${size / 2 + 80} -${size / 2 + 80} ${size + 160} ${
          size + 160
        }`}
        className="absolute pointer-events-none overflow-visible z-20"
        style={{ transform: `rotate(${targetAngle}deg)` }}
      >
        <path
          d={createHighlightPath(0, numSectors, innerRadius, outerRadius + 90)}
          fill="#00a7a2"
          opacity={1}
        />
      </svg>

      <div
        className="absolute inset-0 transition-transform duration-1000 ease-out z-30 pointer-events-none"
        style={{
          transform: `rotate(${currentRotation}deg)`,
        }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox={`-${size / 2 + 80} -${size / 2 + 80} ${size + 160} ${
            size + 160
          }`}
          className="overflow-visible"
        >
          <g>
            {items.map((item, index) => {
              const angle = (360 / numSectors) * index;
              const isSelected = index === selectedIndex;

              return (
                <g key={`text-${index}`} transform={`rotate(${angle})`}>
                  <text
                    x={innerRadius + (isSelected ? 162 : 30)}
                    y={2}
                    fill={isSelected ? "#ffffff" : "rgba(255,255,255,0.7)"}
                    fontSize={isSelected ? 18 : 14}
                    fontWeight={isSelected ? "bold" : "normal"}
                    style={{
                      transition: isSelected
                        ? "all 0.3s ease"
                        : "all 0.1s ease",
                    }}
                    textAnchor="start"
                    alignmentBaseline="middle"
                    fontFamily="sans-serif"
                  >
                    {item}
                  </text>
                </g>
              );
            })}
          </g>
        </svg>
      </div>

      <div
        className="absolute z-40 flex flex-col items-center justify-center rounded-full bg-[#111] shadow-2xl border border-gray-800"
        style={{
          width: `${((innerRadius * 2.5) / (size + 160)) * 100}%`,
          aspectRatio: "1/1",
        }}
      >
        <div className="text-white text-center flex justify-center items-center flex-col scale-[0.6] lg:scale-100 transition-transform duration-300">
          <Image src="/logo.svg" alt="Logo" width={40} height={40} />
          <div className="text-[10px] uppercase tracking-wider text-gray-500">
            Investment
          </div>
          <div className="text-xs font-bold">Sectors</div>
        </div>
      </div>
    </div>
  );
}
