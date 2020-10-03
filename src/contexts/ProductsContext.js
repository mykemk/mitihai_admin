import React from "react";
export const ProductsContext = React.createContext(null);
export const ProductsProvider = ProductsContext.Provider;
export const ProductsConsumer = ProductsContext.Consumer;

export const productsAlertsColumns = [
  { Header: "Product_Name", accessor: "name" },
  { Header: "Quantity", accessor: "quantity" },
];
export const productsAlertActions = { stopSales: true };
export const productsAlertsTestData = [
  {
    name: "Wood Spoon",
    quantity: 100,
  },
];

export const productsTableColumns = [
  { Header: "Product_Name", accessor: "name" },
  { Header: "Category", accessor: "category" },
  { Header: "Type", accessor: "type" },
  { Header: "Price", accessor: "price" },
  { Header: "Quantity", accessor: "quantity" },
];

export const productsTableActions = { delete: true, update: true };
export const productsTestData = [
  {
    name: "Watch",
    category: "Lifestyle",
    type: "Men's Watches",
    price: 4000,
    quantity: 100,
    production_cost: 100,
    alert_quantity: 10,
    description: "A super awesome Italian watch",
  },
];
