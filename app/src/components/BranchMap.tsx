import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';
import type { Branch } from '@/types';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface BranchMapProps {
  branches: Branch[];
}

export function BranchMap({ branches }: BranchMapProps) {
  const [selectedBranch, setSelectedBranch] = useState<Branch | null>(branches[0]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className="bg-white rounded-xl shadow-lg border border-[#E2E8F0] overflow-hidden"
    >
      <div className="p-5 border-b border-[#E2E8F0] bg-gradient-to-r from-[#F7FAFC] to-white">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#1A365D] to-[#2C5282] flex items-center justify-center">
            <MapPin className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-[#1A202C]">Nearest Branches</h3>
            <p className="text-sm text-[#718096]">Find the closest CIMB branch to you</p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-0">
        {/* Map Visualization */}
        <div className="relative h-80 md:h-auto bg-gradient-to-br from-[#EDF2F7] to-[#E2E8F0] overflow-hidden">
          <img
            src={`${import.meta.env.BASE_URL}images/branch-map.jpg`}
            alt="Branch locations"
            className="w-full h-full object-cover opacity-90"
          />

          {/* Overlay pins */}
          {branches.map((branch, index) => (
            <motion.button
              key={branch.id}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
              onClick={() => setSelectedBranch(branch)}
              className="absolute transform -translate-x-1/2 -translate-y-1/2"
              style={{
                left: `${branch.coordinates.x}%`,
                top: `${branch.coordinates.y}%`,
              }}
            >
              <div
                className={`relative ${selectedBranch?.id === branch.id ? 'z-10' : 'z-0'
                  }`}
              >
                <motion.div
                  animate={{
                    scale: selectedBranch?.id === branch.id ? [1, 1.2, 1] : 1,
                  }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className={`w-4 h-4 rounded-full ${selectedBranch?.id === branch.id
                      ? 'bg-[#E31837]'
                      : 'bg-[#1A365D]'
                    }`}
                />
                <div
                  className={`absolute inset-0 w-4 h-4 rounded-full ${selectedBranch?.id === branch.id
                      ? 'bg-[#E31837]'
                      : 'bg-[#1A365D]'
                    } opacity-30 animate-ping`}
                />
              </div>
            </motion.button>
          ))}

          {/* Distance indicator */}
          {selectedBranch && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute bottom-4 left-4 bg-white rounded-lg px-3 py-2 shadow-lg"
            >
              <p className="text-sm font-semibold text-[#1A202C]">
                {selectedBranch.distance} km away
              </p>
            </motion.div>
          )}
        </div>

        {/* Branch List */}
        <div className="p-4 max-h-80 overflow-y-auto">
          <div className="space-y-3">
            {branches.map((branch, index) => (
              <motion.div
                key={branch.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                onClick={() => setSelectedBranch(branch)}
                className={`p-4 rounded-lg cursor-pointer transition-all duration-200 ${selectedBranch?.id === branch.id
                    ? 'bg-[#FFF5F5] border-2 border-[#E31837]'
                    : 'bg-[#F7FAFC] border-2 border-transparent hover:bg-[#EDF2F7]'
                  }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold text-[#1A202C]">{branch.name}</h4>
                  <Badge
                    variant="secondary"
                    className={`text-xs ${branch.distance <= 1
                        ? 'bg-[#C6F6D5] text-[#276749]'
                        : branch.distance <= 3
                          ? 'bg-[#FEEBC8] text-[#C05621]'
                          : 'bg-[#E2E8F0] text-[#4A5568]'
                      }`}
                  >
                    {branch.distance} km
                  </Badge>
                </div>
                <p className="text-sm text-[#718096] mb-2">{branch.address}</p>
                <div className="flex flex-wrap gap-2 text-xs text-[#A0AEC0]">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {branch.hours}
                  </span>
                  <span className="flex items-center gap-1">
                    <Phone className="w-3 h-3" />
                    {branch.phone}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1 mt-2">
                  {branch.services.slice(0, 2).map((service) => (
                    <span
                      key={service}
                      className="text-xs px-2 py-0.5 bg-white rounded-full text-[#718096]"
                    >
                      {service}
                    </span>
                  ))}
                  {branch.services.length > 2 && (
                    <span className="text-xs px-2 py-0.5 bg-white rounded-full text-[#718096]">
                      +{branch.services.length - 2} more
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {selectedBranch && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-4"
            >
              <Button className="w-full bg-gradient-to-r from-[#E31837] to-[#B9132C] hover:from-[#B9132C] hover:to-[#E31837] text-white">
                <Navigation className="w-4 h-4 mr-2" />
                Get Directions
              </Button>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
