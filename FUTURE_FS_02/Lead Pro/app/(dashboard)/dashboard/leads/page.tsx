'use client';

import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LeadsTable } from '@/components/dashboard/leads-table';
import { CreateLeadDialog } from '@/components/dashboard/create-lead-dialog';
import { Plus } from 'lucide-react';
import { toast } from 'sonner';

interface Lead {
  id?: string;
  _id?: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  status: 'new' | 'contacted' | 'qualified' | 'won' | 'lost';
  value: number;
  notes: string;
  createdAt: string;
}

export default function LeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

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
      toast.error('Failed to load leads');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLeadCreated = (newLead: Lead) => {
    setLeads([newLead, ...leads]);
    setIsDialogOpen(false);
    toast.success('Lead created successfully');
  };

  const handleLeadDeleted = (leadId: string) => {
    setLeads(leads.filter(lead => (lead.id || lead._id) !== leadId));
    toast.success('Lead deleted successfully');
  };

  const handleLeadUpdated = (updatedLead: Lead) => {
    setLeads(leads.map(lead => 
      (lead.id || lead._id) === (updatedLead.id || updatedLead._id) ? updatedLead : lead
    ));
    toast.success('Lead updated successfully');
  };

  return (
    <div className="p-8 space-y-8 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-white">Sales Leads</h1>
          <p className="text-slate-400 mt-2">Manage and track all your sales opportunities</p>
        </div>
        <Button
          onClick={() => setIsDialogOpen(true)}
          className="gap-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold px-6 py-2.5 rounded-lg shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-200"
        >
          <Plus size={20} />
          Add Lead
        </Button>
      </div>

      {/* Table Card */}
      <div className="animate-slide-up">
        <Card className="p-6 bg-card border border-slate-700/50 shadow-xl">
          <LeadsTable
            leads={leads}
            isLoading={isLoading}
            onDelete={handleLeadDeleted}
            onUpdate={handleLeadUpdated}
          />
        </Card>
      </div>

      <CreateLeadDialog
        isOpen={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        onLeadCreated={handleLeadCreated}
      />
    </div>
  );
}
