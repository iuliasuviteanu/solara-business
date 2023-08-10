import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", uv: 15 },
  { name: "Feb", uv: 6 },
  { name: "Mar", uv: 15 },
  { name: "Apr", uv: 4 },
  { name: "May", uv: 25 },
  { name: "Jun", uv: 15 },
  { name: "Jul", uv: 6 },
  { name: "Aug", uv: 15 },
  { name: "Sep", uv: 4 },
  { name: "Oct", uv: 0 },
  { name: "Nov", uv: 20 },
  { name: "Dec", uv: 15 },
];

const SimpleAreaChart = () => {
  const customYAxisTicks = [5, 10, 15, 20, 25];

  const formatYAxisTick = (value: any) => `${value}$`;

  return (
    <div className="graphic">
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#10e557" stopOpacity={0.3} />
              <stop offset="100%" stopColor="#ccc" stopOpacity={0.01} />
            </linearGradient>
          </defs>
          {/* Background Gradient Area */}
          <Area
            type="monotone"
            dataKey="uv"
            fill="url(#colorUv)"
            stroke="transparent" // No stroke for the background gradient
          />
          {/* Actual Data Area */}
          <Area
            type="monotone"
            dataKey="uv"
            stroke="#43A463"
            strokeWidth={3}
            fill="url(#colorUv)"
          />
          <CartesianGrid strokeDasharray="5" />
          <XAxis dataKey="name" />
          <YAxis ticks={customYAxisTicks} tickFormatter={formatYAxisTick} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SimpleAreaChart;
