export interface Customer {
  id: string;
  cif: string;
  prefixTH: string;
  prefixEN: string;
  firstName: string;
  lastName: string;
  firstNameTH: string;
  lastNameTH: string;
  nationalityCode: string;
  residentCountryCode: string;
  age: number;
  birthDate: string;
  gender: string;
  maritalStatus: string;
  occupationCode: string;
  occupation: string;
  educationCode: string;
  education: string;
  riskScore: number;
  riskProfileLevel: string;
  vulnerableFlag: boolean;
  vulnerableDetail: string;
  yearsWithBank: number;
  segment: string;
  monthlyIncomeRangeCode: string;
  monthlyIncomeLevel: string;
  openBranchCode: string;
  openDate: string;
  existingProducts: ExistingProduct[];
  address: string;
  // Investment specific
  fxRiskFlag: string;
  openFnxFromFlag: string;
  fundCode?: string;
  unitBalance?: number;
  nav?: number;
  amount?: number;
  cashFlow?: {
    month: string;
    inflow: number;
    outflow: number;
  }[];
  productRecommendations?: Product[];
}

export interface ExistingProduct {
  name: string;
  amount: number;
  type: 'savings' | 'investment' | 'insurance' | 'loan' | 'deposit';
}

export interface Product {
  id: string;
  name: string;
  category: 'fund' | 'bond' | 'insurance' | 'deposit' | 'savings';
  duration: string;
  rating: number;
  interestRate: number;
  minInvestment: number;
  features: string[];
  recommended: boolean;
  riskLevel: 'low' | 'medium' | 'high';
  description: string;
  reason?: string;
}

export interface Scenario {
  id: string;
  title: string;
  description: string;
  icon: string;
  recommendedProducts: string[];
  projectedReturn: number;
  timeHorizon: string;
}

export interface Branch {
  id: string;
  name: string;
  address: string;
  distance: number;
  hours: string;
  phone: string;
  coordinates: { x: number; y: number };
  services: string[];
}

export interface PersonaCardData {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: string;
  type: 'text' | 'number' | 'gauge' | 'badge' | 'list' | 'flag';
  color?: 'default' | 'success' | 'warning' | 'error' | 'info';
}
