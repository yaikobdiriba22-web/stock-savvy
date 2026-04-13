import { motion } from "framer-motion";
import { ArrowRightLeft, ArrowDownToLine, ArrowUpFromLine, Repeat2, Wrench } from "lucide-react";
import AppLayout from "@/components/AppLayout";
import { stockMovements } from "@/data/demo";

const typeIcon = {
  inbound: ArrowDownToLine,
  outbound: ArrowUpFromLine,
  transfer: Repeat2,
  adjustment: Wrench,
};

const typeBadge = {
  inbound: "status-badge-success",
  outbound: "status-badge-danger",
  transfer: "status-badge-info",
  adjustment: "status-badge-warning",
};

const sorted = [...stockMovements].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export default function Movements() {
  return (
    <AppLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-heading font-bold text-foreground">Stock Movements</h1>
          <p className="text-sm text-muted-foreground mt-1">Complete audit trail of inventory changes</p>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-card rounded-lg border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="px-4 py-3 text-left font-medium text-muted-foreground">Date</th>
                  <th className="px-4 py-3 text-left font-medium text-muted-foreground">Type</th>
                  <th className="px-4 py-3 text-left font-medium text-muted-foreground">Product</th>
                  <th className="px-4 py-3 text-right font-medium text-muted-foreground">Qty</th>
                  <th className="px-4 py-3 text-left font-medium text-muted-foreground">From / To</th>
                  <th className="px-4 py-3 text-left font-medium text-muted-foreground">Reason</th>
                  <th className="px-4 py-3 text-left font-medium text-muted-foreground">User</th>
                </tr>
              </thead>
              <tbody>
                {sorted.map(m => {
                  const Icon = typeIcon[m.type];
                  return (
                    <tr key={m.id} className="border-b last:border-0 hover:bg-muted/30 transition-colors">
                      <td className="px-4 py-3 text-muted-foreground whitespace-nowrap">
                        {new Date(m.date).toLocaleDateString()} {new Date(m.date).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                      </td>
                      <td className="px-4 py-3">
                        <span className={typeBadge[m.type]}>
                          <Icon className="h-3 w-3 mr-1 inline" />
                          {m.type}
                        </span>
                      </td>
                      <td className="px-4 py-3 font-medium text-card-foreground">{m.productName}</td>
                      <td className="px-4 py-3 text-right font-medium text-card-foreground">
                        {m.type === "inbound" ? "+" : m.type === "outbound" ? "-" : ""}{m.quantity}
                      </td>
                      <td className="px-4 py-3 text-muted-foreground text-xs">
                        {m.from && <span>From: {m.from}</span>}
                        {m.from && m.to && <span> → </span>}
                        {m.to && <span>To: {m.to}</span>}
                      </td>
                      <td className="px-4 py-3 text-muted-foreground">{m.reason}</td>
                      <td className="px-4 py-3 text-muted-foreground">{m.user}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </AppLayout>
  );
}
