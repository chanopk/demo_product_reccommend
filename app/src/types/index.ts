export interface Customer {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  occupation: string;
  riskScore: number;
  vulnerableFlag: boolean;
  yearsWithBank: number;
  segment: 'Mass' | 'Preferred';
  existingProducts: ExistingProduct[];
  address: string;
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
