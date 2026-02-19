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

  const cards = [
    {
      title: 'Customer',
      value: `${customer.firstName} ${customer.lastName}`,
      subtitle: `${ageValue} years old`,
      icon: 'user',
      type: 'header' as const,
    },
    {
      title: 'Occupation',
      value: customer.occupation,
      icon: 'briefcase',
      type: 'text' as const,
    },
    {
      title: 'Risk Profile',
      value: customer.riskScore,
      icon: 'trending-up',
      type: 'gauge' as const,
    },
    {
      title: 'Vulnerable Flag',
      value: customer.vulnerableFlag ? 'Yes' : 'No',
      icon: 'alert-triangle',
      type: 'flag' as const,
    },
    {
      title: 'Years with CIMB',
      value: yearsValue,
      subtitle: 'years',
      icon: 'calendar',
      type: 'number' as const,
    },
    {
      title: 'Segment',
      value: customer.segment,
      icon: 'crown',
      type: 'badge' as const,
    },
  ];

  return (
    <>
      {cards.map((card, cardIndex) => (
        <motion.div
          key={card.title}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: index * 0.1 + cardIndex * 0.1,
            duration: 0.5,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          whileHover={{ y: -4, boxShadow: '0 10px 40px rgba(0,0,0,0.1)' }}
          className="bg-white rounded-xl p-5 shadow-md border border-[#E2E8F0] transition-all duration-300"
        >
          {card.type === 'header' && (
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#1A365D] to-[#2C5282] flex items-center justify-center flex-shrink-0">
                <User className="w-7 h-7 text-white" />
              </div>
              <div>
                <p className="text-sm text-[#718096] mb-1">{card.title}</p>
                <h3 className="text-lg font-bold text-[#1A202C]">{card.value}</h3>
                <p className="text-sm text-[#E31837] font-medium">{card.subtitle}</p>
              </div>
            </div>
          )}

          {card.type === 'text' && (
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#EDF2F7] flex items-center justify-center flex-shrink-0">
                <Briefcase className="w-5 h-5 text-[#1A365D]" />
              </div>
              <div>
                <p className="text-sm text-[#718096] mb-1">{card.title}</p>
                <p className="text-base font-semibold text-[#1A202C]">{card.value}</p>
              </div>
            </div>
          )}

          {card.type === 'gauge' && (
            <div className="flex flex-col items-center">
              <p className="text-sm text-[#718096] mb-3">{card.title}</p>
              <RiskGauge score={customer.riskScore} size={100} />
            </div>
          )}

          {card.type === 'flag' && (
            <div className="flex items-start gap-3">
              <div
                className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                  customer.vulnerableFlag ? 'bg-[#FED7D7]' : 'bg-[#C6F6D5]'
                }`}
              >
                <AlertTriangle
                  className={`w-5 h-5 ${
                    customer.vulnerableFlag ? 'text-[#E53E3E]' : 'text-[#48BB78]'
                  }`}
                />
              </div>
              <div>
                <p className="text-sm text-[#718096] mb-1">{card.title}</p>
                <Badge
                  variant={customer.vulnerableFlag ? 'destructive' : 'default'}
                  className={
                    customer.vulnerableFlag
                      ? 'bg-[#FED7D7] text-[#C53030] hover:bg-[#FED7D7]'
                      : 'bg-[#C6F6D5] text-[#276749] hover:bg-[#C6F6D5]'
                  }
                >
                  {customer.vulnerableFlag ? 'Flagged' : 'Not Flagged'}
                </Badge>
              </div>
            </div>
          )}

          {card.type === 'number' && (
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#EBF8FF] flex items-center justify-center flex-shrink-0">
                <Calendar className="w-5 h-5 text-[#3182CE]" />
              </div>
              <div>
                <p className="text-sm text-[#718096] mb-1">{card.title}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-[#1A202C]">{card.value}</span>
                  <span className="text-sm text-[#718096]">{card.subtitle}</span>
                </div>
              </div>
            </div>
          )}

          {card.type === 'badge' && (
            <div className="flex items-start gap-3">
              <div
                className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                  customer.segment === 'Preferred' ? 'bg-[#FAF5FF]' : 'bg-[#F0FFF4]'
                }`}
              >
                <Crown
                  className={`w-5 h-5 ${
                    customer.segment === 'Preferred' ? 'text-[#805AD5]' : 'text-[#38A169]'
                  }`}
                />
              </div>
              <div>
                <p className="text-sm text-[#718096] mb-1">{card.title}</p>
                <Badge
                  className={`text-sm px-3 py-1 ${
                    customer.segment === 'Preferred'
                      ? 'bg-gradient-to-r from-[#805AD5] to-[#6B46C1] text-white'
                      : 'bg-gradient-to-r from-[#38A169] to-[#2F855A] text-white'
                  }`}
                >
                  {customer.segment}
                </Badge>
              </div>
            </div>
          )}
        </motion.div>
      ))}
    </>
  );
}
