import {
  Users,
  Hotel,
  Bus,
  Building2,
  AlertTriangle,
  Activity,
  ArrowRight,
  Sparkles,
  Zap,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Button } from "@/components/ui/button";
import { KpiCard } from "@/components/eventflow/KpiCard";
import { CityMap } from "@/components/eventflow/CityMap";
import { StatusPill } from "@/components/eventflow/StatusPill";
import {
  kpis,
  riskTimeline,
  capacityHotspots,
  transportNetworks,
  transportDemandHistory,
  hotelInventory,
  hotelZones,
  aiRecommendations,
  alerts,
} from "@/lib/eventflow-data";

const kpiIcons = {
  demand: Users,
  hotel: Hotel,
  transport: Bus,
  venue: Building2,
  alerts: AlertTriangle,
  mobility: Activity,
};

const riskColor: Record<number, string> = {
  1: "bg-brand-green",
  2: "bg-brand-amber",
  3: "bg-orange-500",
  4: "bg-brand-red",
};

const priorityDot: Record<string, string> = {
  red: "bg-brand-red",
  amber: "bg-brand-amber",
  green: "bg-brand-green",
};

const priorityEmoji: Record<string, string> = {
  red: "🔴",
  amber: "🟠",
  green: "🟢",
};

export default function Index() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-2 animate-fade-up">
        <div className="flex items-center gap-2 text-xs font-medium text-brand-green">
          <span className="live-dot h-2 w-2 rounded-full bg-brand-green" />
          System Status: All systems operational
        </div>
        <h1 className="text-2xl font-bold tracking-tight text-glow-blue sm:text-3xl">
          Event Operations Command Center
        </h1>
        <p className="max-w-2xl text-sm text-muted-foreground">
          Real-time intelligence for accommodation, mobility, venues, and visitor demand.
        </p>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {kpis.map((kpi) => (
          <KpiCard
            key={kpi.key}
            icon={kpiIcons[kpi.key as keyof typeof kpiIcons]}
            label={kpi.label}
            display={kpi.display}
            sub={kpi.sub}
            trend={kpi.trend}
            trendUp={kpi.trendUp}
            color={kpi.color}
            spark={kpi.spark}
          />
        ))}
      </div>

      {/* AI Summary + Risk Timeline */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-5">
        <div className="glass-card animate-fade-up rounded-2xl p-6 lg:col-span-3">
          <div className="mb-3 flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand-blue to-brand-purple">
              <Sparkles className="h-4 w-4 text-white" />
            </div>
            <h2 className="text-sm font-semibold">AI Situation Summary</h2>
          </div>
          <p className="text-sm leading-relaxed text-foreground/90">
            Demand is increasing rapidly around Central Mumbai and the Exhibition District.
            Hotel occupancy in these zones is expected to exceed 95% between 6:00 PM and 9:00
            PM. Metro Line 1 is approaching 82% capacity. The system recommends redirecting
            approximately 8,000 visitors toward Western and Northern accommodation zones and
            encouraging off-peak arrivals between 3:00 PM and 5:00 PM.
          </p>
          <Button variant="link" className="mt-2 h-auto p-0 text-brand-blue">
            View AI Recommendations <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </div>

        <div className="glass-card animate-fade-up rounded-2xl p-6 lg:col-span-2">
          <h2 className="mb-4 text-sm font-semibold">Risk Timeline</h2>
          <div className="flex items-end justify-between gap-2">
            {riskTimeline.map((t) => (
              <div key={t.time} className="flex flex-1 flex-col items-center gap-2">
                <div
                  className={`h-16 w-full rounded-md ${riskColor[t.level]} opacity-80`}
                  style={{ height: `${t.level * 16 + 16}px` }}
                />
                <span className="text-[11px] text-muted-foreground">{t.time}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1 text-[11px] text-muted-foreground">
            {riskTimeline.filter((t) => t.label).map((t) => (
              <span key={t.time}>{t.label}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Map + Hotspots */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <h2 className="mb-3 text-sm font-semibold">Destination Capacity Map</h2>
          <CityMap />
        </div>
        <div className="glass-card animate-fade-up rounded-2xl p-5 lg:col-span-2">
          <h2 className="mb-4 text-sm font-semibold">Capacity Hotspots</h2>
          <div className="space-y-4">
            {capacityHotspots.map((h) => (
              <div key={h.name}>
                <div className="mb-1 flex items-center justify-between text-sm">
                  <span className="font-medium">{h.name}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground">{h.pressure}%</span>
                    <StatusPill>{h.status}</StatusPill>
                  </div>
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-secondary">
                  <div
                    className={`h-full rounded-full ${
                      h.pressure >= 90
                        ? "bg-brand-red"
                        : h.pressure >= 80
                          ? "bg-orange-500"
                          : "bg-brand-amber"
                    }`}
                    style={{ width: `${h.pressure}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Live Mobility */}
      <div className="glass-card animate-fade-up rounded-2xl p-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-sm font-semibold">Live Mobility Network</h2>
          <div className="flex items-center gap-1 rounded-full border border-border bg-secondary/40 p-1 text-xs">
            <button className="rounded-full bg-brand-blue px-3 py-1 font-medium text-white">Live</button>
            <button className="rounded-full px-3 py-1 text-muted-foreground">Forecast</button>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-5">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-1">
            {transportNetworks.map((t) => (
              <div key={t.name} className="rounded-xl border border-border bg-secondary/30 p-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{t.name}</span>
                  <span className="text-sm font-semibold">{t.capacity}%</span>
                </div>
                <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
                  <div
                    className={`h-full rounded-full ${
                      t.status === "red"
                        ? "bg-brand-red"
                        : t.status === "amber"
                          ? "bg-brand-amber"
                          : "bg-brand-green"
                    }`}
                    style={{ width: `${t.capacity}%` }}
                  />
                </div>
                <p className="mt-1.5 text-xs text-muted-foreground">{t.note}</p>
              </div>
            ))}
          </div>
          <div className="lg:col-span-3">
            <p className="mb-2 text-xs text-muted-foreground">Transportation demand — last 6 hours</p>
            <ResponsiveContainer width="100%" height={260}>
              <LineChart data={transportDemandHistory}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(217 25% 18%)" vertical={false} />
                <XAxis dataKey="time" stroke="hsl(215 20% 55%)" fontSize={11} tickLine={false} axisLine={false} />
                <YAxis stroke="hsl(215 20% 55%)" fontSize={11} tickLine={false} axisLine={false} />
                <Tooltip
                  contentStyle={{
                    background: "hsl(222 39% 9%)",
                    border: "1px solid hsl(217 25% 18%)",
                    borderRadius: 8,
                    fontSize: 12,
                  }}
                />
                <Line type="monotone" dataKey="metro" stroke="hsl(var(--brand-blue))" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="bus" stroke="hsl(var(--brand-cyan))" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="ride" stroke="hsl(var(--brand-purple))" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
            <div className="flex gap-4 text-[11px] text-muted-foreground">
              <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-brand-blue" />Metro</span>
              <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-brand-cyan" />Bus</span>
              <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-brand-purple" />Ride-hailing</span>
            </div>
          </div>
        </div>
      </div>

      {/* Accommodation Intelligence */}
      <div className="glass-card animate-fade-up rounded-2xl p-6">
        <h2 className="mb-4 text-sm font-semibold">Destination Hotel Inventory</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          <div>
            <p className="text-xl font-bold">{hotelInventory.total.toLocaleString()}</p>
            <p className="text-xs text-muted-foreground">Total rooms</p>
          </div>
          <div>
            <p className="text-xl font-bold text-brand-green">{hotelInventory.available.toLocaleString()}</p>
            <p className="text-xs text-muted-foreground">Available</p>
          </div>
          <div>
            <p className="text-xl font-bold">{hotelInventory.occupied.toLocaleString()}</p>
            <p className="text-xs text-muted-foreground">Occupied</p>
          </div>
          <div>
            <p className="text-xl font-bold">{hotelInventory.avgOccupancy}%</p>
            <p className="text-xs text-muted-foreground">Average occupancy</p>
          </div>
        </div>

        <div className="mt-5 flex h-4 w-full overflow-hidden rounded-full">
          <div className="bg-brand-green" style={{ width: `${(hotelInventory.available / hotelInventory.total) * 100}%` }} />
          <div className="bg-brand-blue" style={{ width: `${(hotelInventory.occupied / hotelInventory.total) * 100}%` }} />
          <div className="bg-brand-purple" style={{ width: `${(hotelInventory.reserved / hotelInventory.total) * 100}%` }} />
          <div className="bg-muted-foreground/50" style={{ width: `${(hotelInventory.blocked / hotelInventory.total) * 100}%` }} />
        </div>
        <div className="mt-2 flex flex-wrap gap-4 text-[11px] text-muted-foreground">
          <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-brand-green" />Available</span>
          <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-brand-blue" />Occupied</span>
          <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-brand-purple" />Reserved</span>
          <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-muted-foreground/50" />Blocked</span>
        </div>

        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-border text-xs text-muted-foreground">
                <th className="py-2 pr-4 font-medium">Zone</th>
                <th className="py-2 pr-4 font-medium">Hotels</th>
                <th className="py-2 pr-4 font-medium">Rooms Available</th>
                <th className="py-2 pr-4 font-medium">Occupancy</th>
                <th className="py-2 pr-4 font-medium">Demand</th>
                <th className="py-2 pr-4 font-medium">Risk</th>
              </tr>
            </thead>
            <tbody>
              {hotelZones.map((z) => (
                <tr key={z.zone} className="border-b border-border/60 last:border-0">
                  <td className="py-2.5 pr-4 font-medium">{z.zone}</td>
                  <td className="py-2.5 pr-4 text-muted-foreground">{z.hotels}</td>
                  <td className="py-2.5 pr-4 text-muted-foreground">{z.available.toLocaleString()}</td>
                  <td className="py-2.5 pr-4">{z.occupancy}%</td>
                  <td className="py-2.5 pr-4 text-muted-foreground">{z.demand}</td>
                  <td className="py-2.5 pr-4"><StatusPill>{z.risk}</StatusPill></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Button variant="outline" className="mt-4 border-border">
          Explore Alternative Zones
        </Button>
      </div>

      {/* AI Recommendations */}
      <div>
        <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold">
          <Zap className="h-5 w-5 text-brand-blue" /> AI Recommended Actions
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {aiRecommendations.map((r) => (
            <div key={r.title} className="glass-card animate-fade-up flex flex-col rounded-2xl p-5">
              <span className="mb-2 inline-flex items-center gap-1.5 text-xs font-semibold">
                <span className={`h-2 w-2 rounded-full ${priorityDot[r.priorityColor]}`} />
                {priorityEmoji[r.priorityColor]} {r.priority}
              </span>
              <h3 className="text-sm font-semibold">{r.title}</h3>
              <p className="mt-1.5 flex-1 text-xs text-muted-foreground">{r.detail}</p>
              <div className="mt-3 flex items-center justify-between text-xs">
                <div>
                  <p className="text-muted-foreground">{r.impactLabel}</p>
                  <p className="font-semibold">{r.impact}</p>
                </div>
                <div className="text-right">
                  <p className="text-muted-foreground">Confidence</p>
                  <p className="font-semibold">{r.confidence}%</p>
                </div>
              </div>
              <Button
                size="sm"
                className="mt-4 bg-brand-blue hover:bg-brand-blue/90"
              >
                {r.action}
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Alert Center */}
      <div>
        <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold">
          <AlertTriangle className="h-5 w-5 text-brand-red" /> Alert Center
        </h2>
        <div className="space-y-3">
          {alerts.map((a, i) => (
            <div
              key={i}
              className="glass-card animate-fade-up flex flex-col gap-3 rounded-xl p-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex items-start gap-3">
                <StatusPill color={a.severity === "Critical" ? "red" : "amber"}>
                  {a.severity}
                </StatusPill>
                <div>
                  <p className="text-sm font-medium">
                    {a.location} · {a.issue}
                  </p>
                  <p className="mt-0.5 text-xs text-muted-foreground">{a.impact}</p>
                  <p className="mt-1 text-[11px] text-muted-foreground/70">{a.time}</p>
                </div>
              </div>
              <div className="flex gap-2 sm:shrink-0">
                <Button variant="outline" size="sm" className="border-border">
                  View Zone
                </Button>
                <Button size="sm" className="bg-brand-blue hover:bg-brand-blue/90">
                  See Recommendations
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
