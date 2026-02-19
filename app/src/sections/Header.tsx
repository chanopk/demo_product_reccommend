import { motion } from 'framer-motion';
import { Building2, User, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

export function Header() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#E2E8F0] shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#E31837] to-[#B9132C] flex items-center justify-center">
              <Building2 className="w-5 h-5 text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-[#1A202C]">CIMB Bank</h1>
              <p className="text-xs text-[#718096]">Product Recommendation</p>
            </div>
          </div>

          {/* Center - Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {['Dashboard', 'Customers', 'Products', 'Reports'].map((item, index) => (
              <Button
                key={item}
                variant={index === 0 ? 'secondary' : 'ghost'}
                className={`text-sm ${index === 0
                    ? 'bg-[#FFF5F5] text-[#E31837] hover:bg-[#FFE5E5]'
                    : 'text-[#718096] hover:text-[#1A202C]'
                  }`}
              >
                {item}
              </Button>
            ))}
          </nav>

          {/* Right - User Actions */}
          <div className="flex items-center gap-3">
            <Button
              className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white shadow-md"
              onClick={() => window.open('https://ca-agentic-chat-35qn5exfa2lyk.politesky-e7ff17e8.eastus.azurecontainerapps.io/studio', '_blank')}
            >
              Chat
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="w-5 h-5 text-[#718096]" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-[#E31837] rounded-full" />
            </Button>
            <div className="flex items-center gap-3 pl-3 border-l border-[#E2E8F0]">
              <div className="hidden sm:block text-right">
                <p className="text-sm font-medium text-[#1A202C]">RM Portal</p>
                <p className="text-xs text-[#718096]">Relationship Manager</p>
              </div>
              <Avatar className="w-9 h-9 border-2 border-[#E2E8F0]">
                <AvatarFallback className="bg-gradient-to-br from-[#1A365D] to-[#2C5282] text-white text-sm">
                  <User className="w-4 h-4" />
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
