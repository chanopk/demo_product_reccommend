import { motion } from 'framer-motion';

interface RiskGaugeProps {
  score: number;
  size?: number;
}

export function RiskGauge({ score, size = 120 }: RiskGaugeProps) {
  const strokeWidth = 10;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset = circumference - (score / 10) * circumference;

  const getColor = (score: number): string => {
    if (score <= 3) return '#48BB78';
    if (score <= 6) return '#ED8936';
    return '#E31837';
  };

  const getLabel = (score: number): string => {
    if (score <= 3) return 'Low Risk';
    if (score <= 6) return 'Moderate';
    return 'High Risk';
  };

  const color = getColor(score);
  const label = getLabel(score);

  return (
    <div className="relative flex flex-col items-center">
      <div style={{ width: size, height: size }} className="relative">
        <svg width={size} height={size} className="transform -rotate-90">
          {/* Background circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="#E2E8F0"
            strokeWidth={strokeWidth}
          />
          {/* Progress circle */}
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset }}
            transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1], delay: 0.3 }}
          />
        </svg>
        {/* Score text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.4 }}
            className="text-2xl md:text-3xl font-bold"
            style={{ color }}
          >
            {score}
          </motion.span>
          <span className="text-xs text-[#A0AEC0]">/10</span>
        </div>
      </div>
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.3 }}
        className="mt-2 text-sm font-medium px-3 py-1 rounded-full"
        style={{ backgroundColor: `${color}20`, color }}
      >
        {label}
      </motion.span>
    </div>
  );
}
