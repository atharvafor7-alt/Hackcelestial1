import { cn } from "@/lib/utils";

const colorMap: Record<string, string> = {
  green: "bg-brand-green/15 text-brand-green border-brand-green/30",
  amber: "bg-brand-amber/15 text-brand-amber border-brand-amber/30",
  red: "bg-brand-red/15 text-brand-red border-brand-red/30",
  blue: "bg-brand-blue/15 text-brand-blue border-brand-blue/30",
  cyan: "bg-brand-cyan/15 text-brand-cyan border-brand-cyan/30",
  purple: "bg-brand-purple/15 text-brand-purple border-brand-purple/30",
};

const statusColor: Record<string, string> = {
  Critical: "red",
  Warning: "amber",
  Healthy: "green",
  Opportunity: "cyan",
};

export function StatusPill({
  children,
  color,
  className,
}: {
  children: React.ReactNode;
  color?: keyof typeof colorMap;
  className?: string;
}) {
  const resolved =
    color ?? (statusColor[String(children)] as keyof typeof colorMap) ?? "blue";
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium",
        colorMap[resolved],
        className,
      )}
    >
      {children}
    </span>
  );
}
