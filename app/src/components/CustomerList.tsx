import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, User, Users, ChevronRight, Crown, AlertTriangle, TrendingUp } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import type { Customer } from '@/types';

interface CustomerListProps {
  customers: Customer[];
  onSelectCustomer: (customer: Customer) => void;
  selectedCustomerId?: string | null;
}

export function CustomerList({ customers, onSelectCustomer, selectedCustomerId }: CustomerListProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isExpanded, setIsExpanded] = useState(true);

  const filteredCustomers = useMemo(() => {
    if (!searchQuery.trim()) return customers;
    const query = searchQuery.toLowerCase();
    return customers.filter(
      (c) =>
        c.firstName.toLowerCase().includes(query) ||
        c.lastName.toLowerCase().includes(query) ||
        c.occupation.toLowerCase().includes(query)
    );
  }, [customers, searchQuery]);

  const getRiskColor = (score: number) => {
    if (score <= 3) return 'text-[#48BB78] bg-[#C6F6D5]';
    if (score <= 6) return 'text-[#C05621] bg-[#FEEBC8]';
    return 'text-[#C53030] bg-[#FED7D7]';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="w-full max-w-4xl mx-auto mt-8"
    >
      {/* Header */}
      <div 
        className="flex items-center justify-between bg-white rounded-t-xl p-4 border border-[#E2E8F0] border-b-0 cursor-pointer hover:bg-[#F7FAFC] transition-colors"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#1A365D] to-[#2C5282] flex items-center justify-center">
            <Users className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-[#1A202C]">Customer List</h3>
            <p className="text-sm text-[#718096]">
              {filteredCustomers.length} of {customers.length} customers
            </p>
          </div>
        </div>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronRight className="w-5 h-5 text-[#718096] rotate-90" />
        </motion.div>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            {/* Search Bar */}
            <div className="bg-white border-x border-[#E2E8F0] p-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A0AEC0]" />
                <Input
                  type="text"
                  placeholder="Search by name or occupation..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-10 border-[#E2E8F0] focus:border-[#E31837] focus:ring-[#E31837]/20 rounded-lg"
                />
              </div>
            </div>

            {/* Customer Grid */}
            <ScrollArea className="h-80 bg-white border border-t-0 border-[#E2E8F0] rounded-b-xl">
              <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {filteredCustomers.map((customer, index) => (
                  <motion.div
                    key={customer.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.03 }}
                    onClick={() => onSelectCustomer(customer)}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                      selectedCustomerId === customer.id
                        ? 'border-[#E31837] bg-[#FFF5F5]'
                        : 'border-[#E2E8F0] bg-white hover:border-[#E31837]/50 hover:bg-[#F7FAFC]'
                    }`}
                  >
                    {/* Customer Header */}
                    <div className="flex items-start gap-3 mb-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                        customer.segment === 'Preferred'
                          ? 'bg-gradient-to-br from-[#805AD5] to-[#6B46C1]'
                          : 'bg-gradient-to-br from-[#1A365D] to-[#2C5282]'
                      }`}>
                        <User className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-[#1A202C] truncate">
                          {customer.firstName} {customer.lastName}
                        </h4>
                        <p className="text-xs text-[#718096]">{customer.occupation}</p>
                      </div>
                    </div>

                    {/* Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      <Badge className={`text-xs ${getRiskColor(customer.riskScore)}`}>
                        <TrendingUp className="w-3 h-3 mr-1" />
                        Risk {customer.riskScore}
                      </Badge>
                      {customer.vulnerableFlag && (
                        <Badge className="text-xs bg-[#FED7D7] text-[#C53030]">
                          <AlertTriangle className="w-3 h-3 mr-1" />
                          Vulnerable
                        </Badge>
                      )}
                      {customer.segment === 'Preferred' && (
                        <Badge className="text-xs bg-gradient-to-r from-[#805AD5] to-[#6B46C1] text-white">
                          <Crown className="w-3 h-3 mr-1" />
                          Preferred
                        </Badge>
                      )}
                    </div>

                    {/* Footer Info */}
                    <div className="flex items-center justify-between text-xs text-[#A0AEC0]">
                      <span>{customer.yearsWithBank} years</span>
                      <span>{customer.age} yrs old</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {filteredCustomers.length === 0 && (
                <div className="p-8 text-center">
                  <p className="text-[#718096]">No customers found matching "{searchQuery}"</p>
                </div>
              )}
            </ScrollArea>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
