import { useState } from "react";
import { Sparkles, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Message = { role: "user" | "ai"; text: string };

const suggestions = [
  "Where should I stay if BKC is full?",
  "What's the least crowded way to reach the stadium?",
  "Which areas have the most hotel availability?",
  "Should I travel now or wait?",
];

function respond(question: string): string {
  const q = question.toLowerCase();
  if (q.includes("stay") || q.includes("hotel") || q.includes("bkc")) {
    return "BKC is at 96% occupancy with only 310 rooms left. I'd recommend Powai (72% occupancy, 1,980 available) or Navi Mumbai (64% occupancy, 2,840 available) — both are under 40 minutes from BKC via Metro + Shuttle.";
  }
  if (q.includes("crowd") || q.includes("stadium") || q.includes("venue")) {
    return "Wankhede Stadium is trending toward critical (94% of capacity by 8:30 PM). Arriving before 6:00 PM or after using the Andheri approach route keeps crowd exposure lowest.";
  }
  if (q.includes("available") || q.includes("availability")) {
    return "Navi Mumbai (2,840 rooms) and Powai (1,980 rooms) currently have the most availability, both rated 'Healthy' or 'Opportunity' risk.";
  }
  if (q.includes("travel") || q.includes("wait") || q.includes("now")) {
    return "Metro Line 1 is at 82% and climbing. I'd suggest waiting until 4:30–5:00 PM to travel — that avoids the predicted 6–8 PM surge and cuts your congestion exposure by roughly 20%.";
  }
  return "Based on current event telemetry, demand is concentrated around BKC and the Exhibition District. I recommend checking the Recommendations page for the latest AI-generated actions, or ask me about accommodation, transport, or crowd levels.";
}

export function AiAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "ai",
      text: "Hi, I'm EventFlow AI. Ask me about accommodation, transport, crowd levels, or timing for the Mumbai International Sports Festival.",
    },
  ]);
  const [input, setInput] = useState("");

  function send(text: string) {
    if (!text.trim()) return;
    setMessages((m) => [...m, { role: "user", text }, { role: "ai", text: respond(text) }]);
    setInput("");
  }

  return (
    <>
      <div
        className={cn(
          "fixed bottom-5 right-5 z-50 flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-2xl transition-all duration-200",
          open
            ? "h-[520px] w-[360px] opacity-100"
            : "h-0 w-0 opacity-0 pointer-events-none",
        )}
      >
        <div className="flex items-center justify-between border-b border-border bg-secondary/60 px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-blue/20 text-brand-blue">
              <Sparkles className="h-4 w-4" />
            </div>
            <span className="text-sm font-semibold">Ask EventFlow AI</span>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="rounded-md p-1 text-muted-foreground hover:bg-secondary hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="flex-1 space-y-3 overflow-y-auto px-4 py-3">
          {messages.map((m, i) => (
            <div
              key={i}
              className={cn(
                "max-w-[85%] rounded-xl px-3 py-2 text-sm leading-relaxed animate-fade-up",
                m.role === "ai"
                  ? "bg-secondary text-foreground"
                  : "ml-auto bg-brand-blue text-white",
              )}
            >
              {m.text}
            </div>
          ))}
        </div>

        {messages.length <= 1 && (
          <div className="flex flex-wrap gap-1.5 border-t border-border px-3 py-2">
            {suggestions.map((s) => (
              <button
                key={s}
                onClick={() => send(s)}
                className="rounded-full border border-border bg-secondary/50 px-2.5 py-1 text-[11px] text-muted-foreground hover:border-brand-blue/40 hover:text-foreground"
              >
                {s}
              </button>
            ))}
          </div>
        )}

        <form
          onSubmit={(e) => {
            e.preventDefault();
            send(input);
          }}
          className="flex items-center gap-2 border-t border-border p-3"
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about accommodation, transport, timing..."
            className="flex-1 rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:border-brand-blue"
          />
          <Button type="submit" size="icon" className="shrink-0 bg-brand-blue hover:bg-brand-blue/90">
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </div>

      <button
        onClick={() => setOpen((o) => !o)}
        className={cn(
          "fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-blue to-brand-purple px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-blue/25 transition-transform hover:scale-105",
          open && "hidden",
        )}
      >
        <Sparkles className="h-4 w-4" />
        Ask EventFlow AI
      </button>
    </>
  );
}
