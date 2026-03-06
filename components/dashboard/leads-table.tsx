'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { EditLeadDialog } from './edit-lead-dialog';
import { Trash2, Edit, Mail, Phone } from 'lucide-react';
import { toast } from 'sonner';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

interface Lead {
  id?: string;
  _id?: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  status: string;
  value: number;
  notes: string;
  createdAt: string;
}

interface LeadsTableProps {
  leads: Lead[];
  isLoading: boolean;
  onDelete: (leadId: string) => void;
  onUpdate: (lead: Lead) => void;
}

const STATUS_BADGE_COLORS: Record<string, string> = {
  new: 'bg-blue-500/15 text-blue-300 border border-blue-500/20',
  contacted: 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/20',
  qualified: 'bg-green-500/15 text-green-300 border border-green-500/20',
  negotiation: 'bg-amber-500/15 text-amber-300 border border-amber-500/20',
  won: 'bg-purple-500/15 text-purple-300 border border-purple-500/20',
  lost: 'bg-red-500/15 text-red-300 border border-red-500/20',
};

export function LeadsTable({ leads, isLoading, onDelete, onUpdate }: LeadsTableProps) {
  const [editingLead, setEditingLead] = useState<Lead | null>(null);
  const [isDeleting, setIsDeleting] = useState<string | null>(null);

  const handleDelete = async (leadId: string) => {
    setIsDeleting(leadId);
    try {
      const response = await fetch(`/api/leads/${leadId}`, { method: 'DELETE' });
      if (!response.ok) throw new Error('Failed to delete');
      onDelete(leadId);
    } catch (error) {
      toast.error('Failed to delete lead');
    } finally {
      setIsDeleting(null);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64 text-slate-400">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-4 border-slate-700 border-t-blue-500 rounded-full animate-spin"></div>
          <span>Loading leads...</span>
        </div>
      </div>
    );
  }

  if (leads.length === 0) {
    return (
      <div className="flex items-center justify-center h-64 text-slate-400">
        <div className="text-center">
          <p className="text-lg font-medium text-slate-300 mb-2">No leads yet</p>
          <p className="text-sm">Create your first lead to get started</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Company</TableHead>
              <TableHead>Contact</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Value</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {leads.map((lead) => (
              <TableRow key={lead.id || lead._id} className="hover:bg-slate-700/30 transition-colors">
                <TableCell className="font-medium text-white">{lead.name}</TableCell>
                <TableCell className="text-slate-300">{lead.company}</TableCell>
                <TableCell>
                  <div className="flex flex-col gap-1 text-sm">
                    <a href={`mailto:${lead.email}`} className="text-blue-400 hover:text-blue-300 hover:underline flex items-center gap-1">
                      <Mail size={14} />
                      {lead.email}
                    </a>
                    <a href={`tel:${lead.phone}`} className="text-slate-400 hover:text-slate-300 hover:underline flex items-center gap-1">
                      <Phone size={14} />
                      {lead.phone}
                    </a>
                  </div>
                </TableCell>
                <TableCell>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${STATUS_BADGE_COLORS[lead.status] || 'bg-gray-700 text-gray-300'}`}>
                    {lead.status.charAt(0).toUpperCase() + lead.status.slice(1)}
                  </span>
                </TableCell>
                <TableCell className="font-semibold text-white">₹{(lead.value / 100000).toFixed(1)}L</TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      className="bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 border border-blue-500/20"
                      onClick={() => setEditingLead(lead)}
                    >
                      <Edit size={16} />
                    </Button>
                    <Button
                      size="sm"
                      className="bg-red-500/20 text-red-300 hover:bg-red-500/30 border border-red-500/20"
                      onClick={() => handleDelete(lead.id || lead._id || '')}
                      disabled={isDeleting === (lead.id || lead._id)}
                    >
                      <Trash2 size={16} />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {editingLead && (
        <EditLeadDialog
          lead={editingLead}
          onClose={() => setEditingLead(null)}
          onUpdate={(updatedLead) => {
            onUpdate(updatedLead);
            setEditingLead(null);
          }}
        />
      )}
    </>
  );
}
