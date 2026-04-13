import { motion } from "framer-motion";
import { Settings as SettingsIcon, User, Bell, Database, Palette } from "lucide-react";
import AppLayout from "@/components/AppLayout";

export default function SettingsPage() {
  return (
    <AppLayout>
      <div className="space-y-6 max-w-2xl">
        <div>
          <h1 className="text-2xl font-heading font-bold text-foreground">Settings</h1>
          <p className="text-sm text-muted-foreground mt-1">Configure your Stackwise instance</p>
        </div>

        {[
          { icon: User, title: "Team & Roles", desc: "Manage users, assign admin / manager / requestor roles" },
          { icon: Bell, title: "Notifications", desc: "Low-stock alerts, PO status updates, anomaly warnings" },
          { icon: Database, title: "Data & Import", desc: "CSV import, custom field definitions, data export" },
          { icon: Palette, title: "Branding", desc: "Company logo, color theme, report headers" },
          { icon: SettingsIcon, title: "General", desc: "Currency, timezone, default warehouse" },
        ].map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="bg-card rounded-lg border p-5 flex items-center gap-4 hover:shadow-sm transition-shadow cursor-pointer"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <item.icon className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-heading font-semibold text-card-foreground">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          </motion.div>
        ))}

        <div className="rounded-lg border border-dashed border-muted-foreground/30 p-6 text-center">
          <p className="text-sm text-muted-foreground">Connect to Lovable Cloud to enable persistent data, authentication, and team features.</p>
        </div>
      </div>
    </AppLayout>
  );
}
