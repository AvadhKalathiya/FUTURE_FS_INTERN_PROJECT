'use client';

import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

interface Lead {
  _id: string;
  status: string;
  [key: string]: any;
}

interface LeadChartProps {
  leads: Lead[];
}

const STATUS_COLORS: Record<string, string> = {
  new: '#3b82f6',
  contacted: '#06b6d4',
  qualified: '#10b981',
  won: '#8b5cf6',
  lost: '#ef4444',
};

export function LeadChart({ leads }: LeadChartProps) {
  const statusCounts = leads.reduce(
    (acc, lead) => {
      const status = lead.status || 'new';
      acc[status] = (acc[status] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>
  );

  const data = Object.entries(statusCounts).map(([name, value]) => ({
    name: name.charAt(0).toUpperCase() + name.slice(1),
    value,
  }));

  if (data.length === 0) {
    return (
      <div className="flex items-center justify-center h-80 text-muted-foreground">
        No leads yet. Start by creating your first lead!
      </div>
    );
  }

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={({ name, value }) => `${name}: ${value}`}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={STATUS_COLORS[entry.name.toLowerCase()] || '#8884d8'} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
}
