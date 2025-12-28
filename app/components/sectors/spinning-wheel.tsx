"use client";

import { useState, useEffect } from "react";
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
  const [logoSize, setLogoSize] = useState(170);
  const [unselectedFontSize, setUnselectedFontSize] = useState(12);

  const [isAutoCycling, setIsAutoCycling] = useState(true);
  const rotationDuration = isAutoCycling ? 1000 : 500;

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoCycling) {
      interval = setInterval(() => {
        setSelectedIndex((prevIndex) => {
          const nextIndex = (prevIndex + 1) % items.length;
          if (onSelect) {
            onSelect(items[nextIndex], nextIndex);
          }
          return nextIndex;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isAutoCycling, items, onSelect]);

  useEffect(() => {
    const handleResize = () => {
      setHighlightOffset(window.innerWidth < 1024 ? 120 : 280);
      setTargetAngle(window.innerWidth < 1024 ? -90 : -45);
      setLogoSize(window.innerWidth < 1024 ? 100 : 170);
      setUnselectedFontSize(window.innerWidth < 1024 ? 9 : 12);
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

  const createSectorBorderPath = (
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
    // const x3 = Math.cos(endRad) * innerRadius;
    // const y3 = Math.sin(endRad) * innerRadius;
    const x4 = Math.cos(startRad) * innerRadius;
    const y4 = Math.sin(startRad) * innerRadius;

    // Draw Line from InnerStart to OuterStart, then Arc to OuterEnd.
    // Skips Inner Arc and End Radial Line (which is Start Radial Line of next sector)
    return `M ${x4} ${y4} L ${x1} ${y1} A ${outerRadius} ${outerRadius} 0 0 1 ${x2} ${y2}`;
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

  const createHighlightBorderPath = (
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

    // Draw Left Radial, Outer Arc, Right Radial. Skip Inner Arc.
    return `M ${x4} ${y4} L ${x1} ${y1} A ${outerRadius} ${outerRadius} 0 0 1 ${x2} ${y2} L ${x3} ${y3}`;
  };

  const outerRadius = size / 2 - 20;
  const innerRadius = size / 9;

  const handleSectorClick = (index: number) => {
    setIsAutoCycling(false);
    setSelectedIndex(index);
    if (onSelect) {
      onSelect(items[index], index);
    }
  };

  return (
    <div
      className={`relative flex items-center justify-center mt-[6.188rem] ${className}`}
      style={{
        width: "100%",
        maxWidth: size,
        aspectRatio: "1/1",
      }}
    >
      <div
        className="absolute inset-0 transition-transform ease-out z-10"
        style={{
          transform: `rotate(${currentRotation}deg)`,
          transitionDuration: `${rotationDuration}ms`,
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
          <defs>
            <linearGradient id="highlight-gradient" x1="0" y1="1" x2="0" y2="0">
              <stop offset="0%" stopColor="rgba(0, 167, 162, 1)" />
              <stop offset="100%" stopColor="rgba(0, 167, 162,1)" />
            </linearGradient>
            <filter
              id="inset-shadow"
              x="-50%"
              y="-50%"
              width="200%"
              height="200%"
            >
              <feOffset dx="0" dy="19" />
              <feGaussianBlur stdDeviation="12" result="offset-blur" />
              <feComposite
                operator="out"
                in="SourceGraphic"
                in2="offset-blur"
                result="inverse"
              />
              <feFlood floodColor="black" floodOpacity="0.25" result="color" />
              <feComposite
                operator="in"
                in="color"
                in2="inverse"
                result="shadow"
              />
              <feComposite operator="over" in="shadow" in2="SourceGraphic" />
            </filter>
            <filter
              id="selected-slice-shadow"
              x="-50%"
              y="-50%"
              width="200%"
              height="200%"
            >
              <feDropShadow
                dx="0"
                dy="4"
                stdDeviation="8"
                floodColor="rgba(0,0,0,0.5)"
              />
            </filter>
          </defs>
          <g>
            {items.map((_, index) => (
              <g key={`sector-${index}`}>
                <path
                  d={createSectorPath(
                    index,
                    numSectors,
                    innerRadius,
                    outerRadius
                  )}
                  fill="rgba(0,0,0,0.4)"
                  stroke="none"
                  className="transition-colors duration-300 hover:fill-gray-800 cursor-pointer backdrop-blur-sm"
                  onClick={() => handleSectorClick(index)}
                />
                <path
                  d={createSectorBorderPath(
                    index,
                    numSectors,
                    innerRadius,
                    outerRadius
                  )}
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.10)"
                  strokeWidth="1.385"
                  className="pointer-events-none"
                />
              </g>
            ))}
          </g>
          <g transform={`rotate(${selectedIndex * (360 / numSectors)})`}>
            <g filter="url(#selected-slice-shadow)">
              <path
                d={createHighlightPath(
                  0,
                  numSectors,
                  innerRadius,
                  outerRadius + 90
                )}
                fill="url(#highlight-gradient)"
                stroke="none"
                filter="url(#inset-shadow)"
                opacity={1}
              />
            </g>
            <path
              d={createHighlightBorderPath(
                0,
                numSectors,
                innerRadius,
                outerRadius + 90
              )}
              fill="none"
              // stroke="rgba(255, 255, 255, 0.10)"
              // strokeWidth="1.385"
            />
          </g>
        </svg>
      </div>

      <div
        className="absolute inset-0 transition-transform ease-out z-30 pointer-events-none"
        style={{
          transform: `rotate(${currentRotation}deg)`,
          transitionDuration: `${rotationDuration}ms`,
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
                    x={isSelected ? innerRadius + 162 : outerRadius - 10}
                    y={2}
                    fill={isSelected ? "#ffffff" : "rgba(255,255,255,0.7)"}
                    fontSize={isSelected ? 18 : unselectedFontSize}
                    fontWeight={isSelected ? "bold" : "light"}
                    style={{
                      transition: isSelected
                        ? "all 0.3s ease"
                        : "all 0.1s ease",
                    }}
                    textAnchor={isSelected ? "start" : "end"}
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
      <div className="items-center justify-center mt-[0.14rem]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={logoSize}
          height={logoSize}
          viewBox="0 0 315 315"
          fill="none"
        >
          <g filter="url(#filter0_di_1065_8806)">
            <path
              d="M157.172 253.612C211.677 253.612 255.861 209.428 255.861 154.923C255.861 100.418 211.677 56.2334 157.172 56.2334C102.667 56.2334 58.4824 100.418 58.4824 154.923C58.4824 209.428 102.667 253.612 157.172 253.612Z"
              fill="black"
              fill-opacity="0.6"
              shape-rendering="crispEdges"
            />
          </g>
          <defs>
            <filter
              id="filter0_di_1065_8806"
              x="-0.000221252"
              y="8.79765e-05"
              width="314.344"
              height="314.344"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="2.24933" />
              <feGaussianBlur stdDeviation="29.2413" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_1065_8806"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_1065_8806"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="13.496" />
              <feGaussianBlur stdDeviation="12.3713" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.65 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect2_innerShadow_1065_8806"
              />
            </filter>
          </defs>
        </svg>
        <div className="absolute inset-0 text-white text-center flex justify-center items-center flex-col scale-[0.6] lg:scale-100 transition-transform duration-300">
          <Image src="/logo.svg" alt="Logo" width={40} height={40} />
          <div className="text-xs font-normal leading-normal">NIS</div>
        </div>
      </div>
      {/* <div
        className="absolute p-4 z-40 flex flex-col items-center justify-center rounded-full bg-[#111] shadow-2xl border-[1.385px] border-[rgba(255,255,255,0.10)] border-solid"
        style={{
          width: `${((innerRadius * 2.5) / (size + 160)) * 100}%`,
          aspectRatio: "1/1",
        }}
      >
        <div className="text-white text-center flex justify-center items-center flex-col scale-[0.6] lg:scale-100 transition-transform duration-300">
          <Image src="/logo.svg" alt="Logo" width={40} height={40} />
          <div className="text-xs font-normal leading-normal">NIS</div>
        </div>
      </div> */}
    </div>
  );
}
