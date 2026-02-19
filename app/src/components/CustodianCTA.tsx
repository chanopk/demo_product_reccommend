import { motion } from 'framer-motion';
import { Shield, Check, ArrowRight, Lock, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CustodianCTAProps {
  onAction?: () => void;
}

export function CustodianCTA({ onAction }: CustodianCTAProps) {
  const features = [
    'Secure asset protection with regulatory oversight',
    'Consolidated portfolio management',
    'Real-time investment tracking',
    'Tax-efficient investment structures',
    'Professional custodian services',
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      className="relative overflow-hidden rounded-2xl"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1A365D] via-[#2C5282] to-[#E31837]" />
      
      {/* Animated gradient overlay */}
      <motion.div
        animate={{
          background: [
            'radial-gradient(circle at 0% 0%, rgba(227,24,55,0.3) 0%, transparent 50%)',
            'radial-gradient(circle at 100% 100%, rgba(227,24,55,0.3) 0%, transparent 50%)',
            'radial-gradient(circle at 0% 0%, rgba(227,24,55,0.3) 0%, transparent 50%)',
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0"
      />

      {/* Content */}
      <div className="relative z-10 p-8 md:p-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="text-white/80 text-sm font-medium uppercase tracking-wider">
                New Service
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-2xl md:text-3xl font-bold text-white mb-4"
            >
              Open a Custodian Account Today
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-white/80 mb-6 leading-relaxed"
            >
              Secure your investments with our professional custodian services. 
              Enjoy peace of mind with regulatory-compliant asset protection and 
              comprehensive portfolio management.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="space-y-3 mb-8"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-white/90 text-sm">{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                onClick={onAction}
                className="bg-white text-[#1A365D] hover:bg-white/90 font-semibold px-6 py-3 h-auto rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group"
              >
                <Lock className="w-4 h-4 mr-2" />
                Open Account
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 font-semibold px-6 py-3 h-auto rounded-xl"
              >
                <FileText className="w-4 h-4 mr-2" />
                Learn More
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="hidden md:block"
          >
            <div className="relative">
              <img
                src="/images/investment-growth.jpg"
                alt="Investment Growth"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A365D]/50 to-transparent rounded-xl" />
              
              {/* Floating stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-[#718096]">Assets Under Custody</p>
                    <p className="text-lg font-bold text-[#1A202C]">฿125B+</p>
                  </div>
                  <div className="w-px h-10 bg-[#E2E8F0]" />
                  <div>
                    <p className="text-xs text-[#718096]">Client Satisfaction</p>
                    <p className="text-lg font-bold text-[#48BB78]">98.5%</p>
                  </div>
                  <div className="w-px h-10 bg-[#E2E8F0]" />
                  <div>
                    <p className="text-xs text-[#718096]">Years Experience</p>
                    <p className="text-lg font-bold text-[#1A202C]">25+</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
