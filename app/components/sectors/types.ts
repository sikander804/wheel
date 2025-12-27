export interface Sector {
  id: string;
  name: string;
  description: string;
  angle: number;
}

export interface KeyNumber {
  id: string;
  value: string;
  description: string;
  iconColor: string;
  iconUrl: string;
}

export interface InvestmentOpportunity {
  id: string;
  title: string;
  location: string;
  description: string;
  investmentSize: string;
}

export interface SectorData {
  name: string;
  description: string;
  keyNumbers: KeyNumber[];
  investmentOpportunities: InvestmentOpportunity[];
  strategyDescription: string;
}

