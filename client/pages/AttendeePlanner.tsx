import { useState } from "react";
import { Sparkles, MapPin, Clock, TrendingDown, IndianRupee, Users2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { stayAreas, plannerVenues } from "@/lib/eventflow-data";
import { cn } from "@/lib/utils";

const preferenceOptions = ["Cheapest", "Fastest", "Least crowded", "Most convenient"];

const itinerary = [
  { time: "4:40 PM", step: "Leave hotel" },
  { time: "4:52 PM", step: "Reach Metro Station" },
  { time: "5:10 PM", step: "Metro" },
  { time: "5:28 PM", step: "Shuttle" },
  { time: "5:40 PM", step: "Arrive at venue" },
];

const alternatives = [
  { label: "Fastest", time: "34 min", note: "Airport Line + Taxi" },
  { label: "Cheapest", time: "52 min", note: "Bus + Metro" },
  { label: "Least crowded", time: "44 min", note: "Metro (off-peak) + Walk" },
];

export default function AttendeePlanner() {
  const [stay, setStay] = useState(stayAreas[0]);
  const [venue, setVenue] = useState(plannerVenues[0]);
  const [arrival, setArrival] = useState("18:00");
  const [prefs, setPrefs] = useState<string[]>(["Least crowded"]);
  const [showResults, setShowResults] = useState(false);

  function togglePref(p: string) {
    setPrefs((prev) => (prev.includes(p) ? prev.filter((x) => x !== p) : [...prev, p]));
  }

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <div className="space-y-2 animate-fade-up">
        <div className="flex items-center gap-2 text-brand-blue">
          <Sparkles className="h-5 w-5" />
          <span className="text-xs font-semibold uppercase tracking-wide">EventFlow AI · Attendee Planner</span>
        </div>
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">Plan Your Event Day</h1>
        <p className="text-sm text-muted-foreground">
          Let EventFlow AI find the best combination of accommodation, transport, and timing.
        </p>
      </div>

      <div className="glass-card animate-fade-up space-y-5 rounded-2xl p-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-xs font-medium text-muted-foreground">
              Where are you staying?
            </label>
            <Select value={stay} onValueChange={setStay}>
              <SelectTrigger className="bg-secondary/40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {stayAreas.map((a) => (
                  <SelectItem key={a} value={a}>
                    {a}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-medium text-muted-foreground">
              Which venue are you visiting?
            </label>
            <Select value={venue} onValueChange={setVenue}>
              <SelectTrigger className="bg-secondary/40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {plannerVenues.map((v) => (
                  <SelectItem key={v} value={v}>
                    {v}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div>
          <label className="mb-1.5 block text-xs font-medium text-muted-foreground">
            Arrival time
          </label>
          <input
            type="time"
            value={arrival}
            onChange={(e) => setArrival(e.target.value)}
            className="w-full rounded-lg border border-input bg-secondary/40 px-3 py-2 text-sm outline-none focus:border-brand-blue sm:w-48"
          />
        </div>

        <div>
          <label className="mb-2 block text-xs font-medium text-muted-foreground">Preferences</label>
          <div className="flex flex-wrap gap-2">
            {preferenceOptions.map((p) => (
              <button
                key={p}
                onClick={() => togglePref(p)}
                className={cn(
                  "rounded-full border px-3 py-1.5 text-xs font-medium transition-colors",
                  prefs.includes(p)
                    ? "border-brand-blue bg-brand-blue/15 text-brand-blue"
                    : "border-border text-muted-foreground hover:border-brand-blue/40",
                )}
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        <Button
          onClick={() => setShowResults(true)}
          className="w-full bg-gradient-to-r from-brand-blue to-brand-purple hover:opacity-90 sm:w-auto"
        >
          Build My Plan
        </Button>
      </div>

      {showResults && (
        <div className="glass-card animate-fade-up space-y-6 rounded-2xl p-6">
          <h2 className="text-lg font-semibold">Your Recommended Plan</h2>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-border bg-secondary/30 p-4">
              <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                <MapPin className="h-3.5 w-3.5" /> Stay
              </div>
              <p className="mt-1 text-lg font-semibold">{stay}</p>
              <p className="text-xs text-brand-green">Hotel availability: High</p>
            </div>
            <div className="rounded-xl border border-border bg-secondary/30 p-4">
              <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                <Clock className="h-3.5 w-3.5" /> Travel
              </div>
              <p className="mt-1 text-lg font-semibold">{stay} → {venue.split(" ")[0]}</p>
              <p className="text-xs text-muted-foreground">Metro + Shuttle · 38 min · Crowd: Low</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div>
              <p className="text-xs text-muted-foreground">Recommended departure</p>
              <p className="text-sm font-semibold">4:40 PM</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Avoids peak</p>
              <p className="text-sm font-semibold text-brand-green">Yes</p>
            </div>
            <div className="flex items-center gap-1">
              <IndianRupee className="h-3.5 w-3.5 text-brand-green" />
              <div>
                <p className="text-xs text-muted-foreground">Est. savings</p>
                <p className="text-sm font-semibold text-brand-green">₹850</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <Users2 className="h-3.5 w-3.5 text-brand-cyan" />
              <div>
                <p className="text-xs text-muted-foreground">Crowd reduction</p>
                <p className="text-sm font-semibold text-brand-cyan">32%</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold">Itinerary</h3>
            <div className="space-y-3 border-l border-border pl-4">
              {itinerary.map((step, i) => (
                <div key={i} className="relative">
                  <span className="absolute -left-[21px] top-1 h-2.5 w-2.5 rounded-full bg-brand-blue" />
                  <p className="text-sm">
                    <span className="font-semibold">{step.time}</span> — {step.step}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-3 flex items-center gap-1.5 text-sm font-semibold">
              <TrendingDown className="h-4 w-4 text-brand-cyan" /> Alternative Options
            </h3>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {alternatives.map((alt) => (
                <button
                  key={alt.label}
                  className="rounded-xl border border-border bg-secondary/20 p-3 text-left transition-colors hover:border-brand-blue/40"
                >
                  <p className="text-xs font-medium text-brand-blue">{alt.label}</p>
                  <p className="mt-1 text-sm font-semibold">{alt.time}</p>
                  <p className="text-xs text-muted-foreground">{alt.note}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
