import { NavLink as RouterNavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Package,
  ArrowRightLeft,
  ClipboardList,
  Truck,
  Sparkles,
  Settings,
  Box,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { to: "/", icon: LayoutDashboard, label: "Dashboard" },
  { to: "/products", icon: Package, label: "Products" },
  { to: "/movements", icon: ArrowRightLeft, label: "Stock Movements" },
  { to: "/purchase-orders", icon: ClipboardList, label: "Purchase Orders" },
  { to: "/suppliers", icon: Truck, label: "Suppliers" },
  { to: "/ai-insights", icon: Sparkles, label: "AI Insights" },
  { to: "/settings", icon: Settings, label: "Settings" },
];

export default function AppSidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 z-30 flex w-64 flex-col bg-sidebar border-r border-sidebar-border">
      <div className="flex items-center gap-2.5 px-6 py-5 border-b border-sidebar-border">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sidebar-primary">
          <Box className="h-4 w-4 text-sidebar-primary-foreground" />
        </div>
        <span className="font-heading text-lg font-bold text-sidebar-foreground tracking-tight">
          Stackwise
        </span>
      </div>

      <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
        {navItems.map((item) => (
          <RouterNavLink
            key={item.to}
            to={item.to}
            end={item.to === "/"}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition-colors",
                isActive
                  ? "bg-sidebar-accent text-sidebar-primary"
                  : "text-sidebar-muted hover:bg-sidebar-accent hover:text-sidebar-foreground"
              )
            }
          >
            <item.icon className="h-4 w-4 shrink-0" />
            {item.label}
          </RouterNavLink>
        ))}
      </nav>

      <div className="border-t border-sidebar-border px-4 py-3">
        <div className="flex items-center gap-2 rounded-md bg-sidebar-accent px-3 py-2">
          <div className="h-2 w-2 rounded-full bg-sidebar-primary animate-pulse-slow" />
          <span className="text-xs text-sidebar-muted">Demo Mode</span>
        </div>
      </div>
    </aside>
  );
}
