import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Month 1', base: 4000, high: 4400, low: 3600 },
  { name: 'Month 2', base: 4200, high: 4700, low: 3700 },
  { name: 'Month 3', base: 4100, high: 4800, low: 3400 },
  { name: 'Month 4', base: 4500, high: 5400, low: 3600 },
  { name: 'Month 5', base: 4800, high: 5900, low: 3700 },
  { name: 'Month 6', base: 5000, high: 6400, low: 3600 },
];

export function ConfidenceChart() {
  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <XAxis dataKey="name" tickLine={false} axisLine={false} tick={{ fontSize: 12, fill: '#64748b' }} dy={10} />
          <YAxis hide domain={['dataMin - 1000', 'dataMax + 1000']} />
          <Tooltip 
            contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
            labelStyle={{ fontWeight: 'bold', color: '#0f172a' }}
          />
          <Area type="monotone" dataKey="high" stackId="1" stroke="none" fill="#f0f4ef" fillOpacity={0.8} />
          <Area type="monotone" dataKey="base" stackId="2" stroke="#2d5a27" strokeWidth={2} fill="none" />
          <Area type="monotone" dataKey="low" stackId="3" stroke="none" fill="#f0f4ef" fillOpacity={0.8} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
