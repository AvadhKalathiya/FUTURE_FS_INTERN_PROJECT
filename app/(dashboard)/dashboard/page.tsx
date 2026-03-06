'use client';

import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { StatCard } from '@/components/dashboard/stat-card';
import { LeadChart } from '@/components/dashboard/lead-chart';
import { Users, TrendingUp, DollarSign, CheckCircle } from 'lucide-react';

interface Lead {
  _id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  status: string;
  value: number;
  createdAt: string;
}

export default function DashboardPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = async () => {
    try {
      const response = await fetch('/api/leads');
      const data = await response.json();
      setLeads(data.leads || []);
    } catch (error) {
      console.error('[v0] Error fetching leads:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const stats = [
    {
      label: 'Total Leads',
      value: leads.length,
      icon: Users,
      color: 'bg-blue-500',
    },
    {
      label: 'Qualified',
      value: leads.filter(l => l.status === 'qualified').length,
      icon: CheckCircle,
      color: 'bg-green-500',
    },
    {
      label: 'Total Value',
      value: `$${leads.reduce((sum, l) => sum + l.value, 0).toLocaleString()}`,
      icon: DollarSign,
      color: 'bg-purple-500',
    },
    {
      label: 'Conversion Rate',
      value: leads.length > 0 
        ? `${Math.round((leads.filter(l => l.status === 'won').length / leads.length) * 100)}%`
        : '0%',
      icon: TrendingUp,
      color: 'bg-orange-500',
    },
  ];

  return (
    <div className="p-8 space-y-8 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold text-white">Sales Dashboard</h1>
          <p className="text-slate-400 mt-2">Welcome back! Here's your sales overview and key metrics.</p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 50}ms` }}>
            <StatCard {...stat} />
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="animate-slide-up" style={{ animationDelay: '200ms' }}>
        <Card className="p-6 bg-card border border-slate-700/50 shadow-xl">
          <h2 className="text-xl font-semibold text-white mb-6">Lead Status Overview</h2>
          <LeadChart leads={leads} />
        </Card>
      </div>
    </div>
  );
}
