import { motion } from 'framer-motion';
import { TrendingUp, Lightbulb } from 'lucide-react';
import { ProductComparison } from '@/components/ProductComparison';
import { ScenarioCard } from '@/components/ScenarioCard';
import type { Product, Scenario } from '@/types';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts';

interface ProductSectionProps {
  products: Product[];
  scenarios: Scenario[];
}

export function ProductSection({ products, scenarios }: ProductSectionProps) {
  const chartData = products.map((p) => ({
    name: p.name.split(' ').slice(0, 3).join(' '),
    rate: p.interestRate,
    recommended: p.recommended,
  }));

  return (
    <section className="py-12 px-4 bg-[#F7FAFC]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#E31837] to-[#B9132C] flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#1A202C]">Product Recommendations</h2>
              <p className="text-sm text-[#718096]">AI-curated investment options based on risk profile</p>
            </div>
          </div>
        </motion.div>

        {/* Product Comparison Table */}
        <div className="mb-8">
          <ProductComparison products={products} />
        </div>

        {/* Interest Rate Chart */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl p-6 shadow-md border border-[#E2E8F0] mb-8"
        >
          <h3 className="text-lg font-semibold text-[#1A202C] mb-4">
            Projected Returns Comparison
          </h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                <XAxis 
                  dataKey="name" 
                  tick={{ fill: '#718096', fontSize: 12 }}
                  axisLine={{ stroke: '#E2E8F0' }}
                  tickLine={false}
                />
                <YAxis 
                  tick={{ fill: '#718096', fontSize: 12 }}
                  axisLine={{ stroke: '#E2E8F0' }}
                  tickLine={false}
                  tickFormatter={(value) => `${value}%`}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#fff',
                    border: '1px solid #E2E8F0',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                  }}
                  formatter={(value: number) => [`${value}%`, 'Interest Rate']}
                />
                <Bar dataKey="rate" radius={[4, 4, 0, 0]}>
                  {chartData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={entry.recommended ? '#E31837' : '#1A365D'}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Scenario-based Recommendations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#805AD5] to-[#6B46C1] flex items-center justify-center">
              <Lightbulb className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#1A202C]">Investment Scenarios</h3>
              <p className="text-sm text-[#718096]">Tailored recommendations for your goals</p>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {scenarios.map((scenario, index) => (
            <ScenarioCard key={scenario.id} scenario={scenario} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
