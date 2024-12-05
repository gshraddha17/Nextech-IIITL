"use client";

import Image from "next/image";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    income: 4000,
    expense: 2400,
  },
  {
    name: "Feb",
    income: 3000,
    expense: 1398,
  },
  {
    name: "Mar",
    income: 2000,
    expense: 9800,
  },
  {
    name: "Apr",
    income: 2780,
    expense: 3908,
  },
  {
    name: "May",
    income: 1890,
    expense: 4800,
  },
  {
    name: "Jun",
    income: 2390,
    expense: 3800,
  },
  {
    name: "Jul",
    income: 3490,
    expense: 4300,
  },
  {
    name: "Aug",
    income: 3490,
    expense: 4300,
  },
  {
    name: "Sep",
    income: 3490,
    expense: 4300,
  },
  {
    name: "Oct",
    income: 3490,
    expense: 4300,
  },
  {
    name: "Nov",
    income: 3490,
    expense: 4300,
  },
  {
    name: "Dec",
    income: 3490,
    expense: 4300,
  },
];

const FinanceChart = () => {
  return (
    <div className="bg-[#f0f5f9] rounded-xl w-full h-full p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-lg font-semibold text-gray-700">College Finance Management</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: "#6b7280" }}
            tickLine={false}
            tickMargin={10}
          />
          <YAxis 
            axisLine={false} 
            tick={{ fill: "#6b7280" }} 
            tickLine={false}  
            tickMargin={20}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: "#ffffff", 
              borderRadius: "8px", 
              border: "1px solid #e2e8f0" 
            }}
          />
          <Legend
            align="center"
            verticalAlign="top"
            wrapperStyle={{ 
              paddingTop: "10px", 
              paddingBottom: "30px",
              color: "#4a5568"
            }}
          />
          <Line
            type="monotone"
            dataKey="income"
            stroke="#3b82f6"  // Vibrant blue
            strokeWidth={4}
            dot={{ r: 6, fill: "#3b82f6", strokeWidth: 2, stroke: "#ffffff" }}
          />
          <Line 
            type="monotone" 
            dataKey="expense" 
            stroke="#10b981"  // Emerald green
            strokeWidth={4}
            dot={{ r: 6, fill: "#10b981", strokeWidth: 2, stroke: "#ffffff" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FinanceChart;