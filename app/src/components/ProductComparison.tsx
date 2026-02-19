import { motion } from 'framer-motion';
import { Star, Check, TrendingUp, Clock, DollarSign, Shield, Info } from 'lucide-react';
import type { Product } from '@/types';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface ProductComparisonProps {
  products: Product[];
}

export function ProductComparison({ products }: ProductComparisonProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const rowVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: 'easeOut' as const },
    },
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'low':
        return 'bg-[#C6F6D5] text-[#276749]';
      case 'medium':
        return 'bg-[#FEEBC8] text-[#C05621]';
      case 'high':
        return 'bg-[#FED7D7] text-[#C53030]';
      default:
        return 'bg-[#E2E8F0] text-[#4A5568]';
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="bg-white rounded-xl shadow-lg border border-[#E2E8F0] overflow-hidden"
    >
      <div className="p-5 border-b border-[#E2E8F0] bg-gradient-to-r from-[#F7FAFC] to-white">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#E31837] to-[#B9132C] flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-[#1A202C]">Product Comparison</h3>
            <p className="text-sm text-[#718096]">Compare recommended investment options</p>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-[#F7FAFC]">
              <TableHead className="font-semibold text-[#1A365D]">Product</TableHead>
              <TableHead className="font-semibold text-[#1A365D]">Duration</TableHead>
              <TableHead className="font-semibold text-[#1A365D]">Rating</TableHead>
              <TableHead className="font-semibold text-[#1A365D]">Interest Rate</TableHead>
              <TableHead className="font-semibold text-[#1A365D]">Analysis</TableHead>
              <TableHead className="font-semibold text-[#1A365D]">Min Investment</TableHead>
              <TableHead className="font-semibold text-[#1A365D]">Risk</TableHead>
              <TableHead className="font-semibold text-[#1A365D]">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <motion.tr
                key={product.id}
                variants={rowVariants}
                whileHover={{ backgroundColor: '#F7FAFC' }}
                className={`transition-colors duration-200 ${product.recommended ? 'bg-[#FFF5F5]' : ''
                  }`}
              >
                <TableCell>
                  <div>
                    <p className="font-semibold text-[#1A202C]">{product.name}</p>
                    <p className="text-xs text-[#718096] mt-1">{product.description}</p>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#718096]" />
                    <span className="text-sm">{product.duration}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < product.rating ? 'text-[#F6AD55] fill-[#F6AD55]' : 'text-[#E2E8F0]'
                          }`}
                      />
                    ))}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[#48BB78]" />
                    <span className="font-semibold text-[#48BB78]">{product.interestRate}%</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex flex-col gap-2">
                    {product.recommended && (
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <span className="inline-flex items-center gap-1 text-xs text-[#E31837] font-medium cursor-help border-b border-dashed border-[#E31837]">
                              <Info className="w-3 h-3" />
                              Why this fund?
                            </span>
                          </TooltipTrigger>
                          <TooltipContent className="bg-white p-3 shadow-lg border border-gray-100 max-w-xs">
                            <p className="text-sm text-gray-700">
                              Based on your risk profile ({product.riskLevel}) and investment goal,
                              this fund offers the best projected return of {product.interestRate}%
                              with moderate volatility.
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    )}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-[#718096]" />
                    <span className="text-sm">
                      {product.minInvestment.toLocaleString()} THB
                    </span>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge className={`${getRiskColor(product.riskLevel)} capitalize`}>
                    {product.riskLevel}
                  </Badge>
                </TableCell>
                <TableCell>
                  {product.recommended && (
                    <Badge className="bg-gradient-to-r from-[#E31837] to-[#B9132C] text-white">
                      <Check className="w-3 h-3 mr-1" />
                      Recommended
                    </Badge>
                  )}
                </TableCell>
              </motion.tr>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="p-4 bg-[#F7FAFC] border-t border-[#E2E8F0]">
        <div className="flex items-start gap-2">
          <Shield className="w-5 h-5 text-[#3182CE] flex-shrink-0 mt-0.5" />
          <p className="text-sm text-[#718096]">
            All products are regulated by the Securities and Exchange Commission Thailand.
            Past performance does not guarantee future returns.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
