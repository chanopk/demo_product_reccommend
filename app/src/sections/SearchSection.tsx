import { motion } from 'framer-motion';
import { CustomerSearch } from '@/components/CustomerSearch';
import { CustomerList } from '@/components/CustomerList';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertCircle } from 'lucide-react';
import type { Customer } from '@/types';

interface SearchSectionProps {
  onSearch: (firstName: string, lastName: string) => void;
  onSelectCustomer: (customer: Customer) => void;
  customers: Customer[];
  selectedCustomer: Customer | null;
  loading: boolean;
  error: string | null;
}

export function SearchSection({ 
  onSearch, 
  onSelectCustomer, 
  customers, 
  selectedCustomer,
  loading, 
  error 
}: SearchSectionProps) {
  return (
    <section className="min-h-[50vh] flex flex-col items-center justify-center py-12 px-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-5xl mx-auto"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-[#E31837]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#1A365D]/5 rounded-full blur-3xl" />
        </div>

        <CustomerSearch onSearch={onSearch} loading={loading} />

        {error && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6"
          >
            <Alert variant="destructive" className="bg-[#FFF5F5] border-[#FED7D7]">
              <AlertCircle className="h-4 w-4 text-[#E53E3E]" />
              <AlertDescription className="text-[#C53030]">{error}</AlertDescription>
            </Alert>
          </motion.div>
        )}

        {/* Customer List - Always visible */}
        <CustomerList 
          customers={customers}
          onSelectCustomer={onSelectCustomer}
          selectedCustomerId={selectedCustomer?.id}
        />
      </motion.div>
    </section>
  );
}
