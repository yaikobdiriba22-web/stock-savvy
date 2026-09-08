# Stock Savvy

This template gives you a full-featured inventory management app that covers everything from catalog management to purchase orders. The real-time dashboard shows stock health at a glance: total SKUs, items in stock, low-stock warnings, and out-of-stock flags. A needs-attention section surfaces what requires action right now, so nothing slips through.

The product catalog handles all the details: SKU, barcode, category, location, reorder thresholds, supplier links, and cost tracking. Admin-defined custom fields let you track industry-specific data like lot numbers or expiry dates. Stock movements are logged automatically, giving you a complete audit trail of what came in, what went out, and why — including transfers between locations. Purchase orders flow from draft to received, with partial receiving and automatic stock updates built in.

Stackwise includes AI features that bring enterprise-grade capabilities to smaller teams. Smart reorder suggestions analyze consumption patterns and lead times. Demand forecasting projects stock levels 30, 60, or 90 days out. Anomaly detection flags unusual movements before they become problems. A natural language search lets you query inventory conversationally instead of clicking through filters.

The app ships with a fully functional demo mode so anyone can explore every feature before connecting their own data.

Who This Is For

Small and mid-size businesses managing physical inventory without enterprise software costs

Retail operators tracking stock across one or more locations

Warehouse and fulfillment teams that need purchase order workflows and receiving logs

Food service and hospitality businesses monitoring stock levels with custom fields for expiry tracking

Operations leads who want AI-powered demand forecasting without a six-figure platform

Best Use Cases

Retail Inventory Management

Track products across your store or multiple locations with real-time stock levels and low-stock alerts. The purchase order workflow handles supplier ordering, and AI demand forecasting helps you stock the right amount before you run out.

Warehouse and Fulfillment Operations

Use the location hierarchy to organize inventory by warehouse, zone, aisle, shelf, and bin. Log every movement with an automatic audit trail. The barcode quick-entry mode speeds up receiving and shipping, and purchase order partial receiving handles split shipments without manual workarounds.

Food Service and Perishable Goods

Monitor stock levels alongside supplier lead times to keep fresh inventory rotating. Use custom fields to track expiry dates and lot numbers. The anomaly detection flags unusual consumption spikes or unexpected drops so you can catch waste or spoilage early.

Internal Supply Management

Let team members browse available inventory and submit requests through the requestor role, while managers handle approvals and restocking. The system tracks who requested what and when, keeping your supply room organized and accountable.

Getting Started

Step 1: Remix This Template

Click "Remix" to create your copy, loaded with demo data: sample products, suppliers, stock movements, and open purchase orders.

Step 2: Familiarize Yourself With the Project

Go to User > Settings > Knowledge, and read what's under "Project knowledge" to understand the intended architecture and functionality before you start customizing.

Step 3: Customize Your Brand

Update colors and your company logo. The clean interface uses status indicators that work with any brand.

Step 4: Set Up Your Catalog and Locations

Add products with SKUs, barcodes, categories, and warehouse locations. Define reorder thresholds and link items to preferred suppliers. Set up your location hierarchy and add custom field definitions for industry-specific attributes.

Step 5: Connect Your Tools

Configure authentication for your team and assign roles: admin, manager, or requestor. Set up notification preferences and import existing data through CSV upload. create for me

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/da1afd4e-c7f5-4a95-80d8-7584b41f8d2f).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
