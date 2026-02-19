import { motion } from 'framer-motion';
import { Umbrella, TrendingUp, GraduationCap, ArrowRight, Target, Clock } from 'lucide-react';
import type { Scenario } from '@/types';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface ScenarioCardProps {
  scenario: Scenario;
  index: number;
}

const iconMap: Record<string, React.ElementType> = {
  umbrella: Umbrella,
  'trending-up': TrendingUp,
  'graduation-cap': GraduationCap,
};

export function ScenarioCard({ scenario, index }: ScenarioCardProps) {
  const Icon = iconMap[scenario.icon] || Target;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: index * 0.15,
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(0,0,0,0.12)' }}
      className="bg-white rounded-xl p-6 shadow-md border border-[#E2E8F0] transition-all duration-300 h-full flex flex-col"
    >
      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1A365D] to-[#2C5282] flex items-center justify-center flex-shrink-0">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div className="flex-1">
          <h4 className="text-lg font-bold text-[#1A202C] mb-1">{scenario.title}</h4>
          <p className="text-sm text-[#718096] leading-relaxed">{scenario.description}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        <Badge variant="secondary" className="bg-[#EBF8FF] text-[#2B6CB0]">
          <Target className="w-3 h-3 mr-1" />
          {scenario.projectedReturn}% projected return
        </Badge>
        <Badge variant="secondary" className="bg-[#F0FFF4] text-[#276749]">
          <Clock className="w-3 h-3 mr-1" />
          {scenario.timeHorizon}
        </Badge>
      </div>

      <div className="mt-auto pt-4 border-t border-[#E2E8F0]">
        <p className="text-xs text-[#A0AEC0] mb-2">Recommended Products:</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {scenario.recommendedProducts.map((productId) => (
            <Badge
              key={productId}
              variant="outline"
              className="text-xs border-[#E31837] text-[#E31837]"
            >
              {productId}
            </Badge>
          ))}
        </div>
        <Button
          variant="ghost"
          className="w-full text-[#E31837] hover:bg-[#FFF5F5] hover:text-[#B9132C] group"
        >
          View Details
          <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </motion.div>
  );
}
