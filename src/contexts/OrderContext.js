import React from "react";

export const ordersTableColumns = [
  { Header: "Order_Id", accessor: "orderId" },
  { Header: "Customer_Name", accessor: "customerName" },
  { Header: "Customer_Phone", accessor: "customerPhone" },
  { Header: "Location", accessor: "customerAddress" },
  { Header: "Date", accessor: "dateCreated" },
  { Header: "Time", accessor: "time" },
  { Header: "Products", accessor: "productsCount" },
  { Header: "Amount", accessor: "grossAmount" },
  { Header: "Due", accessor: "amountDue" },
  { Header: "Status", accessor: "paymentStatus" },
  { Header: "Cashier", accessor: "carshierName" },
];

export const ordersTableActions = { delete: false, print: true, update: true };
export const ordersTestData = [
  {
    orderId: "BX65K123",
    customerName: "Julius Manyanga",
    customerAddress: "Kwale",
    customerPhone: "+25479812345",
    dateCreated: "12/2/2019",
    time: "8:10PM",
    products: [
      { productId: "KX10", quantity: 0, price: 100, total: 1000 },
      { productId: "KX100", quantity: 0, price: 100, total: 1000 },
    ],
    productsCount: 5,
    grossAmount: 500,
    discount: 50,
    amountDue: 200,
    paymentStatus: "Unpaid",
    carshierName: "Martha",
  },
];

export const OrderContext = React.createContext(ordersTestData);
export const OrdersProvider = OrderContext.Provider;
