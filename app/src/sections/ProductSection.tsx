import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, Lightbulb } from 'lucide-react';
import { ProductComparison } from '@/components/ProductComparison';
import { PortSimulation } from '@/components/PortSimulation';
import { ScenarioCard } from '@/components/ScenarioCard';
import type { Product, Scenario } from '@/types';


interface ProductSectionProps {
  products: Product[];
  scenarios: Scenario[];
}

export function ProductSection({ products, scenarios }: ProductSectionProps) {
  const [selectedProductIds, setSelectedProductIds] = useState<string[]>([]);

  const handleToggleProduct = (productId: string) => {
    setSelectedProductIds((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const selectedProducts = products.filter((p) =>
    selectedProductIds.includes(p.id)
  );

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
          <ProductComparison
            products={products}
            selectedProductIds={selectedProductIds}
            onToggleProduct={handleToggleProduct}
          />
        </div>

        {/* Port Simulation - Shows when products are selected */}
        <AnimatePresence>
          {selectedProducts.length > 0 && (
            <div className="mb-12">
              <PortSimulation selectedProducts={selectedProducts} />
            </div>
          )}
        </AnimatePresence>


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
