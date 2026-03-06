import { Card } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  label: string;
  value: string | number;
  icon: LucideIcon;
  color: string;
}

export function StatCard({ label, value, icon: Icon, color }: StatCardProps) {
  return (
    <Card className="p-6 bg-card border border-slate-700/50 hover:border-slate-600/50 hover:shadow-2xl transition-all duration-200 group cursor-pointer">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-slate-400 mb-2 group-hover:text-slate-300 transition-all duration-200">{label}</p>
          <p className="text-3xl font-bold text-white">{value}</p>
        </div>
        <div className={`${color} p-3 rounded-lg text-white shadow-lg opacity-90 group-hover:opacity-100 transition-all transform group-hover:scale-110`}>
          <Icon size={24} />
        </div>
      </div>
    </Card>
  );
}
