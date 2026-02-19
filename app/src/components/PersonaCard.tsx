import { motion } from 'framer-motion';
import { User, Briefcase, Calendar, Crown, AlertTriangle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { RiskGauge } from './RiskGauge';
import { useCountUp } from '@/hooks/useCountUp';
import type { Customer } from '@/types';

interface PersonaCardProps {
  customer: Customer;
  index: number;
}

export function PersonaCard({ customer, index }: PersonaCardProps) {
  const { value: yearsValue } = useCountUp(customer.yearsWithBank, 1500);
  const { value: ageValue } = useCountUp(customer.age, 1200);

  // Main Profile Card
  const ProfileCard = () => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -4, boxShadow: '0 10px 40px rgba(0,0,0,0.1)' }}
      className="bg-white rounded-xl p-6 shadow-md border border-[#E2E8F0] col-span-1 lg:col-span-2 flex flex-col justify-between"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#1A365D] to-[#2C5282] flex items-center justify-center flex-shrink-0">
            <User className="w-8 h-8 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-xl font-bold text-[#1A202C]">{customer.firstName} {customer.lastName}</h3>
              <Badge
                className={`text-xs px-2 py-0.5 ${customer.segment === 'Preferred'
                    ? 'bg-gradient-to-r from-[#805AD5] to-[#6B46C1] text-white'
                    : 'bg-gradient-to-r from-[#38A169] to-[#2F855A] text-white'
                  }`}
              >
                <Crown className="w-3 h-3 mr-1 inline" />
                {customer.segment}
              </Badge>
            </div>
            <p className="text-sm text-[#718096] flex items-center gap-2">
              <span className="font-medium text-[#E31837]">{ageValue} years old</span>
              <span>•</span>
              <Briefcase className="w-4 h-4" />
              <span>{customer.occupation}</span>
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-2 pt-4 border-t border-gray-100">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-[#EBF8FF] flex items-center justify-center flex-shrink-0">
            <Calendar className="w-5 h-5 text-[#3182CE]" />
          </div>
          <div>
            <p className="text-xs text-[#718096]">Years with CIMB</p>
            <p className="font-bold text-[#1A202C]">{yearsValue} years</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div
            className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${customer.vulnerableFlag ? 'bg-[#FED7D7]' : 'bg-[#C6F6D5]'
              }`}
          >
            <AlertTriangle
              className={`w-5 h-5 ${customer.vulnerableFlag ? 'text-[#E53E3E]' : 'text-[#48BB78]'
                }`}
            />
          </div>
          <div>
            <p className="text-xs text-[#718096]">Vulnerable Status</p>
            <Badge
              variant={customer.vulnerableFlag ? 'destructive' : 'default'}
              className={`text-xs px-2 py-0.5 ${customer.vulnerableFlag
                  ? 'bg-[#FED7D7] text-[#C53030] hover:bg-[#FED7D7]'
                  : 'bg-[#C6F6D5] text-[#276749] hover:bg-[#C6F6D5]'
                }`}
            >
              {customer.vulnerableFlag ? 'Flagged' : 'Not Flagged'}
            </Badge>
          </div>
        </div>
      </div>
    </motion.div>
  );

  // Risk Profile Card
  const RiskCard = () => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 + 0.1, duration: 0.5 }}
      whileHover={{ y: -4, boxShadow: '0 10px 40px rgba(0,0,0,0.1)' }}
      className="bg-white rounded-xl p-5 shadow-md border border-[#E2E8F0] flex flex-col items-center justify-center col-span-1"
    >
      <p className="text-sm text-[#718096] mb-3 font-medium">Risk Profile</p>
      <RiskGauge score={customer.riskScore} size={120} />
    </motion.div>
  );

  return (
    <>
      <ProfileCard />
      <RiskCard />
    </>
  );
}
