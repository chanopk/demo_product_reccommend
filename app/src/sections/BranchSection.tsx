import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { BranchMap } from '@/components/BranchMap';
import type { Branch } from '@/types';

interface BranchSectionProps {
  branches: Branch[];
}

export function BranchSection({ branches }: BranchSectionProps) {
  return (
    <section className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#1A365D] to-[#2C5282] flex items-center justify-center">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#1A202C]">Branch Locator</h2>
              <p className="text-sm text-[#718096]">Find the nearest CIMB branch for in-person consultation</p>
            </div>
          </div>
        </motion.div>

        <BranchMap branches={branches} />
      </div>
    </section>
  );
}
