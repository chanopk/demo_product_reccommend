import React from 'react';
import { motion } from 'framer-motion';
import { Wallet, TrendingUp, Package, PieChart, BarChart3 } from 'lucide-react';
import {
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from 'recharts';
import { PersonaCard } from '@/components/PersonaCard';
import type { Customer } from '@/types';
import { useCountUp } from '@/hooks/useCountUp';
import { Badge } from '@/components/ui/badge';

interface PersonaSectionProps {
  customer: Customer;
}

export function PersonaSection({ customer }: PersonaSectionProps) {
  const totalAssets = customer.existingProducts.reduce((sum, p) => sum + p.amount, 0);
  const { value: totalValue } = useCountUp(totalAssets, 2000);

  // Calculate Asset Allocation from Existing Products
  const assetAllocationData = React.useMemo(() => {
    const allocation = {
      Deposits: { value: 0, color: '#2B6CB0' }, // Blue
      Investments: { value: 0, color: '#E31837' }, // CIMB Red
      Insurance: { value: 0, color: '#38A169' }, // Green
    };

    customer.existingProducts.forEach((p) => {
      if (['savings', 'deposit'].includes(p.type)) {
        allocation.Deposits.value += p.amount;
      } else if (p.type === 'investment') {
        allocation.Investments.value += p.amount;
      } else if (p.type === 'insurance') {
        allocation.Insurance.value += p.amount;
      }
    });

    return Object.entries(allocation)
      .map(([name, data]) => ({ name, ...data }))
      .filter((item) => item.value > 0);
  }, [customer.existingProducts]);

  // Cash Flow Data (from Customer Mock)
  const cashFlowData = customer.cashFlow || [
    { month: 'Oct', inflow: 0, outflow: 0 },
    { month: 'Nov', inflow: 0, outflow: 0 },
    { month: 'Dec', inflow: 0, outflow: 0 },
  ];

  const getProductTypeColor = (type: string) => {
    switch (type) {
      case 'savings':
        return 'bg-[#EBF8FF] text-[#2B6CB0]';
      case 'investment':
        return 'bg-[#FAF5FF] text-[#805AD5]';
      case 'insurance':
        return 'bg-[#FFF5F5] text-[#C53030]';
      case 'loan':
        return 'bg-[#FFFAF0] text-[#C05621]';
      case 'deposit':
        return 'bg-[#F0FFF4] text-[#276749]';
      default:
        return 'bg-[#EDF2F7] text-[#4A5568]';
    }
  };

  return (
    <section className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#1A365D] to-[#2C5282] flex items-center justify-center">
              <Wallet className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#1A202C]">Customer Persona</h2>
              <p className="text-sm text-[#718096]">AI-generated customer profile summary</p>
            </div>
          </div>
        </motion.div>

        {/* Total Assets Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="bg-gradient-to-r from-[#1A365D] to-[#2C5282] rounded-xl p-6 mb-6 text-white"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/70 text-sm mb-1">Total Assets with CIMB</p>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl md:text-4xl font-bold">
                  ฿{totalValue.toLocaleString()}
                </span>
                <TrendingUp className="w-5 h-5 text-[#48BB78]" />
              </div>
              <p className="text-white/60 text-sm mt-1">
                Across {customer.existingProducts.length} products
              </p>
            </div>
            <div className="hidden md:block">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
                <Wallet className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Charts Row */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Asset Allocation Chart */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="bg-white rounded-xl p-6 shadow-md border border-[#E2E8F0]"
          >
            <h3 className="text-lg font-semibold text-[#1A202C] mb-4 flex items-center gap-2">
              <PieChart className="w-5 h-5 text-[#E31837]" />
              Asset Allocation
            </h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <RechartsPieChart>
                  <Pie
                    data={assetAllocationData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {assetAllocationData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </RechartsPieChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Cash Flow Summary */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="bg-white rounded-xl p-6 shadow-md border border-[#E2E8F0]"
          >
            <h3 className="text-lg font-semibold text-[#1A202C] mb-4 flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-[#E31837]" />
              Cash Flow Summary (Last 3M)
            </h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <RechartsBarChart data={cashFlowData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip formatter={(value: number) => `฿${value.toLocaleString()}`} />
                  <Legend />
                  <Bar dataKey="inflow" name="Inflow" fill="#48BB78" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="outflow" name="Outflow" fill="#E31837" radius={[4, 4, 0, 0]} />
                </RechartsBarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>

        {/* Persona Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          <PersonaCard customer={customer} index={0} />
        </div>

        {/* Existing Products */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="bg-white rounded-xl p-6 shadow-md border border-[#E2E8F0]"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-[#F7FAFC] flex items-center justify-center">
              <Package className="w-5 h-5 text-[#1A365D]" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#1A202C]">Existing Products</h3>
              <p className="text-sm text-[#718096]">Current holdings with CIMB</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {customer.existingProducts.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="p-4 rounded-lg bg-[#F7FAFC] border border-[#E2E8F0] hover:border-[#E31837] transition-colors duration-200"
              >
                <Badge className={`mb-2 ${getProductTypeColor(product.type)}`}>
                  {product.type.charAt(0).toUpperCase() + product.type.slice(1)}
                </Badge>
                <p className="font-medium text-[#1A202C] mb-1">{product.name}</p>
                <p className="text-lg font-bold text-[#E31837]">
                  ฿{product.amount.toLocaleString()}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
