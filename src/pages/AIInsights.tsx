import { motion } from "framer-motion";
import { Sparkles, TrendingUp, AlertOctagon, MessageSquare, ShoppingCart } from "lucide-react";
import AppLayout from "@/components/AppLayout";
import { products } from "@/data/demo";

const reorderSuggestions = products
  .filter(p => p.quantity <= p.reorderPoint)
  .map(p => ({
    ...p,
    suggestedQty: p.reorderQty,
    estimatedCost: p.reorderQty * p.unitCost,
    urgency: p.quantity === 0 ? "critical" : "recommended",
  }));

const forecastData = [
  { product: "Industrial Cable Ties (100pk)", current: 18, day30: 0, day60: 0, day90: 0, trend: "Depleting fast — avg 12/week" },
  { product: "Pallet Wrap 500mm", current: 8, day30: 2, day60: 0, day90: 0, trend: "Steady consumption — 2/week" },
  { product: "Heavy Duty Shelf Bracket", current: 245, day30: 185, day60: 125, day90: 65, trend: "Normal — 20/week" },
  { product: "LED Panel Light 600x600", current: 42, day30: 30, day60: 18, day90: 6, trend: "Project-driven spikes" },
];

const anomalies = [
  { product: "Nitrile Gloves (Box/100)", message: "15 units consumed in one day vs. average of 3/day. Possible bulk issue or recording error.", severity: "high" },
  { product: "Corrugated Shipping Box 18x12x8", message: "150 units shipped in single transaction — 3x normal daily volume. Verify order accuracy.", severity: "medium" },
];

export default function AIInsights() {
  return (
    <AppLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-2xl font-heading font-bold text-foreground flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-accent" />
            AI Insights
          </h1>
          <p className="text-sm text-muted-foreground mt-1">Smart analysis of your inventory patterns</p>
        </div>

        {/* Reorder Suggestions */}
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="bg-card rounded-lg border p-5">
          <div className="flex items-center gap-2 mb-4">
            <ShoppingCart className="h-4 w-4 text-accent" />
            <h2 className="font-heading font-semibold text-card-foreground">Smart Reorder Suggestions</h2>
          </div>
          <div className="space-y-3">
            {reorderSuggestions.map(item => (
              <div key={item.id} className="flex items-center justify-between rounded-md border px-4 py-3">
                <div>
                  <p className="text-sm font-medium text-card-foreground">{item.name}</p>
                  <p className="text-xs text-muted-foreground">Current: {item.quantity} • Suggested order: {item.suggestedQty} units from {item.supplier}</p>
                </div>
                <div className="text-right">
                  <span className={item.urgency === "critical" ? "status-badge-danger" : "status-badge-warning"}>
                    {item.urgency}
                  </span>
                  <p className="text-sm font-medium text-card-foreground mt-1">${item.estimatedCost.toLocaleString()}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Demand Forecast */}
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-card rounded-lg border p-5">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="h-4 w-4 text-primary" />
            <h2 className="font-heading font-semibold text-card-foreground">Demand Forecast</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="pb-2 text-left font-medium text-muted-foreground">Product</th>
                  <th className="pb-2 text-right font-medium text-muted-foreground">Current</th>
                  <th className="pb-2 text-right font-medium text-muted-foreground">30 Days</th>
                  <th className="pb-2 text-right font-medium text-muted-foreground">60 Days</th>
                  <th className="pb-2 text-right font-medium text-muted-foreground">90 Days</th>
                  <th className="pb-2 text-left font-medium text-muted-foreground">Trend</th>
                </tr>
              </thead>
              <tbody>
                {forecastData.map((f, i) => (
                  <tr key={i} className="border-b last:border-0">
                    <td className="py-2.5 font-medium text-card-foreground">{f.product}</td>
                    <td className="py-2.5 text-right">{f.current}</td>
                    <td className="py-2.5 text-right">
                      <span className={f.day30 === 0 ? "text-destructive font-medium" : "text-card-foreground"}>{f.day30}</span>
                    </td>
                    <td className="py-2.5 text-right">
                      <span className={f.day60 === 0 ? "text-destructive font-medium" : "text-card-foreground"}>{f.day60}</span>
                    </td>
                    <td className="py-2.5 text-right">
                      <span className={f.day90 === 0 ? "text-destructive font-medium" : f.day90 < 20 ? "text-warning font-medium" : "text-card-foreground"}>{f.day90}</span>
                    </td>
                    <td className="py-2.5 text-xs text-muted-foreground">{f.trend}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Anomaly Detection */}
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="bg-card rounded-lg border p-5">
          <div className="flex items-center gap-2 mb-4">
            <AlertOctagon className="h-4 w-4 text-destructive" />
            <h2 className="font-heading font-semibold text-card-foreground">Anomaly Detection</h2>
          </div>
          <div className="space-y-3">
            {anomalies.map((a, i) => (
              <div key={i} className="rounded-md border border-destructive/20 bg-destructive/5 px-4 py-3">
                <p className="text-sm font-medium text-card-foreground">{a.product}</p>
                <p className="text-xs text-muted-foreground mt-1">{a.message}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Natural Language Search */}
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-card rounded-lg border p-5">
          <div className="flex items-center gap-2 mb-4">
            <MessageSquare className="h-4 w-4 text-accent" />
            <h2 className="font-heading font-semibold text-card-foreground">Ask Your Inventory</h2>
          </div>
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="e.g. 'Which items will run out in the next 2 weeks?'"
              className="flex-1 rounded-md border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <button className="rounded-md bg-accent px-4 py-2.5 text-sm font-medium text-accent-foreground hover:bg-accent/90 transition-colors">
              Ask AI
            </button>
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {["What's running low?", "Show me top movers this week", "Any expiring items?"].map(q => (
              <button key={q} className="rounded-full border px-3 py-1 text-xs text-muted-foreground hover:bg-muted transition-colors">
                {q}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </AppLayout>
  );
}
