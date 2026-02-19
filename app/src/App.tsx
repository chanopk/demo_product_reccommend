import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Header } from '@/sections/Header';
import { SearchSection } from '@/sections/SearchSection';
import { PersonaSection } from '@/sections/PersonaSection';
import { ProductSection } from '@/sections/ProductSection';
import { BranchSection } from '@/sections/BranchSection';
import { CustodianSection } from '@/sections/CustodianSection';
import { useMockData } from '@/hooks/useMockData';
import { mockCustomers } from '@/data/mockData';
import { Button } from '@/components/ui/button';
import { ArrowUp, RotateCcw, Users } from 'lucide-react';
import './App.css';

function App() {
  const {
    customer,
    products,
    branches,
    scenarios,
    loading,
    error,
    searchCustomer,
    selectCustomer,
    clearCustomer
  } = useMockData();

  const [showScrollTop, setShowScrollTop] = useState(false);

  // Handle scroll to show/hide scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCustodianAction = () => {
    alert('Custodian account opening flow would start here!');
  };

  return (
    <div className="min-h-screen bg-[#F7FAFC]">
      <Header />

      <main className="pt-16">
        {/* Search Section with Customer List - Always visible */}
        <SearchSection
          onSearch={searchCustomer}
          onSelectCustomer={selectCustomer}
          customers={mockCustomers}
          selectedCustomer={customer}
          loading={loading}
          error={error}
        />

        {/* Customer Data Sections - Only visible when customer is selected */}
        <AnimatePresence mode="wait">
          {customer && (
            <motion.div
              id="customer-persona"
              key="customer-data"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Divider with customer info */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-r from-[#1A365D] to-[#2C5282] py-4 px-4"
              >
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white/60 text-sm">Viewing Customer</p>
                      <h2 className="text-white text-xl font-bold">
                        {customer.firstName} {customer.lastName}
                      </h2>
                    </div>
                  </div>
                  <Button
                    onClick={() => {
                      clearCustomer();
                      scrollToTop();
                    }}
                    className="bg-white text-[#1A365D] hover:bg-gray-100 border-none shadow-sm font-medium"
                  >
                    <RotateCcw className="w-4 h-4 mr-2" />
                    Change Customer
                  </Button>
                </div>
              </motion.div>

              {/* Customer Persona */}
              <PersonaSection customer={customer} />

              {/* Product Recommendations */}
              <ProductSection products={products} scenarios={scenarios} />

              {/* Branch Locator */}
              <BranchSection branches={branches} />

              {/* Custodian Account CTA */}
              <CustodianSection onAction={handleCustodianAction} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Empty State - Show when no customer selected */}
        {!customer && !loading && !error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="py-16 px-4 text-center"
          >
            <div className="max-w-md mx-auto">
              <img
                src="/images/banking-hero.jpg"
                alt="Banking illustration"
                className="w-full rounded-xl shadow-lg mb-6"
              />
              <h3 className="text-xl font-semibold text-[#1A202C] mb-2">
                Ready to Serve Your Customers
              </h3>
              <p className="text-[#718096] mb-6">
                Search for a customer above or select from the Customer List to view
                their AI-generated persona, product recommendations, and more.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm border border-[#E2E8F0]">
                  <div className="w-3 h-3 rounded-full bg-[#48BB78]" />
                  <span className="text-sm text-[#718096]">Low Risk</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm border border-[#E2E8F0]">
                  <div className="w-3 h-3 rounded-full bg-[#ED8936]" />
                  <span className="text-sm text-[#718096]">Moderate Risk</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm border border-[#E2E8F0]">
                  <div className="w-3 h-3 rounded-full bg-[#E31837]" />
                  <span className="text-sm text-[#718096]">High Risk</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-[#1A365D] text-white py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="font-semibold">CIMB Bank Thailand</p>
              <p className="text-sm text-white/60">
                Product Recommendation Demo - For demonstration purposes only
              </p>
            </div>
            <div className="flex items-center gap-6 text-sm text-white/60">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
              <span>Contact</span>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-white/10 text-center text-xs text-white/40">
            <p>© 2026 CIMB Bank Thailand. All rights reserved.</p>
            <p className="mt-1">
              This is a demo application. Data shown is simulated for demonstration purposes.
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-[#E31837] to-[#B9132C] text-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 z-50"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
