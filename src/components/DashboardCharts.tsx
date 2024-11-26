import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
//import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// Mock historical data
const historicalData = {
  health: [
    { date: '2024-01', value: 82 },
    { date: '2024-02', value: 85 },
    { date: '2024-03', value: 88 },
    { date: '2024-04', value: 85 }
  ],
  productivity: [
    { date: '2024-01', value: 75 },
    { date: '2024-02', value: 78 },
    { date: '2024-03', value: 80 },
    { date: '2024-04', value: 78 }
  ],
  social: [
    { date: '2024-01', value: 68 },
    { date: '2024-02', value: 70 },
    { date: '2024-03', value: 72 },
    { date: '2024-04', value: 72 }
  ],
  financial: [
    { date: '2024-01', value: 90 },
    { date: '2024-02', value: 91 },
    { date: '2024-03', value: 92 },
    { date: '2024-04', value: 92 }
  ]
};

const getChartColor = (category: string) => {
  switch (category) {
    case 'health':
      return '#22c55e';
    case 'productivity':
      return '#3b82f6';
    case 'social':
      return '#a855f7';
    case 'financial':
      return '#f59e0b';
    default:
      return '#64748b';
  }
};

export const TrendChart: React.FC<{ category: string }> = ({ category }) => {
  const data = historicalData[category as keyof typeof historicalData];
  const color = getChartColor(category);

  return (
    <div className="h-24">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <Line
            type="monotone"
            dataKey="value"
            stroke={color}
            strokeWidth={2}
            dot={false}
          />
          <XAxis
            dataKey="date"
            hide
            padding={{ left: 10, right: 10 }}
          />
          <YAxis hide domain={[0, 100]} />
          <Tooltip
            contentStyle={{ background: '#fff', border: 'none', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}
            formatter={(value: number) => [`${value}%`, 'Score']}
            labelFormatter={(label: string) => new Date(label).toLocaleDateString('en-US', { month: 'short', year: '2-digit' })}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

interface ScoreRingProps {
  score: number;
  size?: number;
  strokeWidth?: number;
  category: string;
}

export const ScoreRing: React.FC<ScoreRingProps> = ({
  score,
  size = 60,
  strokeWidth = 4,
  category
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const progress = (score / 100) * circumference;
  const color = getChartColor(category);

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg className="transform -rotate-90" width={size} height={size}>
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#e2e8f0"
          strokeWidth={strokeWidth}
        />
        {/* Progress circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={`${progress} ${circumference}`}
          strokeLinecap="round"
          style={{
            transition: 'stroke-dasharray 0.5s ease'
          }}
        />
      </svg>
      <div 
        className="absolute inset-0 flex items-center justify-center text-sm font-semibold"
        style={{ color }}
      >
        {score}%
      </div>
    </div>
  );
};