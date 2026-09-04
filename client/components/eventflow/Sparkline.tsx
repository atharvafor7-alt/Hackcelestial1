import { Area, AreaChart, ResponsiveContainer } from "recharts";

const strokeMap: Record<string, string> = {
  blue: "hsl(var(--brand-blue))",
  cyan: "hsl(var(--brand-cyan))",
  purple: "hsl(var(--brand-purple))",
  green: "hsl(var(--brand-green))",
  amber: "hsl(var(--brand-amber))",
  red: "hsl(var(--brand-red))",
};

export function Sparkline({
  data,
  color = "blue",
}: {
  data: number[];
  color?: string;
}) {
  const points = data.map((v, i) => ({ i, v }));
  const stroke = strokeMap[color] ?? strokeMap.blue;
  const gradientId = `spark-${color}`;

  return (
    <ResponsiveContainer width="100%" height={40}>
      <AreaChart data={points} margin={{ top: 2, right: 0, bottom: 0, left: 0 }}>
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={stroke} stopOpacity={0.4} />
            <stop offset="100%" stopColor={stroke} stopOpacity={0} />
          </linearGradient>
        </defs>
        <Area
          type="monotone"
          dataKey="v"
          stroke={stroke}
          strokeWidth={2}
          fill={`url(#${gradientId})`}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
