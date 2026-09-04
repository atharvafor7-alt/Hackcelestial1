import { useState } from "react";
import { Plus, Minus, Maximize2, Layers } from "lucide-react";
import { mapZones } from "@/lib/eventflow-data";
import { cn } from "@/lib/utils";

const statusDot: Record<string, string> = {
  green: "bg-brand-green",
  yellow: "bg-brand-amber",
  orange: "bg-orange-500",
  red: "bg-brand-red",
};

const statusRing: Record<string, string> = {
  green: "shadow-[0_0_0_6px_hsl(var(--brand-green)/0.15)]",
  yellow: "shadow-[0_0_0_6px_hsl(38_92%_50%/0.18)]",
  orange: "shadow-[0_0_0_6px_rgba(249,115,22,0.18)]",
  red: "shadow-[0_0_0_6px_hsl(var(--brand-red)/0.2)]",
};

const layerToggles = ["Traffic", "Hotels", "Venues", "Visitors", "Transport"];

export function CityMap({
  onSelectZone,
  height = "h-[460px]",
}: {
  onSelectZone?: (zoneId: string) => void;
  height?: string;
}) {
  const [activeLayers, setActiveLayers] = useState<string[]>(["Hotels", "Transport"]);
  const [selected, setSelected] = useState<string | null>(null);

  function toggleLayer(l: string) {
    setActiveLayers((prev) => (prev.includes(l) ? prev.filter((x) => x !== l) : [...prev, l]));
  }

  return (
    <div className={cn("relative overflow-hidden rounded-2xl border border-border bg-grid", height)}>
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f1c] via-[#0b1220] to-[#0a1526]" />

      <svg className="absolute inset-0 h-full w-full opacity-40" preserveAspectRatio="none">
        <path
          d="M 10,20 L 45,55 L 66,46"
          stroke="hsl(var(--brand-cyan))"
          strokeWidth="1"
          strokeDasharray="4 4"
          fill="none"
          vectorEffect="non-scaling-stroke"
          transform="scale(1)"
        />
      </svg>

      {mapZones.map((zone) => (
        <button
          key={zone.id}
          onClick={() => {
            setSelected(zone.id);
            onSelectZone?.(zone.id);
          }}
          style={{ left: `${zone.x}%`, top: `${zone.y}%` }}
          className="group absolute -translate-x-1/2 -translate-y-1/2"
        >
          <span
            className={cn(
              "block h-4 w-4 rounded-full transition-transform group-hover:scale-125",
              statusDot[zone.status],
              statusRing[zone.status],
              selected === zone.id && "ring-2 ring-white/70",
            )}
          />
          <span className="absolute left-1/2 top-full mt-1 -translate-x-1/2 whitespace-nowrap rounded-md bg-black/80 px-2 py-1 text-[11px] font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">
            {zone.name} · {zone.pressure}%
          </span>
        </button>
      ))}

      <div className="absolute left-3 top-3 flex flex-col gap-1.5">
        <button className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-black/40 text-white hover:bg-black/60">
          <Plus className="h-4 w-4" />
        </button>
        <button className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-black/40 text-white hover:bg-black/60">
          <Minus className="h-4 w-4" />
        </button>
        <button className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-black/40 text-white hover:bg-black/60">
          <Maximize2 className="h-4 w-4" />
        </button>
      </div>

      <div className="absolute right-3 top-3 flex items-center gap-1.5 rounded-lg border border-white/10 bg-black/40 p-1.5">
        <Layers className="ml-1 h-4 w-4 text-white/70" />
        {layerToggles.map((l) => (
          <button
            key={l}
            onClick={() => toggleLayer(l)}
            className={cn(
              "rounded-md px-2 py-1 text-[11px] font-medium transition-colors",
              activeLayers.includes(l)
                ? "bg-brand-blue text-white"
                : "text-white/60 hover:bg-white/10",
            )}
          >
            {l}
          </button>
        ))}
      </div>

      <div className="absolute bottom-3 left-3 flex items-center gap-3 rounded-lg border border-white/10 bg-black/40 px-3 py-1.5 text-[11px] text-white/80">
        <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-brand-green" /> Healthy</span>
        <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-brand-amber" /> Rising</span>
        <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-orange-500" /> High</span>
        <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-brand-red" /> Critical</span>
      </div>
    </div>
  );
}
