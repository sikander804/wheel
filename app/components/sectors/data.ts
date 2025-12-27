import { SectorData } from "./types";

export const advancedManufacturingData: SectorData = {
  name: "Advanced Manufacturing",
  description: `Saudi Arabia's advanced manufacturing sector is emerging as a leader in innovation and industrial growth. With a focus on cutting-edge technologies, a skilled workforce, and a supportive investment climate, the sector is becoming a key player in global manufacturing, offering competitive advantages in terms of location, incentives, and technological advancements.`,
  keyNumbers: [
    {
      id: "1",
      value: "$30 - BN",
      description:
        "Projected 2035 GDP contribution for machinery and equipment industry",
      iconColor: "#00a7a2",
      iconUrl: "/dollar.svg",
    },
    {
      id: "2",
      value: "4th",
      description: "Largest manufacturing hub in the MENA region by 2035",
      iconColor: "#814a98",
      iconUrl: "/persons.svg",
    },
    {
      id: "3",
      value: "15%",
      description: "Expected growth in the sector over the next decade.",
      iconColor: "#a01e64",
      iconUrl: "/aeroplane.svg",
    },
  ],
  investmentOpportunities: [
    {
      id: "1",
      title: "Commercial and Digital Banking",
      location: "Al-Madinah",
      description: `Saudi Arabia's advanced manufacturing sector is emerging as a leader in innovation and industrial growth. With a focus on cutting-edge technologies, a skilled workforce, and a supportive investment climate, the sector is becoming a key player in global manufacturing, offering competitive advantages in terms of location, incentives, and technological advancements.`,
      investmentSize: "$220 Million",
    },
    {
      id: "2",
      title: "Commercial and Digital Banking",
      location: "Al-Madinah",
      description: `Saudi Arabia's advanced manufacturing sector is emerging as a leader in innovation and industrial growth. With a focus on cutting-edge technologies, a skilled workforce, and a supportive investment climate, the sector is becoming a key player in global manufacturing, offering competitive advantages in terms of location, incentives, and technological advancements.`,
      investmentSize: "$220 Million",
    },
  ],
  strategyDescription: `In late 2022, the Saudi government revealed details of the country's latest National Industrial Strategy (NIS). The NIS is Saudi Arabia's comprehensive roadmap for accelerating the diversification of its industrial base to increase non-oil exports, encourage privatization, attract more foreign investment, `,
};

export const SECTOR_NAMES = [
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

const INVESTMENT_LOCATIONS = [
  "Riyadh",
  "Jeddah",
  "Al-Madinah",
  "Dammam",
  "Jazan",
  "NEOM",
  "Yanbu",
  "Tabuk",
];

const INVESTMENT_SIZES = [
  "$80 Million",
  "$120 Million",
  "$220 Million",
  "$450 Million",
  "$1.2 Billion",
];

const createSectorData = (name: string, index: number): SectorData => {
  const locationA = INVESTMENT_LOCATIONS[index % INVESTMENT_LOCATIONS.length];
  const locationB =
    INVESTMENT_LOCATIONS[(index + 3) % INVESTMENT_LOCATIONS.length];
  const sizeA = INVESTMENT_SIZES[index % INVESTMENT_SIZES.length];
  const sizeB = INVESTMENT_SIZES[(index + 2) % INVESTMENT_SIZES.length];

  return {
    name,
    description: `Saudi Arabia is scaling ${name.toLowerCase()} through targeted incentives, export programs, and supply chain localization, creating a competitive platform for growth.`,
    keyNumbers: [
      {
        id: `${index}-1`,
        value: `${10 + (index % 12)}%`,
        description: `Expected growth rate for core ${name} activities.`,
        iconColor: "#00a7a2",
        iconUrl: "/dollar.svg",
      },
      {
        id: `${index}-2`,
        value: `${2 + (index % 5)}x`,
        description: `Productivity uplift from new ${name} investments.`,
        iconColor: "#814a98",
        iconUrl: "/persons.svg",
      },
      {
        id: `${index}-3`,
        value: `${5 + (index % 8)} yrs`,
        description: `Typical payback period for priority ${name} projects.`,
        iconColor: "#a01e64",
        iconUrl: "/aeroplane.svg",
      },
    ],
    investmentOpportunities: [
      {
        id: `${index}-op-1`,
        title: `${name} Growth Hub`,
        location: locationA,
        description: `Develop a ${name} platform focused on high-value production, export readiness, and local supplier integration.`,
        investmentSize: sizeA,
      },
      {
        id: `${index}-op-2`,
        title: `${name} Supply Chain Cluster`,
        location: locationB,
        description: `Build a localized ecosystem for ${name} components, services, and supporting infrastructure.`,
        investmentSize: sizeB,
      },
    ],
    strategyDescription: `The National Industrial Strategy supports ${name} through financing, talent development, localization incentives, and export enablement.`,
  };
};

export const sectorDataByName = SECTOR_NAMES.reduce((acc, name, index) => {
  acc[name] =
    name === advancedManufacturingData.name
      ? advancedManufacturingData
      : createSectorData(name, index);
  return acc;
}, {} as Record<string, SectorData>);
