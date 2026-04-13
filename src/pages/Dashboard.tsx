import { motion } from "framer-motion";
import {
  Package,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  DollarSign,
  ArrowRightLeft,
  TrendingDown,
} from "lucide-react";
import AppLayout from "@/components/AppLayout";
import StatCard from "@/components/StatCard";
import { products, stockMovements, purchaseOrders, getStockStatus, getStockStats } from "@/data/demo";

const stats = getStockStats(products);

const needsAttention = [
  ...products.filter(p => getStockStatus(p) === "out-of-stock").map(p => ({
    id: p.id, name: p.name, sku: p.sku, type: "out-of-stock" as const, message: "Out of stock — reorder needed",
  })),
  ...products.filter(p => getStockStatus(p) === "low-stock").map(p => ({
    id: p.id, name: p.name, sku: p.sku, type: "low-stock" as const, message: `${p.quantity} remaining (reorder at ${p.reorderPoint})`,
  })),
];

const recentMovements = stockMovements.slice().sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 5);
const openPOs = purchaseOrders.filter(po => po.status !== "received" && po.status !== "cancelled");

export default function Dashboard() {
  return (
    <AppLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-2xl font-heading font-bold text-foreground">Dashboard</h1>
          <p className="text-sm text-muted-foreground mt-1">Stock health overview — {new Date().toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })}</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          <StatCard title="Total SKUs" value={stats.totalSKUs} icon={Package} />
          <StatCard title="In Stock" value={stats.inStock} icon={CheckCircle2} variant="success" />
          <StatCard title="Low Stock" value={stats.lowStock} icon={AlertTriangle} variant="warning" />
          <StatCard title="Out of Stock" value={stats.outOfStock} icon={XCircle} variant="danger" />
          <StatCard title="Inventory Value" value={`$${stats.totalValue.toLocaleString("en-US", { minimumFractionDigits: 2 })}`} icon={DollarSign} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Needs Attention */}
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-card rounded-lg border p-5">
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle className="h-4 w-4 text-warning" />
              <h2 className="font-heading font-semibold text-card-foreground">Needs Attention</h2>
              <span className="ml-auto text-xs text-muted-foreground">{needsAttention.length} items</span>
            </div>
            <div className="space-y-3">
              {needsAttention.map(item => (
                <div key={item.id} className="flex items-center justify-between rounded-md border px-3 py-2.5">
                  <div>
                    <p className="text-sm font-medium text-card-foreground">{item.name}</p>
                    <p className="text-xs text-muted-foreground">{item.sku}</p>
                  </div>
                  <span className={item.type === "out-of-stock" ? "status-badge-danger" : "status-badge-warning"}>
                    {item.type === "out-of-stock" ? "Out of Stock" : "Low Stock"}
                  </span>
                </div>
              ))}
              {needsAttention.length === 0 && <p className="text-sm text-muted-foreground text-center py-4">All stock levels healthy!</p>}
            </div>
          </motion.div>

          {/* Recent Activity */}
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="bg-card rounded-lg border p-5">
            <div className="flex items-center gap-2 mb-4">
              <ArrowRightLeft className="h-4 w-4 text-primary" />
              <h2 className="font-heading font-semibold text-card-foreground">Recent Activity</h2>
            </div>
            <div className="space-y-3">
              {recentMovements.map(m => (
                <div key={m.id} className="flex items-center justify-between rounded-md border px-3 py-2.5">
                  <div>
                    <p className="text-sm font-medium text-card-foreground">{m.productName}</p>
                    <p className="text-xs text-muted-foreground">{m.reason}</p>
                  </div>
                  <div className="text-right">
                    <span className={
                      m.type === "inbound" ? "status-badge-success" :
                      m.type === "outbound" ? "status-badge-danger" :
                      "status-badge-info"
                    }>
                      {m.type === "inbound" ? "+" : m.type === "outbound" ? "-" : "↔"}{m.quantity} {m.type}
                    </span>
                    <p className="text-xs text-muted-foreground mt-0.5">{new Date(m.date).toLocaleDateString()}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Open POs */}
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-card rounded-lg border p-5">
          <div className="flex items-center gap-2 mb-4">
            <TrendingDown className="h-4 w-4 text-accent" />
            <h2 className="font-heading font-semibold text-card-foreground">Open Purchase Orders</h2>
            <span className="ml-auto text-xs text-muted-foreground">{openPOs.length} open</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b text-left">
                  <th className="pb-2 font-medium text-muted-foreground">PO Number</th>
                  <th className="pb-2 font-medium text-muted-foreground">Supplier</th>
                  <th className="pb-2 font-medium text-muted-foreground">Status</th>
                  <th className="pb-2 font-medium text-muted-foreground">Expected</th>
                  <th className="pb-2 font-medium text-muted-foreground text-right">Total</th>
                </tr>
              </thead>
              <tbody>
                {openPOs.map(po => (
                  <tr key={po.id} className="border-b last:border-0">
                    <td className="py-2.5 font-medium text-card-foreground">{po.poNumber}</td>
                    <td className="py-2.5 text-muted-foreground">{po.supplier}</td>
                    <td className="py-2.5">
                      <span className={
                        po.status === "draft" ? "status-badge-info" :
                        po.status === "submitted" ? "status-badge-success" :
                        "status-badge-warning"
                      }>
                        {po.status}
                      </span>
                    </td>
                    <td className="py-2.5 text-muted-foreground">{new Date(po.expectedDate).toLocaleDateString()}</td>
                    <td className="py-2.5 text-right font-medium text-card-foreground">${po.totalCost.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </AppLayout>
  );
}
