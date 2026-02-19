import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, User, Loader2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface CustomerSearchProps {
  onSearch: (firstName: string, lastName: string) => void;
  loading: boolean;
}

export function CustomerSearch({ onSearch, loading }: CustomerSearchProps) {
  const [fullName, setFullName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedName = fullName.trim();
    if (trimmedName) {
      const parts = trimmedName.split(/\s+/);
      const firstName = parts[0];
      const lastName = parts.slice(1).join(' ');
      onSearch(firstName, lastName);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      className="w-full max-w-2xl mx-auto"
    >
      <div className="text-center mb-8">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#E31837] to-[#B9132C] mb-4 shadow-lg"
        >
          <User className="w-8 h-8 text-white" />
        </motion.div>
        <h1 className="text-3xl md:text-4xl font-bold text-[#1A202C] mb-2">
          Customer Intelligence Dashboard
        </h1>
        <p className="text-[#718096] text-lg">
          Search customer to view AI-powered insights and recommendations
        </p>
      </div>

      <form onSubmit={handleSubmit} className="relative">
        <div className="bg-white rounded-2xl shadow-xl p-2 md:p-4 border border-[#E2E8F0]">
          <div className="flex flex-col md:flex-row gap-3">
            <div className="flex-1 relative">
              <Input
                type="text"
                placeholder="Full Name (e.g. Nice Vong)"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="h-12 md:h-14 px-4 text-base border-[#E2E8F0] focus:border-[#E31837] focus:ring-[#E31837]/20 rounded-xl transition-all duration-200"
                disabled={loading}
              />
            </div>
            <Button
              type="submit"
              disabled={loading || !fullName.trim()}
              className="h-12 md:h-14 px-6 md:px-8 bg-gradient-to-r from-[#E31837] to-[#B9132C] hover:from-[#B9132C] hover:to-[#E31837] text-white font-semibold rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg hover:scale-[1.02]"
            >
              {loading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  <Search className="w-5 h-5 mr-2" />
                  <span>Search</span>
                </>
              )}
            </Button>
          </div>
        </div>
      </form>
    </motion.div>
  );
}
