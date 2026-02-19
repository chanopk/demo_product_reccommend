import { useState, useCallback } from 'react';
import type { Customer, Product, Branch, Scenario } from '@/types';
import {
  mockBranches,
  mockScenarios,
  findCustomerByName,
  findCustomerById,
  getRecommendedProducts,
} from '@/data/mockData';

interface UseMockDataReturn {
  customer: Customer | null;
  products: Product[];
  branches: Branch[];
  scenarios: Scenario[];
  loading: boolean;
  error: string | null;
  searchCustomer: (firstName: string, lastName: string) => Promise<void>;
  selectCustomer: (customer: Customer) => void;
  selectCustomerById: (id: string) => void;
  clearCustomer: () => void;
}

export function useMockData(): UseMockDataReturn {
  const [customer, setCustomer] = useState<Customer | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const searchCustomer = useCallback(async (firstName: string, lastName: string) => {
    setLoading(true);
    setError(null);

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    const found = findCustomerByName(firstName, lastName);

    if (found) {
      setCustomer(found);
      const recommended = getRecommendedProducts(found.riskScore);
      setProducts(recommended);
    } else {
      setError(`Customer "${firstName} ${lastName}" not found. Please try searching in the Customer List below.`);
      setCustomer(null);
      setProducts([]);
    }

    setLoading(false);
  }, []);

  const selectCustomer = useCallback((selectedCustomer: Customer) => {
    setLoading(true);
    setError(null);

    // Simulate brief loading for better UX
    setTimeout(() => {
      setCustomer(selectedCustomer);
      const recommended = getRecommendedProducts(selectedCustomer.riskScore);
      setProducts(recommended);
      setLoading(false);
      
      // Scroll to customer persona section
      setTimeout(() => {
        const personaSection = document.getElementById('customer-persona');
        if (personaSection) {
          personaSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }, 300);
  }, []);

  const selectCustomerById = useCallback((id: string) => {
    const found = findCustomerById(id);
    if (found) {
      selectCustomer(found);
    }
  }, [selectCustomer]);

  const clearCustomer = useCallback(() => {
    setCustomer(null);
    setProducts([]);
    setError(null);
  }, []);

  return {
    customer,
    products,
    branches: mockBranches,
    scenarios: mockScenarios,
    loading,
    error,
    searchCustomer,
    selectCustomer,
    selectCustomerById,
    clearCustomer,
  };
}
