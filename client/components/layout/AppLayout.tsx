import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Map,
  TrendingUp,
  Hotel,
  Bus,
  Building2,
  Sparkles,
  Bell,
  Users,
  Menu,
  X,
  ChevronDown,
  CalendarDays,
  MapPin,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { activeEvent } from "@/lib/eventflow-data";
import { AiAssistant } from "@/components/eventflow/AiAssistant";
import { Switch } from "@/components/ui/switch";

const navItems = [
  { label: "Overview", to: "/", icon: LayoutDashboard },
  { label: "Live Map", to: "/live-map", icon: Map },
  { label: "Demand Forecast", to: "/demand-forecast", icon: TrendingUp },
  { label: "Accommodation", to: "/accommodation", icon: Hotel },
  { label: "Transport", to: "/transport", icon: Bus },
  { label: "Venues", to: "/venues", icon: Building2 },
  { label: "Recommendations", to: "/recommendations", icon: Sparkles },
  { label: "Alerts", to: "/alerts", icon: Bell },
  { label: "Attendee Planner", to: "/planner", icon: Users },
];

function SidebarContent({ onNavigate }: { onNavigate?: () => void }) {
  const location = useLocation();
  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center gap-2.5 px-5 py-5">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue to-brand-cyan shadow-lg shadow-brand-blue/30">
          <Sparkles className="h-5 w-5 text-white" />
        </div>
        <div>
          <div className="text-sm font-bold leading-none tracking-tight">EventFlow AI</div>
          <div className="text-[11px] text-muted-foreground">Operations Console</div>
        </div>
      </div>

      <nav className="flex-1 space-y-1 px-3 py-2">
        {navItems.map((item) => {
          const active = location.pathname === item.to;
          const Icon = item.icon;
          return (
            <Link
              key={item.to}
              to={item.to}
              onClick={onNavigate}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                active
                  ? "bg-brand-blue/15 text-brand-blue"
                  : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-foreground",
              )}
            >
              <Icon className="h-[18px] w-[18px]" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="mx-3 mb-4 rounded-xl border border-border bg-secondary/40 p-3">
        <div className="flex items-center gap-2 text-xs font-semibold text-brand-green">
          <span className="live-dot h-2 w-2 rounded-full bg-brand-green" />
          System Status
        </div>
        <p className="mt-1 text-xs text-muted-foreground">All systems operational</p>
      </div>
    </div>
  );
}

export function AppLayout({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [demoMode, setDemoMode] = useState(true);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-[240px] border-r border-sidebar-border bg-sidebar lg:block">
        <SidebarContent />
      </aside>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-black/60" onClick={() => setMobileOpen(false)} />
          <div className="absolute inset-y-0 left-0 w-[260px] bg-sidebar shadow-2xl">
            <button
              className="absolute right-3 top-4 rounded-md p-1 text-muted-foreground hover:bg-sidebar-accent"
              onClick={() => setMobileOpen(false)}
            >
              <X className="h-5 w-5" />
            </button>
            <SidebarContent onNavigate={() => setMobileOpen(false)} />
          </div>
        </div>
      )}

      <div className="lg:pl-[240px]">
        <header className="sticky top-0 z-20 border-b border-border bg-background/95 backdrop-blur">
          <div className="flex h-16 items-center gap-3 px-4 lg:px-6">
            <button
              className="rounded-md p-2 text-muted-foreground hover:bg-secondary lg:hidden"
              onClick={() => setMobileOpen(true)}
            >
              <Menu className="h-5 w-5" />
            </button>

            <button className="flex min-w-0 items-center gap-2 rounded-lg border border-border bg-secondary/50 px-3 py-1.5 text-left hover:border-brand-blue/40">
              <span className="truncate text-sm font-medium">{activeEvent.name}</span>
              <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground" />
            </button>

            <div className="hidden items-center gap-1.5 text-xs text-muted-foreground md:flex">
              <CalendarDays className="h-3.5 w-3.5" />
              {activeEvent.dates}
            </div>

            <div className="hidden items-center gap-1.5 text-xs text-muted-foreground lg:flex">
              <MapPin className="h-3.5 w-3.5" />
              {activeEvent.location}
            </div>

            <div className="ml-auto flex items-center gap-3">
              <div className="hidden items-center gap-2 rounded-full border border-border bg-secondary/40 px-3 py-1.5 sm:flex">
                <span className="text-xs font-medium text-muted-foreground">Demo Mode</span>
                <Switch checked={demoMode} onCheckedChange={setDemoMode} />
                {demoMode && (
                  <span className="flex items-center gap-1 text-[11px] font-semibold text-brand-red">
                    <span className="live-dot h-1.5 w-1.5 rounded-full bg-brand-red" /> LIVE
                  </span>
                )}
              </div>

              <button className="relative rounded-md p-2 text-muted-foreground hover:bg-secondary">
                <Bell className="h-5 w-5" />
                <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-brand-red" />
              </button>

              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-brand-purple to-brand-blue text-sm font-semibold text-white">
                OP
              </div>
            </div>
          </div>
        </header>

        <main className="mx-auto max-w-[1600px] px-4 py-6 lg:px-6">{children}</main>
      </div>

      <AiAssistant />
    </div>
  );
}
