interface StatBarProps {
  label: string;
  homeValue: number;
  awayValue: number;
  isPercentage?: boolean;
}

export default function StatBar({ label, homeValue, awayValue, isPercentage = false }: StatBarProps) {
  const total = homeValue + awayValue;
  const homeWidth = total === 0 ? 50 : (homeValue / total) * 100;
  
  return (
    <div className="mb-6">
      <div className="flex justify-between text-xs font-bold uppercase tracking-wider mb-2 text-zinc-400">
        <span>{homeValue}{isPercentage ? '%' : ''}</span>
        <span>{label}</span>
        <span>{awayValue}{isPercentage ? '%' : ''}</span>
      </div>
      <div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden flex">
        <div 
          style={{ width: `${homeWidth}%` }} 
          className="h-full bg-arsenal-red"
        />
        <div 
          style={{ width: `${100 - homeWidth}%` }} 
          className="h-full bg-zinc-600"
        />
      </div>
    </div>
  );
}
