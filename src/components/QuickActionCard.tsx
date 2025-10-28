import { Lock, Zap, LifeBuoy, CheckCircle2, LucideIcon } from 'lucide-react';

interface QuickActionCardProps {
  icon: string;
  label: string;
  onClick: () => void;
}

const iconMap: Record<string, LucideIcon> = {
  Lock,
  Zap,
  LifeBuoy,
  CheckCircle2
};

export default function QuickActionCard({ icon, label, onClick }: QuickActionCardProps) {
  const IconComponent = iconMap[icon];

  return (
    <button
      onClick={onClick}
      className="flex items-center gap-3 p-4 bg-white border border-slate-200 rounded-xl hover:-translate-y-1 hover:shadow-lg hover:border-indigo-300 transition-all duration-300 group"
    >
      <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center group-hover:bg-indigo-100 transition-colors">
        <IconComponent className="w-5 h-5 text-indigo-600" />
      </div>
      <span className="text-sm font-medium text-slate-700 group-hover:text-indigo-600 transition-colors">
        {label}
      </span>
    </button>
  );
}
