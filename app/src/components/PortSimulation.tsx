import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';
import { TrendingUp, RefreshCw, DollarSign, Calendar } from 'lucide-react';
import type { Product } from '@/types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';

interface PortSimulationProps {
    selectedProducts: Product[];
}

interface SimulationData {
    year: number;
    amount: number;
    invested: number;
}

export function PortSimulation({ selectedProducts }: PortSimulationProps) {
    const [monthlyInvestment, setMonthlyInvestment] = useState<number>(0);
    const [duration, setDuration] = useState<number>(10);
    const [data, setData] = useState<SimulationData[]>([]);
    const [avgInterestRate, setAvgInterestRate] = useState<number>(0);

    // Initialize monthly investment based on selected products
    useEffect(() => {
        if (selectedProducts.length > 0) {
            const totalMinInvest = selectedProducts.reduce(
                (sum, p) => sum + p.minInvestment,
                0
            );
            // Set default monthly investment to a reasonable value, e.g., sum of min investments or at least 1000
            setMonthlyInvestment(Math.max(totalMinInvest, 5000));
        }
    }, [selectedProducts]);

    // Calculate average interest rate
    useEffect(() => {
        if (selectedProducts.length > 0) {
            // Simple average for demonstration. In reality, it should be weighted by allocation.
            const totalRate = selectedProducts.reduce((sum, p) => sum + p.interestRate, 0);
            setAvgInterestRate(totalRate / selectedProducts.length);
        } else {
            setAvgInterestRate(0);
        }
    }, [selectedProducts]);

    // Generate simulation data
    useEffect(() => {
        if (monthlyInvestment >= 0 && avgInterestRate >= 0 && duration > 0) {
            const newData: SimulationData[] = [];
            let currentAmount = 0;
            let totalInvested = 0;

            // Initial point (Year 0)
            newData.push({
                year: 0,
                amount: 0,
                invested: 0,
            });

            // Simulate for duration years
            for (let year = 1; year <= duration; year++) {
                const annualContribution = monthlyInvestment * 12;
                totalInvested += annualContribution;

                // Compound interest calculation (monthly contribution, annually compounded for simplicity of demo)
                // FV = P * (((1 + r)^n - 1) / r) * (1 + r) (for annuity due)
                // But for simple yearly simulation:
                // End of Year Amount = (Previous Amount + Annual Contribution) * (1 + rate)

                currentAmount = (currentAmount + annualContribution) * (1 + avgInterestRate / 100);

                newData.push({
                    year,
                    amount: Math.round(currentAmount),
                    invested: totalInvested,
                });
            }
            setData(newData);
        }
    }, [monthlyInvestment, avgInterestRate, duration]);

    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat('th-TH', {
            style: 'currency',
            currency: 'THB',
            maximumFractionDigits: 0,
        }).format(value);
    };

    const formatYAxis = (value: number) => {
        if (value >= 1000000) return `${(value / 1000000).toFixed(1)}M`;
        if (value >= 1000) return `${(value / 1000).toFixed(0)}k`;
        return value.toString();
    };

    if (selectedProducts.length === 0) return null;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl shadow-lg border border-[#E2E8F0] overflow-hidden p-6 mt-8"
        >
            <div className="flex flex-col md:flex-row gap-8">
                {/* Controls Section */}
                <div className="w-full md:w-1/3 space-y-6">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#38A169] to-[#2F855A] flex items-center justify-center">
                            <TrendingUp className="w-5 h-5 text-white" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-[#1A202C]">Port Simulation</h3>
                            <p className="text-sm text-[#718096]">{duration}-Year Projection</p>
                        </div>
                    </div>

                    <div className="bg-[#F7FAFC] p-4 rounded-lg border border-[#E2E8F0]">
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium text-gray-600">Avg. Return</span>
                            <span className="text-lg font-bold text-[#38A169]">
                                {avgInterestRate.toFixed(2)}%
                            </span>
                        </div>
                        <div className="text-xs text-gray-500">
                            Based on {selectedProducts.length} selected product(s)
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Monthly Investment
                            </label>
                            <div className="flex items-center gap-2 mb-2">
                                <DollarSign className="w-4 h-4 text-gray-400" />
                                <Input
                                    type="number"
                                    value={monthlyInvestment}
                                    onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
                                    className="font-mono"
                                    min={0}
                                    step={1000}
                                />
                            </div>
                            <Slider
                                value={[monthlyInvestment]}
                                min={1000}
                                max={100000}
                                step={1000}
                                onValueChange={(vals) => setMonthlyInvestment(vals[0])}
                                className="py-2"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Duration (Years)
                            </label>
                            <div className="flex items-center gap-2 mb-2">
                                <Calendar className="w-4 h-4 text-gray-400" />
                                <Input
                                    type="number"
                                    value={duration}
                                    onChange={(e) => setDuration(Math.min(30, Math.max(1, Number(e.target.value))))}
                                    className="font-mono"
                                    min={1}
                                    max={30}
                                />
                            </div>
                            <Slider
                                value={[duration]}
                                min={1}
                                max={30}
                                step={1}
                                onValueChange={(vals) => setDuration(vals[0])}
                                className="py-2"
                            />
                        </div>
                    </div>

                    <div className="pt-4 border-t border-gray-100">
                        <div className="flex justify-between items-center mb-1">
                            <span className="text-sm text-gray-600">Total Invested</span>
                            <span className="font-semibold text-gray-800">
                                {formatCurrency(data[data.length - 1]?.invested || 0)}
                            </span>
                        </div>
                        <div className="flex justify-between items-center mb-1">
                            <span className="text-sm text-gray-600">Potential Gain</span>
                            <span className="font-semibold text-[#38A169]">
                                +{formatCurrency((data[data.length - 1]?.amount || 0) - (data[data.length - 1]?.invested || 0))}
                            </span>
                        </div>
                        <div className="flex justify-between items-center mt-3 pt-3 border-t border-gray-100">
                            <span className="text-base font-bold text-gray-800">Total Value</span>
                            <span className="text-xl font-bold text-[#38A169]">
                                {formatCurrency(data[data.length - 1]?.amount || 0)}
                            </span>
                        </div>
                    </div>

                    <Button
                        className="w-full bg-[#1A365D] hover:bg-[#2C5282] text-white"
                        onClick={() => {
                            // Reset or re-calculate logic if needed
                            const totalMinInvest = selectedProducts.reduce((sum, p) => sum + p.minInvestment, 0);
                            setMonthlyInvestment(Math.max(totalMinInvest, 5000));
                            setDuration(10);
                        }}
                    >
                        <RefreshCw className="w-4 h-4 mr-2" />
                        Reset Defaults
                    </Button>
                </div>

                {/* Chart Section */}
                <div className="w-full md:w-2/3 h-[450px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart
                            data={data}
                            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                        >
                            <defs>
                                <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#38A169" stopOpacity={0.8} />
                                    <stop offset="95%" stopColor="#38A169" stopOpacity={0} />
                                </linearGradient>
                                <linearGradient id="colorInvested" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#CBD5E0" stopOpacity={0.8} />
                                    <stop offset="95%" stopColor="#CBD5E0" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <XAxis dataKey="year" label={{ value: 'Years', position: 'insideBottomRight', offset: -10 }} />
                            <YAxis tickFormatter={formatYAxis} />
                            <CartesianGrid strokeDasharray="3 3" vertical={false} />
                            <Tooltip
                                formatter={(value: number) => formatCurrency(value)}
                                labelFormatter={(label) => `Year ${label}`}
                                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                            />
                            <Area
                                type="monotone"
                                dataKey="amount"
                                name="Portfolio Value"
                                stroke="#38A169"
                                fillOpacity={1}
                                fill="url(#colorAmount)"
                                strokeWidth={2}
                            />
                            <Area
                                type="monotone"
                                dataKey="invested"
                                name="Principal Invested"
                                stroke="#718096"
                                fillOpacity={1}
                                fill="url(#colorInvested)"
                                strokeWidth={2}
                                strokeDasharray="5 5"
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </motion.div>
    );
}
