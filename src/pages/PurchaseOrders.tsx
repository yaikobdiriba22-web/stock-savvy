import { motion } from "framer-motion";
import { ClipboardList } from "lucide-react";
import AppLayout from "@/components/AppLayout";
import { purchaseOrders } from "@/data/demo";

const statusBadge: Record<string, string> = {
  draft: "status-badge-info",
  submitted: "status-badge-success",
  partial: "status-badge-warning",
  received: "status-badge-success",
  cancelled: "status-badge-danger",
};

export default function PurchaseOrders() {
  return (
    <AppLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-heading font-bold text-foreground">Purchase Orders</h1>
          <p className="text-sm text-muted-foreground mt-1">Manage supplier orders from draft to received</p>
        </div>

        <div className="space-y-4">
          {purchaseOrders.map(po => (
            <motion.div key={po.id} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="bg-card rounded-lg border p-5">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <ClipboardList className="h-5 w-5 text-primary" />
                  <div>
                    <h3 className="font-heading font-semibold text-card-foreground">{po.poNumber}</h3>
                    <p className="text-sm text-muted-foreground">{po.supplier}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className={statusBadge[po.status]}>{po.status}</span>
                  <span className="text-lg font-heading font-bold text-card-foreground">${po.totalCost.toLocaleString()}</span>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="pb-2 text-left font-medium text-muted-foreground">Item</th>
                      <th className="pb-2 text-right font-medium text-muted-foreground">Ordered</th>
                      <th className="pb-2 text-right font-medium text-muted-foreground">Received</th>
                      <th className="pb-2 text-right font-medium text-muted-foreground">Unit Cost</th>
                      <th className="pb-2 text-right font-medium text-muted-foreground">Subtotal</th>
                    </tr>
                  </thead>
                  <tbody>
                    {po.items.map((item, i) => (
                      <tr key={i} className="border-b last:border-0">
                        <td className="py-2 text-card-foreground">{item.productName}</td>
                        <td className="py-2 text-right text-muted-foreground">{item.ordered}</td>
                        <td className="py-2 text-right">
                          <span className={item.received === item.ordered ? "text-success" : item.received > 0 ? "text-warning" : "text-muted-foreground"}>
                            {item.received}
                          </span>
                        </td>
                        <td className="py-2 text-right text-muted-foreground">${item.unitCost.toFixed(2)}</td>
                        <td className="py-2 text-right font-medium text-card-foreground">${(item.ordered * item.unitCost).toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="flex items-center gap-4 mt-3 pt-3 border-t text-xs text-muted-foreground">
                <span>Created: {new Date(po.createdDate).toLocaleDateString()}</span>
                <span>Expected: {new Date(po.expectedDate).toLocaleDateString()}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AppLayout>
  );
}
