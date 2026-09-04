import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AttendeePlanner from "./pages/AttendeePlanner";
import { AppLayout } from "@/components/layout/AppLayout";
import { PlaceholderPage } from "@/components/eventflow/PlaceholderPage";

const queryClient = new QueryClient();

const placeholderPages = [
  {
    path: "/live-map",
    title: "Live Map",
    description: "Explore real-time visitor density, transport routes, venue locations, and predicted hotspots across Mumbai.",
  },
  {
    path: "/demand-forecast",
    title: "Demand Forecasting",
    description: "Compare actual demand with AI forecasts, confidence bands, predicted peaks, and what-if simulations.",
  },
  {
    path: "/accommodation",
    title: "Accommodation Intelligence",
    description: "Monitor destination inventory, hotel availability, pricing, occupancy, and the best alternative zones.",
  },
  {
    path: "/transport",
    title: "Transport Command Center",
    description: "Optimize routes across Metro, Bus, Shuttle, Airport, Roads, and Ride-hailing networks.",
  },
  {
    path: "/venues",
    title: "Venue Management",
    description: "Track capacity, entry and exit rates, queue length, predicted peaks, and operational risk for every venue.",
  },
  {
    path: "/recommendations",
    title: "AI Operations Advisor",
    description: "Review recommended interventions based on demand, capacity, mobility, and visitor behavior.",
  },
  {
    path: "/alerts",
    title: "Alert Center",
    description: "Monitor critical conditions, predicted impacts, and recommended operator responses in one place.",
  },
];

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppLayout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/planner" element={<AttendeePlanner />} />
            {placeholderPages.map((page) => (
              <Route
                key={page.path}
                path={page.path}
                element={<PlaceholderPage title={page.title} description={page.description} />}
              />
            ))}
            <Route path="*" element={<PlaceholderPage title="Page not found" description="This EventFlow AI route does not exist yet." />} />
          </Routes>
        </AppLayout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
