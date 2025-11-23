"use client";

import { motion } from "framer-motion";

interface GraphData {
  label: string;
  value: number;
}

interface ResultChartProps {
  data: GraphData[];
}

export function ResultChart({ data }: ResultChartProps) {
  return (
    <div className="w-full max-w-md mx-auto space-y-4 p-6 bg-white/40 rounded-2xl backdrop-blur-sm border border-white/50 shadow-inner">
      <h3 className="text-lg font-bold text-slate-700 mb-4 text-center">
        성향 분석 그래프
      </h3>
      
      <div className="space-y-3">
        {data.map((item, index) => (
          <div key={item.label} className="space-y-1">
            <div className="flex justify-between text-sm font-medium text-slate-600">
              <span>{item.label}</span>
              <span className="text-indigo-600">{item.value}%</span>
            </div>
            
            <div className="h-3 bg-white rounded-full overflow-hidden shadow-sm border border-indigo-50">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${item.value}%` }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 1, 
                  delay: index * 0.1,
                  ease: "easeOut" 
                }}
                className="h-full bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

