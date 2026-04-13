export interface Product {
  id: string;
  sku: string;
  barcode?: string;
  name: string;
  category: string;
  location: string;
  quantity: number;
  reorderPoint: number;
  reorderQty: number;
  unitCost: number;
  supplier: string;
  lastRestocked: string;
  customFields?: Record<string, string>;
}

export interface StockMovement {
  id: string;
  productId: string;
  productName: string;
  type: "inbound" | "outbound" | "transfer" | "adjustment";
  quantity: number;
  from?: string;
  to?: string;
  reason: string;
  date: string;
  user: string;
}

export interface PurchaseOrder {
  id: string;
  poNumber: string;
  supplier: string;
  status: "draft" | "submitted" | "partial" | "received" | "cancelled";
  items: { productId: string; productName: string; ordered: number; received: number; unitCost: number }[];
  createdDate: string;
  expectedDate: string;
  totalCost: number;
}

export interface Supplier {
  id: string;
  name: string;
  contact: string;
  email: string;
  leadTimeDays: number;
  rating: number;
}

export const suppliers: Supplier[] = [
  { id: "s1", name: "Pacific Supply Co.", contact: "James Lin", email: "james@pacificsupply.com", leadTimeDays: 5, rating: 4.8 },
  { id: "s2", name: "Metro Wholesale", contact: "Sarah Chen", email: "sarah@metrowholesale.com", leadTimeDays: 3, rating: 4.5 },
  { id: "s3", name: "Northern Goods Ltd.", contact: "Erik Johansson", email: "erik@northerngoods.com", leadTimeDays: 7, rating: 4.2 },
  { id: "s4", name: "Summit Materials", contact: "Ana Torres", email: "ana@summitmaterials.com", leadTimeDays: 4, rating: 4.6 },
];

export const products: Product[] = [
  { id: "p1", sku: "WH-1001", barcode: "7891234560011", name: "Heavy Duty Shelf Bracket", category: "Hardware", location: "Warehouse A > Aisle 3 > Shelf B", quantity: 245, reorderPoint: 50, reorderQty: 200, unitCost: 4.50, supplier: "Pacific Supply Co.", lastRestocked: "2026-04-01" },
  { id: "p2", sku: "WH-1002", barcode: "7891234560028", name: "Industrial Cable Ties (100pk)", category: "Electrical", location: "Warehouse A > Aisle 1 > Bin 12", quantity: 18, reorderPoint: 30, reorderQty: 100, unitCost: 8.99, supplier: "Metro Wholesale", lastRestocked: "2026-03-15" },
  { id: "p3", sku: "WH-1003", barcode: "7891234560035", name: "Stainless Steel Hex Bolts M8", category: "Hardware", location: "Warehouse A > Aisle 3 > Shelf A", quantity: 1520, reorderPoint: 200, reorderQty: 1000, unitCost: 0.35, supplier: "Pacific Supply Co.", lastRestocked: "2026-04-05" },
  { id: "p4", sku: "WH-1004", barcode: "7891234560042", name: "Nitrile Gloves (Box/100)", category: "Safety", location: "Warehouse B > Zone 1 > Rack 4", quantity: 0, reorderPoint: 20, reorderQty: 50, unitCost: 12.50, supplier: "Summit Materials", lastRestocked: "2026-02-20" },
  { id: "p5", sku: "WH-1005", barcode: "7891234560059", name: "LED Panel Light 600x600", category: "Electrical", location: "Warehouse B > Zone 2 > Shelf C", quantity: 42, reorderPoint: 15, reorderQty: 30, unitCost: 34.00, supplier: "Northern Goods Ltd.", lastRestocked: "2026-03-28" },
  { id: "p6", sku: "WH-1006", barcode: "7891234560066", name: "Pallet Wrap 500mm", category: "Packaging", location: "Warehouse A > Aisle 5 > Floor", quantity: 8, reorderPoint: 10, reorderQty: 24, unitCost: 15.75, supplier: "Metro Wholesale", lastRestocked: "2026-03-10" },
  { id: "p7", sku: "WH-1007", barcode: "7891234560073", name: "Safety Goggles ANSI Z87", category: "Safety", location: "Warehouse B > Zone 1 > Rack 2", quantity: 67, reorderPoint: 25, reorderQty: 50, unitCost: 9.25, supplier: "Summit Materials", lastRestocked: "2026-04-08" },
  { id: "p8", sku: "WH-1008", barcode: "7891234560080", name: "Hydraulic Floor Jack 3T", category: "Equipment", location: "Warehouse C > Bay 1", quantity: 5, reorderPoint: 3, reorderQty: 5, unitCost: 189.00, supplier: "Northern Goods Ltd.", lastRestocked: "2026-01-15" },
  { id: "p9", sku: "WH-1009", barcode: "7891234560097", name: "Anti-Fatigue Floor Mat", category: "Safety", location: "Warehouse B > Zone 3 > Shelf A", quantity: 34, reorderPoint: 10, reorderQty: 20, unitCost: 28.50, supplier: "Pacific Supply Co.", lastRestocked: "2026-04-10" },
  { id: "p10", sku: "WH-1010", barcode: "7891234560104", name: "Corrugated Shipping Box 18x12x8", category: "Packaging", location: "Warehouse A > Aisle 6 > Floor", quantity: 0, reorderPoint: 100, reorderQty: 500, unitCost: 1.85, supplier: "Metro Wholesale", lastRestocked: "2026-02-28" },
  { id: "p11", sku: "FD-2001", name: "Organic Olive Oil 1L", category: "Food & Beverage", location: "Cold Storage > Section A", quantity: 120, reorderPoint: 30, reorderQty: 60, unitCost: 11.40, supplier: "Pacific Supply Co.", lastRestocked: "2026-04-06", customFields: { "Expiry Date": "2027-04-06", "Lot Number": "OOL-2026-0412" } },
  { id: "p12", sku: "FD-2002", name: "Whole Grain Flour 25kg", category: "Food & Beverage", location: "Dry Storage > Bay 2", quantity: 45, reorderPoint: 15, reorderQty: 30, unitCost: 22.00, supplier: "Metro Wholesale", lastRestocked: "2026-04-02", customFields: { "Expiry Date": "2026-10-02", "Lot Number": "WGF-2026-0390" } },
];

export const stockMovements: StockMovement[] = [
  { id: "m1", productId: "p1", productName: "Heavy Duty Shelf Bracket", type: "inbound", quantity: 200, to: "Warehouse A", reason: "PO-2026-042 received", date: "2026-04-01T09:30:00", user: "Mike Ross" },
  { id: "m2", productId: "p2", productName: "Industrial Cable Ties (100pk)", type: "outbound", quantity: 25, from: "Warehouse A", reason: "Order #ORD-5521", date: "2026-04-10T14:15:00", user: "Lisa Park" },
  { id: "m3", productId: "p5", productName: "LED Panel Light 600x600", type: "transfer", quantity: 10, from: "Warehouse B", to: "Warehouse C", reason: "Project allocation", date: "2026-04-09T11:00:00", user: "Mike Ross" },
  { id: "m4", productId: "p4", productName: "Nitrile Gloves (Box/100)", type: "outbound", quantity: 15, from: "Warehouse B", reason: "Safety restock - Floor", date: "2026-04-08T08:45:00", user: "Sarah Kim" },
  { id: "m5", productId: "p3", productName: "Stainless Steel Hex Bolts M8", type: "inbound", quantity: 1000, to: "Warehouse A", reason: "PO-2026-039 received", date: "2026-04-05T10:20:00", user: "Mike Ross" },
  { id: "m6", productId: "p6", productName: "Pallet Wrap 500mm", type: "outbound", quantity: 6, from: "Warehouse A", reason: "Shipping dept request", date: "2026-04-11T16:00:00", user: "Lisa Park" },
  { id: "m7", productId: "p10", productName: "Corrugated Shipping Box 18x12x8", type: "outbound", quantity: 150, from: "Warehouse A", reason: "Bulk order fulfillment", date: "2026-04-07T13:30:00", user: "Sarah Kim" },
  { id: "m8", productId: "p9", productName: "Anti-Fatigue Floor Mat", type: "inbound", quantity: 20, to: "Warehouse B", reason: "PO-2026-045 received", date: "2026-04-10T09:00:00", user: "Mike Ross" },
];

export const purchaseOrders: PurchaseOrder[] = [
  {
    id: "po1", poNumber: "PO-2026-048", supplier: "Metro Wholesale", status: "submitted",
    items: [
      { productId: "p2", productName: "Industrial Cable Ties (100pk)", ordered: 100, received: 0, unitCost: 8.99 },
      { productId: "p6", productName: "Pallet Wrap 500mm", ordered: 24, received: 0, unitCost: 15.75 },
    ],
    createdDate: "2026-04-11", expectedDate: "2026-04-14", totalCost: 1277.00,
  },
  {
    id: "po2", poNumber: "PO-2026-049", supplier: "Summit Materials", status: "draft",
    items: [
      { productId: "p4", productName: "Nitrile Gloves (Box/100)", ordered: 50, received: 0, unitCost: 12.50 },
    ],
    createdDate: "2026-04-12", expectedDate: "2026-04-16", totalCost: 625.00,
  },
  {
    id: "po3", poNumber: "PO-2026-045", supplier: "Pacific Supply Co.", status: "received",
    items: [
      { productId: "p9", productName: "Anti-Fatigue Floor Mat", ordered: 20, received: 20, unitCost: 28.50 },
    ],
    createdDate: "2026-04-06", expectedDate: "2026-04-11", totalCost: 570.00,
  },
  {
    id: "po4", poNumber: "PO-2026-047", supplier: "Northern Goods Ltd.", status: "partial",
    items: [
      { productId: "p5", productName: "LED Panel Light 600x600", ordered: 30, received: 12, unitCost: 34.00 },
      { productId: "p8", productName: "Hydraulic Floor Jack 3T", ordered: 5, received: 5, unitCost: 189.00 },
    ],
    createdDate: "2026-04-08", expectedDate: "2026-04-15", totalCost: 1965.00,
  },
];

// Helper functions
export function getStockStatus(product: Product): "in-stock" | "low-stock" | "out-of-stock" {
  if (product.quantity === 0) return "out-of-stock";
  if (product.quantity <= product.reorderPoint) return "low-stock";
  return "in-stock";
}

export function getStockStats(prods: Product[]) {
  const totalSKUs = prods.length;
  const inStock = prods.filter(p => getStockStatus(p) === "in-stock").length;
  const lowStock = prods.filter(p => getStockStatus(p) === "low-stock").length;
  const outOfStock = prods.filter(p => getStockStatus(p) === "out-of-stock").length;
  const totalValue = prods.reduce((sum, p) => sum + p.quantity * p.unitCost, 0);
  return { totalSKUs, inStock, lowStock, outOfStock, totalValue };
}
