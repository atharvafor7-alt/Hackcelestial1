import { LucideIcon, ArrowUpRight, ArrowDownRight, Minus } from "lucide-react";
import { Sparkline } from "./Sparkline";
import { cn } from "@/lib/utils";

const iconBg: Record<string, string> = {
  blue: "bg-brand-blue/15 text-brand-blue",
  cyan: "bg-brand-cyan/15 text-brand-cyan",
  purple: "bg-brand-purple/15 text-brand-purple",
  green: "bg-brand-green/15 text-brand-green",
  amber: "bg-brand-amber/15 text-brand-amber",
  red: "bg-brand-red/15 text-brand-red",
};

export function KpiCard({
  icon: Icon,
  label,
  display,
  sub,
  trend,
  trendUp,
  color,
  spark,
}: {
  icon: LucideIcon;
  label: string;
  display: string;
  sub: string;
  trend: string;
  trendUp: boolean | null;
  color: string;
  spark: number[];
}) {
  return (
    <div className="glass-card animate-fade-up rounded-2xl p-5 transition-transform hover:-translate-y-0.5">
      <div className="flex items-start justify-between">
        <div className={cn("flex h-9 w-9 items-center justify-center rounded-xl", iconBg[color])}>
          <Icon className="h-[18px] w-[18px]" />
        </div>
        {trendUp !== null && (
          <span
            className={cn(
              "flex items-center gap-0.5 text-xs font-medium",
              trendUp ? "text-brand-green" : "text-brand-red",
            )}
          >
            {trendUp ? <ArrowUpRight className="h-3.5 w-3.5" /> : <ArrowDownRight className="h-3.5 w-3.5" />}
          </span>
        )}
      </div>
      <div className="mt-3 text-2xl font-bold tracking-tight">{display}</div>
      <div className="text-xs text-muted-foreground">{label}</div>
      <p className="mt-2 text-xs text-muted-foreground">{sub}</p>
      <div className="mt-2 flex items-center gap-1 text-xs font-medium">
        {trendUp === null ? (
          <Minus className="h-3 w-3 text-muted-foreground" />
        ) : trendUp ? (
          <ArrowUpRight className="h-3 w-3 text-brand-green" />
        ) : (
          <ArrowDownRight className="h-3 w-3 text-brand-red" />
        )}
        <span
          className={cn(
            trendUp === true && "text-brand-green",
            trendUp === false && "text-brand-red",
            trendUp === null && "text-muted-foreground",
          )}
        >
          {trend}
        </span>
      </div>
      <div className="mt-3 -mx-1">
        <Sparkline data={spark} color={color} />
      </div>
    </div>
  );
}
